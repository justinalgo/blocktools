import { Provider } from '@txnlab/use-wallet'


export function getProviderById(providerId: string, providers: Provider[] | null) {
  return providers?.find(provider => provider.metadata.id === providerId)
}
