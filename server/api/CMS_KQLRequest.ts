export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig(event)


  const email = config.apiAuthEmail
  const password = config.apiAuthPassword

  const authHeader = Buffer.from(`${email}:${password}`).toString('base64')

  const body = await readBody(event)

  console.log('config.public.apiUrl:', config.public.apiUrl)

  const dataApi = await $fetch(`${config.public.apiUrl}/api/query`, {
    lazy: true,
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`
    },
    body,
  })

  return dataApi
})


