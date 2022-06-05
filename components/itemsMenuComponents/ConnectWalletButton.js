import React from 'react'
import { useMoralis } from "react-moralis"
export const ConnectWalletButton = ({
    width = '100%',
    title = "Hello world!",
    backgroundColor = "#000000",
    color = "#ffff",
    fontSize = "2rem",
    height = "auto",
    borderRadius = "0.5em",
    fontWeight = "normal",
    fontFamily = "Times New Roman",
}) => {
const { enableWeb3, account  } = useMoralis()

const handleLogin = async () => {
    await enableWeb3()
}

console.log(account)


  return (
    <>
    {
      account ? (

        <button onClick={handleLogin}>
            Connect Wallet
        </button>
      ) :
      (
        <p>Connected: {account}</p>
      )

    }
    </>
  )
}
