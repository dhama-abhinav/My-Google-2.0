import React from 'react'
import { HeaderOption } from './HeaderOption'
import { DotsHorizontalIcon, MapIcon, MicrophoneIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/solid'
export const  HeaderOptions = ()=> {
  return (
    <div className='flex items-center w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52'>
        <div className='flex space-x-6'>
            <HeaderOption Icon={SearchIcon} title='All' selected />
            <HeaderOption Icon={PhotographIcon} title='Images' />
            <HeaderOption Icon={PlayIcon} title='Videos' />
            <HeaderOption Icon={NewspaperIcon} title='News' />
            <HeaderOption Icon={MapIcon} title='Maps' />
            <HeaderOption Icon={DotsHorizontalIcon} title='More' />
        </div>
        <div className='flex space-x-6'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}
