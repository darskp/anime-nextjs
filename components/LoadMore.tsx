"use client"

import { fetchAnime } from '@/app/action';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import AnimeCard, { AnimeProp } from './AnimeCard';

let page: number = 2;

const LoadMore = () => {
    const { ref, inView, entry } = useInView();
    const [data, setData] = useState<JSX.Element[]>([])

    useEffect(() => {
        if (inView) {
            fetchAnime(page)
                .then((res) => {
                    setData([...data, ...res]);
                    page++
                })
        }
    }, [inView, data])


    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
                {data}
            </section>
            <section className='w-full flex-center'>
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    )
}

export default LoadMore