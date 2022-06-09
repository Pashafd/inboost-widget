import { RootState } from "@/store"
import axios, { AxiosInstance } from "axios"
import { useSelector } from "react-redux"

export const getDomain = (): string => {
  const domain = location.hostname
  const configDomain = useSelector((state: RootState) => state.pReducer.domains.appApiDomain)

  let baseURL = "https://pharma.inboost.ai:11132"
  if ("mhp.inboost.ai" === domain) {
    baseURL = "https://mhp.inboost.ai:11112"
  } else if ("pharma.inboost.ai" === domain) {
    baseURL = "https://pharma.inboost.ai:11132"
  } else {
    baseURL = configDomain
  }

  return baseURL
}

export const getConstructorDomain = (): string => {
  const configDomain = useSelector((state: RootState) => state.pReducer.domains.constructorApiDomain)
  const domain = location.hostname

  let baseURL = "https://mhp.inboost.ai:5053"
  if ("mhp.inboost.ai" == domain) {
    baseURL = "https://mhp.inboost.ai:5053"
  } else if ("pharma.inboost.ai" == domain) {
    baseURL = "https://pharma.inboost.ai:11132"
  } else {
    baseURL = configDomain
  }

  return baseURL
}

export const useApi = (): AxiosInstance => {
  const token = useSelector((state: RootState) => state.pReducer.bearerToken)

  return axios.create({
    baseURL: "https://inboost.ai:11114/api/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useTestApi = (): AxiosInstance => {
  const token = useSelector((state: RootState) => state.pReducer.bearerToken)

  return axios.create({
    baseURL: `${getDomain()}/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useConstructorApi = (): AxiosInstance => {
  const token = useSelector((state: RootState) => state.pReducer.bearerToken)

  return axios.create({
    baseURL: `${getConstructorDomain()}/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useAuthApi = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://adm.inboost.ai:5093/api/`,
  })
}

export const useAdminApi = (): AxiosInstance => {
  const token = useSelector((state: RootState) => state.pReducer.bearerToken)

  return axios.create({
    baseURL: `https://adm.inboost.ai:5093/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useOnlyConstructorApi = (): AxiosInstance => {
  const token = useSelector((state: RootState) => state.pReducer.bearerToken)

  return axios.create({
    baseURL: `https://mhp.inboost.ai:5053/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
