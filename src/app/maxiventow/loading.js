import React from 'react';
import styles from '../styles/loading.module.scss';
import { ScaleLoader } from 'react-spinners';

function Loading() {
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

export default Loading;