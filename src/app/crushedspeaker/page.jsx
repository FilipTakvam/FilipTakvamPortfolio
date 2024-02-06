'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";

function CrushedSpeaker() {
    return (
        <div className={styles.background}>
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/CrushedSpeaker/LandingPage.png' alt='Hero image of Maxivent OW' />
                <PortfolioImage src='/CrushedSpeaker/Scope.png' alt='Scope of work and time table' />
                <PortfolioImage src='/CrushedSpeaker/SemanticWords.png' alt='Problems Title' />
                <PortfolioImage src='/CrushedSpeaker/animation.gif' alt='Overview of Maxivent OW' />
                <PortfolioImage src='/CrushedSpeaker/ComputerScreen.png' alt='Repairability' />
                <PortfolioImage src='/CrushedSpeaker/Balls.png' alt='Exploded view' />
                <PortfolioImage src='/CrushedSpeaker/Underneath.png' alt='Air flow' />
                <PortfolioImage src='/CrushedSpeaker/conductive.png' alt='Pressing button' />
                <PortfolioImage src='/CrushedSpeaker/Cable.png' alt='Clear feedback text' />
                <PortfolioImage src='/CrushedSpeaker/OverviewParts.png' alt='UI Animation' />
                <PortfolioImage src='/CrushedSpeaker/Packaging.png' alt='Filter change' />
                <PortfolioImage src='/CrushedSpeaker/PerspectiveMultiple.png' alt='Filter change' />
                <PortfolioImage src='/CrushedSpeaker/Evaluation.png' alt='More than render text' />
                <PortfolioImage src='/CrushedSpeaker/LivingRoom.png' alt='Image collage of process' />
                <nav className={styles.navbar}>
                    <Link href='/maxiventow'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/maxiventow'>
                        <div className={styles.navLink}>
                            <TiArrowRight style={{ color: '#000000' }} /><p>Next Project</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default CrushedSpeaker;