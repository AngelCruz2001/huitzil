import { DrawableArea } from '../components/DrawableArea'
import { ItemMenu } from '../components/ItemMenu'
import styles from '../styles/Home.module.scss'

import { Sidebar } from '../components/Sidebar'
import { TitlePage } from '../components/TitlePage'
export default function Home() {
  return (
    <>
      <section className={styles.content}>
        <TitlePage />
        {/* Dropping zone */}
        <DrawableArea />
      </section>

      <section className={styles.itemMenu}>
        {/* Items zone */}
        <ItemMenu />
      </section>

     
    </>
  )
}
