'use client';
import React, { useEffect } from 'react';
import styles from './styles/loading.module.scss';
import { ScaleLoader } from 'react-spinners';

function LoadingScreen() {
  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    // Applying on unmount    
    return () => {
      document.body.style.overflow = "visible";
    }
  }, [])
  return (
    <div
      className={styles.loadingPage}
    >
      <div>
        <ScaleLoader color="#000000" />
        <p>The content is being loaded. Please Wait</p>
      </div>
    </div>
  )
}

export default LoadingScreen;