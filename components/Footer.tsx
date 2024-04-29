import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex-wrap py-4 px-8 sm:px-16 flex-between gap-2 w-full bg-[#161921]'>
            <p className='text-white font-bold text-base'>@2024 EpicAnimeVault</p>
            <Image
                src="./logo.svg"
                alt="logo"
                width={47}
                height={44}
                className="object-contain"
            />
            <div className='flex-between gap-5 '>
                <Image
                    src="./instagram.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
                <Image
                    src="./tiktok.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
                <Image
                    src="./twitter.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
            </div>
        </footer>
    )
}

export default Footer