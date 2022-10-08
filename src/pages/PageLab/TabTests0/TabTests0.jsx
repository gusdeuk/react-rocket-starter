import Grid from 'apollo-react/components/Grid';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';

import AniDelete from '../../../animations/react-lottie/delete.json';
import AniDownload from '../../../animations/react-lottie/download.json';
import AniError from '../../../animations/react-lottie/error.json';
import AniSuccess from '../../../animations/react-lottie/success.json';
import AniUpload from '../../../animations/react-lottie/upload.json';
import AniWarning from '../../../animations/react-lottie/warning.json';
import styles from './TabTests0.module.scss';

export default function TabAnimations() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************
    function scrollToTop() {
        window.scrollTo(0, 0)
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['tab-tests']].join(' ')}>
            <div className={'clx-headline-title grey center'}>Lottie Animation Examples</div>
            <Grid container spacing={0} className={styles['ani-container']}>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniSuccess}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.1)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniError}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(0.8)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniWarning}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(0.9)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniUpload}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(0.7)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniDownload}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.25)' }}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniDelete}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1)' }}
                    />
                </Grid>

                {/* <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniSettings}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(0.7)' }}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniPill}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.1)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniLab}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.8)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniNotFound}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.2)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniRocket}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1)' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} className={styles['grid-item']}>
                    <Lottie
                        loop
                        animationData={AniEt}
                        play
                        className={styles['ani-lottie']}
                        style={{ transform: 'scale(1.2)' }}
                    />
                </Grid> */}
            </Grid>

            <div className={'clx-desc-box blue top-gutter'}>
                <p>
                    <b>
                        These are some free animation examples taken from&nbsp;
                        <a href='https://lottiefiles.com' target='blank' className={'clx-link-purple'}>
                            Lottiefiles.com
                        </a>
                        &nbsp;community.
                    </b>
                </p>
                <p className='clx-hlp-no-margin'>
                    We are using the embedded react Lottie player dependency to show animations as react components.
                    Lottie format offers vector lightweight and scalable animations. Lottiefiles.com provides all the
                    tools and docs that you need to create, edit, test and display Lottie animations. Animations are
                    just simple Json Data Chunks.
                </p>
            </div>
        </div>
    )
}
