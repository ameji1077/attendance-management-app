export default defineNuxtPlugin(() => {
  const { loadToken } = useAuth()
  loadToken()
})