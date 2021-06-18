import React, { useEffect } from 'react'

const Page = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Page
