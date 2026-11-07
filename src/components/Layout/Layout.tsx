import { Outlet, ScrollRestoration } from 'react-router'
import TopBar from '../TopBar/TopBar'
import TabBar from '../TabBar/TabBar'
import styles from './Layout.module.css'

function Layout() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <TabBar />
      <ScrollRestoration />
    </>
  )
}

export default Layout
