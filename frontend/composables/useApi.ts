export const apiFetch = <T>(path: string, options: any = {}): Promise<T> => {
  const config = useRuntimeConfig()
  const token = useState<string | null>('auth_token').value

  const normalizedPath = path.startsWith('/api') ? path : `/api${path}`

  return $fetch<T>(normalizedPath, {
    baseURL: config.public.apiBase,
    headers: {
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  })
}