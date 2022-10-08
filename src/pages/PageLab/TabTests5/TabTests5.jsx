import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';

import AniNotFound from '../../../animations/react-lottie/not-found.json';
import styles from './TabTests5.module.scss';

export default function TabTests() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************

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
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={'clx-headline-title grey center'}>WIP</div>
                    <Lottie
                        loop
                        animationData={AniNotFound}
                        play
                        className={styles['ani-lottie']}
                        style={{ width: '250px', margin: '25px auto' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={'clx-headline-title grey center'}>WIP</div>
                    <Lottie
                        loop
                        animationData={AniNotFound}
                        play
                        className={styles['ani-lottie']}
                        style={{ width: '250px', margin: '25px auto' }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
