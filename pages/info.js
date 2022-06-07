import React, { useState, useEffect } from 'react';
import { addCollection, startGetCollections } from '../actions/collection';
import styles from '../styles/Card.module.scss'
import { CardItem } from '../components/CardItem'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'

function Info() {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(false);
  const [CreatingCollection, setCreatingCollection] = useState(false);

  const { collections } = useSelector(state => state.collection);



  const handleClick = async () => {
    console.log("asdf")
    const { value } = await Swal.fire({
      title: 'Create a new collection',
      input: 'text',
      inputLabel: 'Collection name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })

    if (value) {
      Swal.fire(`The new name is: ${value}`)
      dispatch(addCollection({
        collection_name: value
      }))
    }


  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.title}>Tables</h3>
        <div className={styles.cardsContainer}>
          {
            collections ? collections.map((collection, index) => {
              return (
                <CardItem
                  key={index}
                  collection={collection}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              )
            })
              : undefined
          }

        </div>
        <div className={styles.button}>
          <button onClick={handleClick} >
            Create Table
          </button>
        </div>

      </div>

    </div>
  )
}

export default Info