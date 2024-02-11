'use client';
import React from 'react';
import styles from './styles/loading.module.scss';
import { ScaleLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';

function Loading() {
  return (
    <AnimatePresence>
    <motion.div 
        className={styles.loadingPage}
        initial={{ opacity: 1 }}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition:{ duration: 1}}}
    >
        <div>
            <ScaleLoader color="#000000" />
            <p>The content is being loaded. Please Wait</p>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Loading;