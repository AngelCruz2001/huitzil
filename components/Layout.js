import { Sidebar } from "./Sidebar"
import styles from '../styles/Home.module.scss'
export const Layout  = ({ children }) =>{
    return (

        <div className={styles.main}>
            <section className={styles.sidebar}>
                <Sidebar />
            </section>

            {children}
        </div>
    )
}