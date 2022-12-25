import * as request from '~/utils/httpRequest.js'

export const getUser = async (page, limit) => {
  const res = await request.get(`/participant`, {
    params: {
      page,
      limit,
    },
  })
  return res
}
