import Image from 'next/image'
import { getProviderById } from '@/utils/wallets';
import { useWallet } from '@txnlab/use-wallet'
import deflyIcon from '@/images/defly.svg'
import peraIcon from '@/images/pera.svg'

type ProviderIconType = { 
  providerId: string;
  width?: number;
  height?: number;
}

type ProviderIconImage = {
  [providerId: string]: string;
}

const providerIconImages: ProviderIconImage = {
  'defly': deflyIcon,
  'pera': peraIcon,
}


export default function ProviderIcon({ providerId, width, height }: ProviderIconType) {
  const { providers, isReady } = useWallet()

  if (!isReady) {
    return null
  }
  
  const provider = getProviderById(providerId, providers)
  if (!provider) {
    return null
  }

  return (
    <Image src={providerIconImages[provider.metadata.id]} width={width ?? 50} height={height ?? 50} alt={`${provider.metadata.name} icon`} className="rounded-full shadow-md" />
  )
}