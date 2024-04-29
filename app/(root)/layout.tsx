import Footer from '@/components/Footer'
import React, { ReactNode } from 'react'

function Rootlayout({ children }: { children: ReactNode }) {
    return (
        <main >
            {children}
            <Footer />
        </main>
    )
}

export default Rootlayout