import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { useDispatch } from 'react-redux';
import {startChangeTitle} from '../actions/project';
export const TitlePage = () => {

    const [appTitle, setAppTitle] = useState('Application Name');


    const dispatch = useDispatch();
    const handleChange = (e) => {
        setAppTitle(e.target.value)
        dispatch(startChangeTitle(e.target.value))
    }
    return (
        <nav className={styles.navbar}>
            <input className={styles.title} onChange={(e) => handleChange(e)} value={appTitle} />
        </nav>
    )
}
