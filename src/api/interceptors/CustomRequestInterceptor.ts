import { useUserStoreContext } from '@/store/modules/user'
import { AxiosRequestConfig } from 'axios'

export default function (config: AxiosRequestConfig) {
  if (config) {
    if (!config.headers) {
      config.headers = {}
    }
  }
  return config
}
