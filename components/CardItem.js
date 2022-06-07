import React from 'react'
import styles from '../styles/CardTable.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCollectionActive } from '../actions/collection';
export const CardItem = ({ collection, activeCard, setActiveCard }) => {
  
  const dispatch = useDispatch();
  const {collections} = useSelector(state => state.collection);
  const handleClick = (collection) => {
    setActiveCard(!activeCard);
    dispatch(setCollectionActive(collection));
  }
  // onClick={() => handleClick(collection)}
  return (
    <div className={styles.cardItem}>
      <h4 className={styles.title}>
        {collection.collection_name}
      </h4>
    </div>
  )
}
