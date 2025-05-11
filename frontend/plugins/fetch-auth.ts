export default defineNuxtPlugin((nuxtApp) => {
  const { token } = useAuth()

  nuxtApp.$fetch = $fetch.create({
    baseURL: 'http://localhost:8000/api',
    onRequest({ options }) {
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        }
      }
    },
  })
})
