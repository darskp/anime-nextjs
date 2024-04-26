import Image from 'next/image'
import React from 'react'

const LoadMore = () => {
    return (
        <div className='w-full flex-center'>
            <Image
                src="./spinner.svg"
                alt="spinner"
                width={56}
                height={56}
                className="object-contain"
            />
        </div>
    )
}

export default LoadMore