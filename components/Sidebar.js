import React from 'react'
import styles from '../styles/Sidebar.module.scss'

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faSignOut,
    faCircleUser,
    faHandshake,
    faPaintBrush,
    faDatabase
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
    return (
        <div className={styles.content}>



            <div className={styles.user}>
                <FontAwesomeIcon
                    icon={faCircleUser}
                />
            </div>


            <div className={styles.menu}>
                <Link href={`/`}>
                    <div className={styles.menuItem}>

                        <FontAwesomeIcon icon={faPaintBrush} />
                        <h5>Draw</h5>

                    </div>
                </Link>


                <Link href={`/info`}>
                    <div className={styles.menuItem}>

                        <FontAwesomeIcon icon={faDatabase} />
                        <h5>Info</h5>

                    </div>
                </Link>

                <Link href={`/contracts`}>
                    <div className={styles.menuItem}>


                        <FontAwesomeIcon icon={faHandshake} />
                        <h5>Contracts</h5>
                    </div>
                </Link>


                <div className={styles.menuItem}>
                    <FontAwesomeIcon icon={faSignOut} />

                </div>

            </div>










        </div>
    )
}
