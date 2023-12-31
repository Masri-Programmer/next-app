import './globals.css'

import { Providers } from './GlobalRedux/provider';
import {SideNav} from '@imports'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
