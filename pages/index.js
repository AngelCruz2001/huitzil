import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { base } from '../apis/base'

// import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState([]);

  const handleGet = async () => {
    const resp = await base.get('/hello')
    setData(resp.data.names)
  }

  useEffect(() => {
    handleGet();
  }, [])


  return (
    <div className='h-screen'>

      <div class="flex h-full ">
        <div class="flex-none bg-slate-100 w-1/8">
          minSidebar
        </div>
        <div class="flex-auto w-5/8 bg-slate-300">
          content
        </div>
        <div class="flex-auto w-2/8 justify-center align-center bg-slate-500">
          elements
        </div>
      </div>


    </div>
  )
}
