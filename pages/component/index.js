import contractAddresses from "../../contracts/contractAddresess.json";
import abi from "../../contracts/abi.json";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from "react";

export default function Component() {


  const { enableWeb3, isWeb3Enabled } = useMoralis()

  const { runContractFunction, data, error } = useWeb3Contract({
    abi,
    contractAddress: '0x65DFB4cE0C52559Bac889e40d8DcBD65242BAe76',
    functionName: 'storedData',
    params: {
      _x: 60,
    }
  })

  console.log(Number(data))

  return (
    <div>
      {
        !isWeb3Enabled &&
        <button onClick={enableWeb3}>Connect</button>
      }

      {
        isWeb3Enabled && <button onClick={runContractFunction}> Execute</button>
      }
      <p>
        {JSON.stringify(data)}
      </p>

    </div >
  );
}