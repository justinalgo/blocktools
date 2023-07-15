'use client'

import React from 'react'

import { WalletProvider, useInitializeProviders, PROVIDER_ID } from '@txnlab/use-wallet'
import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { PeraWalletConnect } from '@perawallet/connect'


export default function WalletContextProvider({ children }: { children: React.ReactNode }) {
  const providers = useInitializeProviders(
    {
      providers: [
        { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
        { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
      ],
      debug: false,
    }
  )

  return (
    <WalletProvider value={providers}>{ children }</WalletProvider>
  )
}