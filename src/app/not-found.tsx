'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const NotFound = () => {
  const router = useRouter()
  const [secondsRemaining, setSecondsRemaining] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prevState => prevState - 1)
    }, 1000)

    const countdownTimer = setTimeout(() => {
      clearInterval(timer)
      router.push('/')
    }, 7000)

    return () => {
      clearInterval(timer)
      clearTimeout(countdownTimer)
    }
  }, [router])

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <b className="mb-4 text-6xl text-primaryAccent">404</b>
      <p className="mb-2 text-lg">Sorry, we couldn&apos;t find that page</p>
      <p className="mb-4 text-sm">
        You will return to the Home page after {secondsRemaining}{' '}
        {secondsRemaining === 1 ? 'second' : 'seconds'}
      </p>
    </main>
  )
}

export default NotFound
