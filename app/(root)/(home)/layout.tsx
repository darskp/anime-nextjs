import Hero from '@/components/Hero'
import React, { ReactNode } from 'react'

async function Homelayout({ children }: { children: ReactNode }) {
    return (
        <main >
            <Hero />
           {children}
        </main>
    )
}

export default Homelayout