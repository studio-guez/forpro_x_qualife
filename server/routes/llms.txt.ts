type KQLEvent = {
  title: string
  location: string
  datetime: string
  time: string
  information: string
  ticketing_url: string
}

type KQLResponse = {
  code: number
  status: string
  result: {
    infos: {
      header_title: string
      intro_text: string
    }
    events: KQLEvent[]
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const email = config.apiAuthEmail
  const password = config.apiAuthPassword
  const authHeader = Buffer.from(`${email}:${password}`).toString('base64')

  let kqlData: KQLResponse | null = null
  try {
    kqlData = await $fetch<KQLResponse>(`${config.public.apiUrl}/api/query`, {
      method: 'POST',
      headers: { Authorization: `Basic ${authHeader}` },
      body: {
        query: 'site',
        select: {
          infos: {
            query: 'site',
            select: {
              header_title: true,
              intro_text: true,
            },
          },
          events: {
            query: 'site.children()',
            select: {
              title: true,
              location: true,
              datetime: true,
              time: true,
              information: true,
              ticketing_url: true,
            },
          },
        },
      },
    })
  } catch {
    // CMS unreachable — serve without event listing
  }

  const events: KQLEvent[] = kqlData?.result.events ?? []

  // Group events by year, sorted ascending
  const byYear: Record<string, KQLEvent[]> = {}
  for (const ev of events) {
    const year = new Date(ev.datetime).getFullYear().toString()
    if (!byYear[year]) byYear[year] = []
    byYear[year].push(ev)
  }

  const eventSections = Object.entries(byYear)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([year, evs]) => {
      const items = evs.map((ev) => {
        const parts: string[] = [
          `**${formatDate(ev.datetime)}**`,
          ...(ev.time ? [`(${ev.time})`] : []),
          `— ${ev.title}`,
          ...(ev.location ? [`— ${ev.location}`] : []),
          ...(ev.information ? [`— ${stripHtml(ev.information)}`] : []),
        ]
        return `- ${parts.join(' ')}`
      })
      return `## Programme ${year}\n\n${items.join('\n')}`
    })
    .join('\n\n')

  const content = [
    `# Les rendez-vous des formateur·rices d'apprenti·es`,
    '',
    `> Ateliers collaboratifs gratuits pour les professionnel·les en charge d'apprenti·es en entreprise, organisés par la Fondation ForPro et la Fondation Qualife à Genève, Suisse.`,
    '',
    `Les rendez-vous des formateur·rices d'apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es en entreprise. L'objectif est de valoriser le rôle des formateur·rices d'apprenti·es, d'offrir un lieu d'échange et de développer des ressources concrètes pour soutenir leur quotidien.`,
    '',
    `Le projet a débuté en décembre 2024 avec un atelier « kick-off » réunissant 35 acteurs et actrices de la formation professionnelle issus de secteurs d'activité et tailles d'entreprises variés. En 2025, une programmation annuelle co-construite avec les participant·es a vu le jour.`,
    '',
    eventSections,
    '',
    `## Organisateurs`,
    '',
    `- [Fondation ForPro](https://www.for-pro.ch/entreprises) : Fondation de droit privé genevoise soutenant les entreprises formatrices d'apprenti·es. Contact : desk@for-pro.ch — +41 22 552 24 42`,
    `- [Fondation Qualife](https://www.qualife.ch/actualites/) : Fondation genevoise soutenant l'insertion et la formation professionnelle. Contact : event@qualife.ch — +41 22 700 84 61`,
    '',
    `## Contact et informations`,
    '',
    `Pour toute suggestion de thématique, proposition ou pour être informé·e de la prochaine programmation, contacter : desk@for-pro.ch et event@qualife.ch`,
    '',
    `## Ressources`,
    '',
    `- [rendezvousdesformateurs.ch](https://rendezvousdesformateurs.ch) — Programme complet, inscriptions et ressources des ateliers passés`,
  ].join('\n')

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'no-store')
  return content
})
