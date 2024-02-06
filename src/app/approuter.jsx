'use client';
import React from 'react';
import { useRouter, usePathname} from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './components/transition';

function AppRouter({children}) {
    const router = useRouter();
    const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
        <Transition routerpath={pathName}></Transition>
        {children}
    </AnimatePresence>
  )
}

export default AppRouter