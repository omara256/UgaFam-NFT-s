import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Kampala NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text:bg-gray-900 font-poppins text-2xl tracking-widest'>UGAFAM NFT Market Place</div>
            <Link href="/nft/ugafam_drop">
            <button className='h-16 bg-red-800 text-white w-full rounded-full mt-10 font-bold'>
                Click NFT
              </button>
              </Link>
          </form>
        </div>
      </Tilt>
    </div>
     
    </div>
  )
}

export default Home
