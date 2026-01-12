export type event = {
  date: string
  hour: string
  is_complete?: boolean
  location:  string
  subtitle:  string
  link_resources?:  string
  link_inscription?: string
  content: string
}

export const data: {
  events: event[]
  archive: {
    year: string
    events: event[]
  }[]
} = {
  events: [],
  archive: [
    {
      year: "2025",
      events: [
        {
          date: "Lundi 14 avril 2025",
          hour: "08h00 10h00 – 10h00 12h00",
          location: "Fondation ForPro - Route de la Galaise 23A, 1228 Plan&#8209;les&#8209;Ouates",
          subtitle: 'Thème&nbsp;: Connaissance du public adolescent',
          link_resources: "https://nextcloud.for-pro.ch/s/2gA3zD9oMRSAxTz",
          content: `<p>Animé par Soizic de Montalier, psychologue clinicienne et du travail, spécialisée dans l’accompagnement des adolescents et l’analyse des pratiques professionnelles.</p>`
        },
        {
          date: "Mardi 10 juin 2025",
          hour: "16h30 - 18h30",
          is_complete: true,
          location: "Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève",
          subtitle: "Thème&nbsp;: Le rôle des formateur.rices d'apprenti.es - Partage d'expériences & Apports théoriques",
          link_resources: "https://nextcloud.for-pro.ch/s/zTk9TCZPSTcrZC2",
          content: `<p>Former un.e apprenti.e, transmettre et évaluer, comment et avec quels outils&nbsp;?</p>`
        },
        {
          date: "Mercredi 27 août 2025 ",
          hour: "8h - 10h",
          is_complete: true,
          location: "Fondation ForPro – Chemin de la Galaise 23A 1228 Plan&#8209;les&#8209;Ouates",
          subtitle: "Thème&nbsp;: réseaux et partenaires, onboarding apprenti.e",
          content: `
        <p>
          « C’est la rentrée&nbsp;! Développez vos connaissances des offres de soutien (réseaux et partenaires) pour les formateur-rices et créez / renforcez le lien avec votre apprenti·e pour bien démarrer l’année... en douceur(s). »
        </p>
        <p>
            <span style="color: var(--app-color--blue)">Attention évènement en duo</span>, merci de venir accompagné de votre apprenti·e (si possible).
          <br>Le cas échéant, aucun problème, des jeunes apprenti.es seront également présents pour vous permettre le même niveau d’aventure&nbsp;!
        </p>
      `,
        },
        {
          date: "Jeudi 16 octobre",
          hour: "8h30 - 10h30",
          location: "Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève",
          subtitle: "Thème&nbsp;: Produire et former",
          is_complete: true,
          content: `<p>Tension entre production et formation | Apports&nbsp;théoriques et échanges de pratiques en visio&#8209;conférence.</p>`
        },
        {
          date: "Jeudi 11 décembre 2025",
          hour: "18h00 - 21h30",
          location: "Fondation ForPro – Chemin de la Galaise 23A 1228 Plan&#8209;les&#8209;Ouates",
          subtitle: "Thème&nbsp;: Clôture de la programmation",
          link_inscription: "https://framaforms.org/rendez-vous-des-formateurrices-decembre-2025-1745314433",
          content: `
        <p>Evénement festif pour réunir la communauté, conférence, réseautage et apéritif dinatoire.</p>
        <p><span style="color: var(--app-color--blue)">Attention évènement en duo</span>, merci de venir accompagné de votre apprenti·e (si possible).</p>
      `
        }
      ]
    }
  ]
}
