import React, { useEffect } from 'react'
import Draggable from "react-draggable";
import { useDispatch, useSelector } from 'react-redux';
import { addElement, updateElement } from '../actions/drawable';
import abi from "../contracts/abi.json";

import { unsetActiveItemElement } from '../actions/itemsElements';
import styles from '../styles/ItemMenu.module.scss';
import { useForm } from '../hooks/useForm';
import { useMoralis, useWeb3Contract } from 'react-moralis';

export const ItemMenu = () => {
    const dispatch = useDispatch();
    const { components, activeItemElement } = useSelector(state => state.itemsElements);
    const { elements } = useSelector(state => state.drawable);
    const [values, handleInputChange, reset, changeValue] = useForm({
        title: '',
        backgroundColor: '',
        color: '',
        fontSize: '',
        borderRadius: '',
        fontWeight: '',
    });
    const { enableWeb3, isWeb3Enabled } = useMoralis()

    const connectWallet = async () => {
        await enableWeb3()
    }
    const { runContractFunction, data, error } = useWeb3Contract({
        abi,
        contractAddress: '0xaB2b5534612E83F5ae5348ddEF89e5880110a2D3',
        functionName: 'storedData',
        params: {
            _x: JSON.stringify(elements),
        }
    })

    console.log(data)

    const handleAddItem = (id, type, name, style) => {

        const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        dispatch(addElement({
            id: hash,
            type,
            style,
            container: {
                x: 1,
                y: 1,
                width: 2,
                height: 2
            }
        }))
    }

    const handleAcceptChanges = () => {

        dispatch(updateElement({
            ...activeItemElement,
            style: {
                ...activeItemElement.style,
                ...values,
            }
        }))

        dispatch(unsetActiveItemElement())
        reset();
    }

    return (
        <div className={styles.listContainer}>

            {
                activeItemElement
                    ?
                    <>
                        <h3 className={styles.title}> Options </h3>
                        {
                            Object.keys(values).map((item, index) => (
                                <input
                                    key={index}
                                    className={styles.input}
                                    type="text"
                                    onChange={handleInputChange}
                                    value={Object.values(values)[index]}
                                    name={item}
                                    placeholder={item}
                                />
                            ))
                        }
                        <select name="" id="">
                            {
                                <option>
                                    1
                                </option>
                            }
                        </select>

                        <div className={styles.button}>
                            <button onClick={handleAcceptChanges} >
                                Accept
                            </button>
                        </div>

                    </>
                    :

                    <>
                        <h2 className={styles.title}>Select an item</h2>

                        {
                            components.map(({
                                id,
                                type,
                                name,
                                imageElement,
                                style,
                            }, index) => (

                                <div className={styles.listItem} key={id} onClick={() => handleAddItem(id, type, name, style)}>
                                    <img src={imageElement} alt="" />
                                    <p>{name}</p>
                                </div>

                            ))
                        }
                    </>
            }

            {/* <Link href={'/Deployment'}> */}
            <div className={styles.button}>
                <button onClick={isWeb3Enabled ? runContractFunction : connectWallet}>
                    {isWeb3Enabled ? 'Deploy' : 'Connect Wallet'}
                </button>
            </div>
            {/* </Link> */}

        </div>

    )
}
