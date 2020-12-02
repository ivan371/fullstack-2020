const baseUrl = 'http://localhost:8000/api/'

export const ApiClient = (url: string, init: RequestInit | undefined = {}) => {
  const token = window.localStorage.getItem('auth')
  let headers

  ;({ headers = {} } = init || {headers: {}})

  if (token) {
    (headers as any)['Authorization'] = `Bearer ${token}`
  }

  console.log(headers)

  return fetch(`${baseUrl}${url}`, { ...init, headers })
}