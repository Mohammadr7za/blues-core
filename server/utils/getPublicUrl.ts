export const getPublicUrl = (path: string) => {
  const prefix = path.startsWith('/') ? '' : '/'

  return `${process.env.NUXT_PUBLIC_API_BASE_URL}${prefix}${path}`
}
