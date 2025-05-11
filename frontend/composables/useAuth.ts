export const useAuth = () => {
  const token = useState<string | null>('auth_token', () => null)

  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem('auth_token', newToken)
  }

  const clearToken = () => {
    token.value = null
    localStorage.removeItem('auth_token')
  }

  const loadToken = () => {
    token.value = localStorage.getItem('auth_token')
  }

  return {
    token,
    setToken,
    clearToken,
    loadToken,
  }
}
