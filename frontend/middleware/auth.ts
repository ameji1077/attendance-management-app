export default defineNuxtRouteMiddleware(async () => {
  const { token, loadToken } = useAuth()

  if (process.client && !token.value) {
    loadToken()
  }

  if (!token.value) {
    return navigateTo('/login')
  }

  try {
    await apiFetch('/user', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
  } catch (error) {
    console.warn('認証に失敗しました。ログインへリダイレクトします。')
    return navigateTo('/login')
  }
})