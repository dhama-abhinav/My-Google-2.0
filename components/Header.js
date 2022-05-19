import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {Avatar} from '../components/Avatar'
import {HeaderOptions} from '../components/HeaderOptions'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'

export const Header = () => {
   const router = useRouter()
   const inputRef = useRef(null)
    const search = (e)=>{
        e.preventDefault()
        const term = inputRef.current.value
       console.log(term)
       if(!term) return
       router.push(`/search?term=${term}`)
      }

  return (
    <header className=' '>
    <div className='flex w-full p-4 items-center'>
    <Image
    className='cursor-pointer'
    src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    height={40}
    width={100}
    onClick= { ()=>router.push('/')}
     />
     <form className='flex flex-grow items-center ml-4 sm:ml-14 mr-4 px-6 py-3 border-gray-200 border rounded-full shadow-lg
      max-w-3xl' >
       <input
       className='focus:outline-none w-full flex-grow'
       ref={inputRef}
        type="text" name="" id="" placeholder='Search..'
         />
      <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
      onClick={()=> inputRef.current.value=""} />
      <MicrophoneIcon className='h-7 cursor-pointer hidden sm:inline-flex sm:border-l-2 pl-4 text-blue-500 border-gray-300' />
      <SearchIcon className='h-7 hidden sm:inline-flex text-blue-500'/>
      <button
      type='submit'
      hidden
      onClick={search}
      />

     </form>
     <Avatar className='hidden sm:inline-flex sm:ml-auto '  url='https://i.pinimg.com/564x/53/32/52/533252c810037ca9459b6a4821600a97.jpg' />
     </div>
     <HeaderOptions />
  </header>

  )
}
