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

                <PortfolioImage src='/CrushedSpeaker/LandingPage.png' alt='Hero image of the Crushed Speaker' />
                <PortfolioImage src='/CrushedSpeaker/Scope.png' alt='The orginal project brief' />
                <PortfolioImage src='/CrushedSpeaker/SemanticWords.png' alt='Semantic words of the speaker' />
                <PortfolioImage src='/CrushedSpeaker/animation.gif' alt='Animation involving clay and steel ball' />
                <PortfolioImage src='/CrushedSpeaker/ComputerScreen.png' alt='Process picture of CAD' />
                <PortfolioImage src='/CrushedSpeaker/Balls.png' alt='Material Exploration' />
                <PortfolioImage src='/CrushedSpeaker/Underneath.png' alt='Underneath view' />
                <PortfolioImage src='/CrushedSpeaker/conductive.png' alt='Hand pressing conductive fabric' />
                <PortfolioImage src='/CrushedSpeaker/Cable.png' alt='Cable' />
                <PortfolioImage src='/CrushedSpeaker/OverviewParts.png' alt='Overview of parts' />
                <PortfolioImage src='/CrushedSpeaker/Packaging.png' alt='Packaging' />
                <PortfolioImage src='/CrushedSpeaker/PerspectiveMultiple.png' alt='Multipe crushed speakers' />
                <PortfolioImage src='/CrushedSpeaker/Evaluation.png' alt='Evaluation of the Semantic words' />
                <PortfolioImage src='/CrushedSpeaker/LivingRoom.png' alt='Final shoot' />
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