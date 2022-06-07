import React from 'react'
import styles from '../styles/CardTable.module.scss'
import { useDispatch } from 'react-redux'
import { setCollectionActive } from '../actions/collection';
export const CardItem = ({collection, activeCard, setActiveCard}) => {
  const dispatch = useDispatch();

  const handleClick = (collection) => {
    setActiveCard(!activeCard);
    dispatch(setCollectionActive(collection));
  }
  return (
    <div className={styles.cardItem} onClick={()=>handleClick(collection)}>
      <h4 className={styles.title}>
        {collection.collection_name}
      </h4>
    </div>
  )
}
