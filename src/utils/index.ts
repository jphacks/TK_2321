type fetcherProps = {
  resource: RequestInfo
  init?: RequestInit
}

export const fetcher = async ({
  resource,
  init,
}: fetcherProps): Promise<any> => {
  const res = await fetch(resource, init)

  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(errorRes.message ?? 'Got an error while requesting')
    throw error
  }

  return res.json()
}
