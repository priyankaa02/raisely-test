/* eslint-disable no-throw-literal */
import axios from 'axios'
import { URL } from '../constants'

export const fetchApiMaker = () => async ({ url, data, method }) => {
  try {
    const res = await axios.request({
      method,
      baseURL: URL.ENDPOINT,
      url,
      data,
      timeout: 5000,
    })
    console.log('api res', res, url)
    if ((res && res.status === 200) || (res.status === 200 && res.data)) {
      // only here success
      if (res && res.data) {
        return res.data
      } else {
        return res
      }
    } else {
      // success: false; so handle in catch below
      throw res
    }
  } catch (err) {
    console.log('api err', err)
    if (err.data) {
      if (err.data.error_description) {
        throw err.data
      } else {
        throw {
          err,
          success: false,
          error_description:
            'something went wrong, Please try again after refresh',
          error_code: 0,
        }
      }
    } else {
      throw {
        err,
        success: false,
        error_description:
          'something went wrong, Please try again after refresh',
        error_code: 0,
      }
    }
  }
}

export function* fetchApi({ url, data, method }) {
  const res = yield fetchApiMaker()({ url, data, method })
  console.log('fetchApi res', res)
  return res
}
