'use client'

import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AccountInfo, useWallet } from '@txnlab/use-wallet'
import { WalletIcon } from '@heroicons/react/24/outline'
import ProviderIcon from './ProviderIcon'
import AccountSelector from './AccountSelector'
import { classNames, truncateAddress } from '@/utils/strings'
import algosdk from 'algosdk'


export default function WalletConnectButtton() {
  const { clients, providers, isActive, isReady, activeAccount, getAccountInfo } = useWallet()
  const [ acctData, setAcctData ] = useState<AccountInfo | null>(null)


  useEffect(() => {
    async function doGetAccountInfo() {
      if (isReady && isActive && activeAccount && clients) {
        const acctData = await getAccountInfo()

        if (acctData) {
          setAcctData(acctData)
        }
      }
    }

    doGetAccountInfo()
  }, [ activeAccount ])

  return (
    <Menu as="div" className="relative p-1 flex">
        <Menu.Button>
          <WalletIcon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-8 w-[32rem] origin-top-right rounded-md bg-white pb-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {isReady && isActive && activeAccount && acctData &&
          <div className="bg-slate-100 text-slate-600 p-3 rounded-t-md flex w-full">
            <div className="w-3/6">
              <h2 className="flex space-x-2 items-center">
                <ProviderIcon providerId={activeAccount.providerId} width={24} height={24} />
                <span>{activeAccount.name}</span>
              </h2>
              <span className="text-slate-500 text-xs italic">{truncateAddress(activeAccount.address)}</span>
            </div>
            <div className="self-end w-3/6">
              {acctData?.amount > 0 && acctData?.['min-balance'] && 
              <div className="text-xs">
                Total: {algosdk.microalgosToAlgos(acctData?.amount)?.toPrecision(4)}A
                <br />
                Available: {algosdk.microalgosToAlgos(acctData?.amount - acctData?.['min-balance'])?.toPrecision(5)}A
              </div>
              }
              <AccountSelector />
            </div>
          </div>
          }
          {providers?.map((provider) => (
            <Menu.Item as="div" key={provider.metadata.id} className="p-3 flex items-center space-x-6">
              <ProviderIcon providerId={provider.metadata.id} />
              <span className={classNames(provider.isActive ? "border-b-2 border-violet-500" : "", "px-2")}>{provider.metadata.name}</span>
              <div className="w-full flex justify-end space-x-2">
                {provider.isConnected && !provider.isActive &&
                <button type="button" onClick={provider.setActiveProvider} className="border border-slate-400 px-6 py-1 rounded text-sm text-slate-700">
                  Activate
                </button>
                }
                {!provider.isConnected &&
                <button type="button" onClick={provider.connect} className="border border-slate-400 px-8 py-1 rounded text-sm text-slate-700">
                  Connect
                </button>
                }
                {provider.isConnected &&
                <button type="button" onClick={provider.disconnect} className="border border-slate-400 px-8 py-1 rounded text-sm text-slate-700">
                  Disconnect
                </button>
                }
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}