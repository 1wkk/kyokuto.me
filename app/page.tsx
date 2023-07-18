'use client'

import { motion } from 'framer-motion'

const Hi = () => {
  return (
    <div className='flex h-[80vh] items-center justify-center'>
      <motion.h1
        className='select-none font-bold'
        style={{ fontSize: 'clamp(48px, 5vw, 76px)' }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.33 }}
      >
        Ō Kyokutō
      </motion.h1>
    </div>
  )
}

export default Hi
