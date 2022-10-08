import Grid from 'apollo-react/components/Grid';
import { useEffect } from 'react';

import logoAnimateCss from '../../../assets/logos/icon-animatecss.svg';
import logoApolloDs from '../../../assets/logos/icon-apollo-ds.svg';
import logoAxiosRtg from '../../../assets/logos/icon-axios-rtg.svg';
import logoChartsJs from '../../../assets/logos/icon-charts-js.svg';
import logoCra from '../../../assets/logos/icon-cra.svg';
import logoCssModules from '../../../assets/logos/icon-css-modules.svg';
import logoLottie from '../../../assets/logos/icon-lottie.svg';
import logoMui from '../../../assets/logos/icon-mui.svg';
import logoPrettier from '../../../assets/logos/icon-prettier.svg';
import logoPwa from '../../../assets/logos/icon-pwa.svg';
import logoReact from '../../../assets/logos/icon-react.svg';
import logoReactRouter from '../../../assets/logos/icon-reactrouter.svg';
import logoRedux from '../../../assets/logos/icon-redux.svg';
import logoSass from '../../../assets/logos/icon-sass.svg';
import logoTesting from '../../../assets/logos/icon-testing.svg';
import logoWorkbox from '../../../assets/logos/icon-workbox.svg';
import styles from './LogoGrid.module.scss';

export default function LogoGrid() {
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
        <div className={styles['comp-logogrid']}>
            <Grid container spacing={0} className={styles['logos-container']}>
                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoReact} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoPwa} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoApolloDs} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoMui} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoSass} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoAnimateCss} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoReactRouter} />
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoChartsJs} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoAxiosRtg} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoPrettier} />
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoCssModules} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoCra} />
                    </div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoRedux} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoLottie} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoWorkbox} />
                    </div>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={3} className={styles['grid-item']}>
                    <div className={styles['img-wrapper']}>
                        <img alt='' src={logoTesting} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
