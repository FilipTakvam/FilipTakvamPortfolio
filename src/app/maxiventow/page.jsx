import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";

export default function MaxiventOW() {
    return (
        <div className={styles.background}>
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/MaxiventOW/HeroImage.png' alt='Hero image of Maxivent OW' />
                <PortfolioImage src='/MaxiventOW/DesignProcess.png' alt='Scope of work and time table' />
                <PortfolioImage src='/MaxiventOW/Problems.png' alt='Problems Title' />
                <PortfolioImage src='/MaxiventOW/OverviewFaded.png' alt='Overview of Maxivent OW' />
                <PortfolioImage src='/MaxiventOW/Repairability.png' alt='Repairability' />
                <PortfolioImage src='/MaxiventOW/Teardown.png' alt='Exploded view' />
                <PortfolioImage src='/MaxiventOW/Airflow.png' alt='Air flow' />
                <PortfolioImage src='/MaxiventOW/UI_pressbutton.png' alt='Pressing button' />
                <PortfolioImage src='/MaxiventOW/ClearFeedbackText.png' alt='Clear feedback text' />
                <PortfolioImage src='/MaxiventOW/UI_above_lights.gif' alt='UI Animation' />
                <PortfolioImage src='/MaxiventOW/FilterChange.png' alt='Filter change' />
                <PortfolioImage src='/MaxiventOW/PCB.png' alt='Filter change' />
                <PortfolioImage src='/MaxiventOW/MoreThanRender.png' alt='More than render text' />
                <PortfolioImage src='/MaxiventOW/Process.png' alt='Image collage of process' />
                <PortfolioImage src='/MaxiventOW/StudioShot.png' alt='Image collage of process' />
                <nav className={styles.navbar}>
                    <Link href='/crushedspeaker'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/crushedspeaker'>
                        <div className={styles.navLink}>
                            <TiArrowRight style={{ color: '#000000' }} /><p>Next Project</p>
                        </div>
                    </Link>
                </nav>
            </div>

        </div>
    )
}
