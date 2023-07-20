import { CircleStackIcon, WrenchIcon } from '@heroicons/react/24/outline'
import Link from "next/link"


export default function Assets() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-700">Algorand Standard Asset Tools</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:shadow-lg">
              <div className="flex flex-1 flex-col p-8 justify-center items-center">
                <CircleStackIcon className="text-slate-700 w-32" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">Create an ASA</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-xs text-gray-500">Need to create a token or NFT? This tool makes it easy to do!</dd>
                  <dt className="sr-only">Role</dt>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1 justify-center space-x-4">
                    <Link href="/assets/create" className="relative -mr-px w-full flex items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-slate-700">
                      <WrenchIcon className="text-slate-700 w-5" />
                      Use it!
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
