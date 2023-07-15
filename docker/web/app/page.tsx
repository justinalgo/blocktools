import Navigation from '@/components/Navigation'
import Image from 'next/image'


export default function Home() {
  
  return (
    <div className="min-h-full">
      <Navigation />

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </div>
  )
}