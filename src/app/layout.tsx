import Navbar from '@/components/navbar'
import RootProvider from '@/components/styled-components-provider'
import StyledComponentsRegistry from '@/components/styled-components-registry/registry'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'App Router Demo',
    template: '%s | App Router Demo'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <RootProvider>
            <Navbar />
            <main>{children}</main>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
