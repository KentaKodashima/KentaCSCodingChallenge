import axios from 'axios'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

/**
 * A function to send HTTP GET request to the server.
 * @param { string } route - The route for the auth server.
 * @param { Object? } payload - The payload to pass as parameters for the request.
 * @returns { Promise<any> } - Returns the response of the HTTP request.
 */
export const getRequest = async (route) => {
  const instace = axios.create({
    baseURL: SERVER_URL,
  })
  const response = await instace.get(route)
  return response.data
}

/**
 * A function to send HTTP POST request to the server.
 * @param { string } route - The route for the auth server.
 * @param { Object? } payload - The payload to pass as parameters for the request.
 * @returns { Promise<any> } - Returns the response of the HTTP request.
 */
export const postRequest = async (route, payload) => {
  try {
    const instace = axios.create({
      baseURL: SERVER_URL,
    })
    const response = await instace.post(route, payload)
    return response.data
  } catch (e) {
    return e.message
  }
}