import ClientComponent from '@/components/client-component'
import ServerComponent from '@/components/server-component'
import Image from 'next/image'
import ClientLayout from './layout'
import ServerPage from './teams/[id]/page'

export default function Home() {
  return (
    <main>

      <ClientLayout>
        <ServerPage /> {/* valid! */}
      </ClientLayout>

      <ClientComponent>
        <ServerComponent /> {/* valid! */}
      </ClientComponent>
      
    </main>
  )
}
