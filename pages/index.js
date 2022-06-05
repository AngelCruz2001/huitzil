import { DrawableArea } from '../components/DrawableArea'
import { ItemMenu } from '../components/ItemMenu'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Sidebar } from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <section className={styles.content}>
        {/* Dropping zone */}
        <DrawableArea />
      </section>

      <section className={styles.itemMenu}>
        {/* Items zone */}
        <ItemMenu />
      </section>

      <div style={
        {
          position: 'absolute',
          top: '0',
          left: '0',

        }
      }>

        <Link href="/component/"
        >
          <a>gg</a>
        </Link>
        {/* <Button></Button> */}
      </div>
    </div>



  )
}
