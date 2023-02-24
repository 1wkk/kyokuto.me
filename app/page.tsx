'use client'

import { useEffect } from 'react'

export const metadata = {
  title: 'Tyler Roi',
  description: 'tyr<hi@tyr.im>',
}

const Hi = () => {
  useEffect(() => {
    location.href =
      'https://tyri.notion.site/tyr-da3a1dce8823418eb4e80befc0491714'
  }, [])

  return (
    <div className='flex h-screen items-center justify-center'>{`Hi, I'm Tyler Roi`}</div>
  )
}

export default Hi
