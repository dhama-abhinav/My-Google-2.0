import React from 'react'
import {PaginationIcons} from '../components/PaginationIcons'

export const SearchResults = ({results}) => {
    console.log("Results",results)
  return (
    <div className='mx-auto w-full px-4 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='mt-3 mb-5 text-gray-600 text-md'>
            About {results.searchInformation?.formattedTotalResults} results ( {results.searchInformation?.formattedSearchTime})   seconds.
        </p>

        {
        results.items.map( (item)=>(
            <div className='max-w-xl mb-8 ' key={item.link}>
                <div className='group' >
                    <p>
                    <a className=' text-sm' href={item.link}>
                        {item.formattedUrl}
                    </a>
                    </p>
                    <a className=' text-xl truncate font-medium text-blue-800 group-hover:underline' href={item.link}>
                        {item.title}
                    </a>
                </div>
                <p className='line-clamp-2'>
                    {item.snippet}
                </p>
            </div>
        ))
        }
        <PaginationIcons  />
    </div>
  )
}
