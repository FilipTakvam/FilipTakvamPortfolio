'use client';
import {motion} from 'framer-motion';
import React from 'react'
import { AnimatePresence } from 'framer-motion';

function Transition({routerpath}) {
  return (
    <>
    <motion.div
        key={routerpath}
        className='slide-in'
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease: [0.76, 0, 0.24, 1]}}
    >
    </motion.div>
    <motion.div
        className='slide-out'
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 1, ease: [0.76, 0, 0.24, 1]}}
    >
    </motion.div>
    </>
  )
}

export default Transition;