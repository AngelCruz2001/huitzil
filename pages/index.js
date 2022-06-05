import { DrawableArea } from '../components/DrawableArea'
import { ItemMenu } from '../components/ItemMenu'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.sidebar}>
        <h1>H</h1>
      </section>
      <section className={styles.content}>
        {/* Dropping zone */}
        <DrawableArea />
      </section>

      <section className={styles.itemMenu}>
        {/* Items zone */}
        <ItemMenu />
      </section>

      <div>

      <Link href="/component/">
          <a>gg</a>
        </Link>
      {/* <Button></Button> */}
      </div>
    </div>


    
  )
}
