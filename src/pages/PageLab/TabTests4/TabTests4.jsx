import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';

import AniNotFound from '../../../animations/react-lottie/not-found.json';
import styles from './TabTests4.module.scss';

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
                <Grid item xs={12} sm={12} md={12}>
                    <div className={'clx-headline-title grey center'}>Add IntersectionObserver + CSS examples</div>

                    <Lottie
                        loop
                        animationData={AniNotFound}
                        play
                        className={styles['ani-lottie']}
                        style={{ width: '250px', margin: '25px auto' }}
                    />
                    <div>
                        {/* https://codepen.io/jh3y/pen/xxWyEBQ
            https://twitter.com/jh3yy/status/1558551933064884225?t=jivLI1DueAT0HyffMBWrEw&s=09
            */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
