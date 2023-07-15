import { getProviderById } from '@/utils/wallets';
import { useWallet } from '@txnlab/use-wallet'

type ProviderIconType = { 
  providerId: string;
  width?: number;
  height?: number;
}

export default function ProviderIcon({ providerId, width, height }: ProviderIconType) {
  const { providers, isActive, isReady } = useWallet()

  if (!isReady || !isActive) {
    return null
  }
  
  const provider = getProviderById(providerId, providers)
  if (!provider) {
    return null
  }

  return (
    <img
      className="rounded-full shadow-md"
      width={width ?? 50}
      height={height ?? 50}
      alt={`${provider.metadata.name} icon`}
      src={provider.metadata.icon}
    />
  )
}