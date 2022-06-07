import React, { useState, useEffect } from 'react';

import styles from '../styles/Card.module.scss'
import { CardItem } from '../components/CardItem'
import { useSelector } from 'react-redux';

function Info() {
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {

  }, [])

  const { collections } = useSelector(state => state.collection);

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {
          activeCard ?
            (

              <>
                <h3>Calis</h3>
              </>

            ) :
            (
              <>
                <h3 className={styles.title}>Tables</h3>
                <div className={styles.cardsContainer}>
                  {
                    collections.map((collection, index) => {
                      return (
                        <CardItem
                          key={index}
                          collection={collection}
                          activeCard={activeCard}
                          setActiveCard={setActiveCard}
                        />
                      )
                    })

                  }

                </div>
              </>
            )
        }





      </div>

    </div>
  )
}

export default Info