export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig(event)


  const email = config.apiAuthEmail
  const password = config.apiAuthPassword

  const authHeader = Buffer.from(`${email}:${password}`).toString('base64')

  const body = await readBody(event)

  console.log('config.public.apiUrl:', config.public.apiUrl)

  const dataApi = await $fetch(`${config.public.apiUrl}/api/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`
    },
    body,
  })

  // Replace internal Docker hostname with public-facing URL in the response
  const apiUrl = config.public.apiUrl
  const apiPublicUrl = config.public.apiPublicUrl
  if (apiUrl !== apiPublicUrl) {
    const json = JSON.stringify(dataApi).replaceAll(apiUrl, apiPublicUrl)
    return JSON.parse(json)
  }

  return dataApi
})


