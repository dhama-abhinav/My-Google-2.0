import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Avatar} from '../components/Avatar'
import {Footer} from '../components/Footer'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const inputRef:any = useRef(null)
  const router = useRouter()
 
  const search = (e:any)=>{
    e.preventDefault()
    const term = inputRef.current.value
    console.log(term)
    if(!term) return
    router.push(`/search?term=${term}`)

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <header className='flex justify-between text-sm text-gray-700 p-5 w-full shadow-md'>
      <div className='flex  space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      <div className='flex  space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <ViewGridIcon className='h-10 w-10 hover:bg-gray-300 rounded-full p-2 cursor-pointer' />
        <Avatar 
         url='https://i.pinimg.com/564x/53/32/52/533252c810037ca9459b6a4821600a97.jpg' />
      </div>
    </header>


    {/* Body */}
    <form className='flex flex-col items-center mt-32 flex-grow w-4/5' >
      <Image
      src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      height={100}
      width={300} />

      <div className=' flex w-full items-center px-5 mt-5 py-3 hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 max-w-md sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input 
        ref={inputRef}
        className='outline-none focus:outline-none border-none flex-grow'
        type="text" placeholder='Search here...' id="" />
        <MicrophoneIcon className='h-5 text-gray-500' />
      </div>
      <div className='flex flex-col space-y-2 justify-center mt-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <button onClick={search} className='btn'>Google Search</button>
        <button onClick={search} className='btn'> I'm Feeling Lucky</button>
        </div>
    </form>

    {/*  Footer */}
    <Footer />
    </div>
  )
}

export default Home
