import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return <main>{children}</main>
}

export default Layout
