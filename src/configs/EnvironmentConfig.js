const { API_ENDPOINT } = process.env

const getEnv = () => ({
  API_ENDPOINT
})

export const env = getEnv()
