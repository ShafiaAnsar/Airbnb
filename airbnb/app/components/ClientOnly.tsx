'use client'
interface ClientOnlyProps {
    children:React.ReactNode
}
import { useEffect, useState } from "react"


const ClientOnly:React.FC<ClientOnlyProps>= ({children}) => {
    useEffect(()=>{
        setHasMounted(true)
    },[])
    const [hasMounted,setHasMounted] = useState(false)
    if(!hasMounted) return null
  return (
    <>
    {children}
    </>
   
  )
}

export default ClientOnly