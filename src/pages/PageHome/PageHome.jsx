import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import FoundationIcon from '@mui/icons-material/Foundation';
import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import Hero from 'apollo-react/components/Hero';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import AniRocket from '../../animations/react-lottie/rocket.json';
import { ReactComponent as LogoCssmodules } from '../../assets/logos/icon-css-modules.svg';
import { ReactComponent as LogoPwa } from '../../assets/logos/icon-pwa.svg';
import { ReactComponent as LogoReact } from '../../assets/logos/icon-react.svg';
import { ReactComponent as LogoSass } from '../../assets/logos/icon-sass.svg';
import HeadLineDuoTitle from '../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import styles from './PageHome.module.scss';

export default function Home() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [animationTitle, setAnimationTitle] = useState(false)
    const [animationContent, setAnimationContent] = useState(false)
    const [animationSubTitle, setAnimationSubTitle] = useState(false)

    /// ***********************************************
    // functions and logic
    // ***********************************************

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        setTimeout(() => {
            setAnimationTitle(true)
        }, 300)

        setTimeout(() => {
            setAnimationSubTitle(true)
        }, 600)
        setTimeout(() => {
            setAnimationContent(true)
        }, 900)
    }, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div
            className={[
                styles['page-home'],
                styles['page-wrapper'],
                'page-content-plus-nav  animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['content']].join(' ')}>
                {/*  ------------------------------------------------------------ */}
                {/*  TOP HERO AND CARDS*/}
                {/*  ------------------------------------------------------------ */}
                <CSSTransition
                    in={animationTitle}
                    timeout={2000}
                    classNames={{
                        enter: 'animate__animated animate__fadeInDown animate__faster'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    {/*  ------------------------------------------------------------ */}
                    {/* HERO */}
                    {/*  ------------------------------------------------------------ */}
                    <Hero
                        title='Rocket Starter Application'
                        subtitle='Style your react-ive views like a champ!'
                        className={styles['top-hero']}
                    >
                        <Grid container spacing={3} className={styles['top-grid-container']}>
                            {/*  ------------------------------------------------------------ */}
                            {/*  CARD A*/}
                            <Grid item xs={12} sm={6} md={4} className={styles['grid-item']}>
                                <Card className={[styles['card-content'], styles['purple']].join(' ')}>
                                    <div className={[styles['card-title'], 'truncate'].join(' ')}>
                                        Do not start from scratch
                                    </div>

                                    <div className={styles['card-body']}>
                                        <div className={styles['card-icon']}>
                                            <DesignServicesIcon style={{}} />
                                        </div>
                                        <div className={styles['card-text']}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p>
                                                <b>This is not rocket science. Start fresh, use the right tools.</b>
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles['card-footer']}>
                                        <NavLink
                                            exact
                                            to='/app/PageAbout'
                                            activeClassName={styles['selected']}
                                            className={styles['link']}
                                        >
                                            <Button variant='secondary'>Show me the features</Button>
                                        </NavLink>
                                    </div>
                                </Card>
                            </Grid>

                            {/*  ------------------------------------------------------------ */}
                            {/*  CARD B*/}
                            <Grid item xs={12} sm={6} md={4} className={styles['grid-item']}>
                                <Card className={[styles['card-content'], styles['fuchsia']].join(' ')}>
                                    <div className={[styles['card-title'], 'truncate'].join(' ')}>
                                        What can I do with this?
                                    </div>

                                    <div className={styles['card-body']}>
                                        <div className={styles['card-icon']}>
                                            <FoundationIcon style={{}} />
                                        </div>
                                        <div className={styles['card-text']}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p>
                                                <b>This is not rocket science. Start fresh, use the right tools.</b>
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles['card-footer']}>
                                        <NavLink
                                            exact
                                            to='/app/PageExplore'
                                            activeClassName={styles['selected']}
                                            className={styles['link']}
                                        >
                                            <Button variant='secondary'>Explore some ideas</Button>
                                        </NavLink>
                                    </div>
                                </Card>
                            </Grid>

                            {/*  ------------------------------------------------------------ */}
                            {/*  CARD C*/}
                            <Grid item xs={12} sm={12} md={4} className={styles['grid-item']}>
                                <Card className={[styles['card-content'], styles['green']].join(' ')}>
                                    <div className={[styles['card-title'], 'truncate'].join(' ')}>
                                        Stuff we're playing with
                                    </div>

                                    <div className={styles['card-body']}>
                                        <div className={styles['card-icon']}>
                                            <DisplaySettingsIcon style={{}} />
                                        </div>
                                        <div className={styles['card-text']}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p>
                                                <b>This is not rocket science. Start fresh, use the right tools.</b>
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles['card-footer']}>
                                        <NavLink
                                            exact
                                            to='/app/PageLab'
                                            activeClassName={styles['selected']}
                                            className={styles['link']}
                                        >
                                            <Button variant='secondary'>Take a look</Button>
                                        </NavLink>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Hero>
                </CSSTransition>

                {/*  ------------------------------------------------------------ */}
                {/*  BOTTOM */}
                {/*  ------------------------------------------------------------ */}

                <CSSTransition
                    in={animationSubTitle}
                    timeout={2000}
                    classNames={{
                        enter: 'animate__animated animate__fadeInDown animate__faster'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <Grid container spacing={0} className={styles['bottom-area']}>
                        <Grid item xs={12}>
                            <Card className={styles['card-content-bottom']} style={{ margin: '8px 24px 0' }}>
                                <div className={styles['head-area']}>
                                    <HeadLineDuoTitle color='orange' align='center'>
                                        All-in-one dev boilerplate to build pixel perfect views.
                                    </HeadLineDuoTitle>
                                </div>

                                <div className={styles['center-area']}>
                                    <div className={styles['img-xtra']}>
                                        <LogoReact></LogoReact>
                                    </div>
                                    <div className={styles['img-xtra']}>
                                        <LogoPwa></LogoPwa>
                                    </div>
                                    <div className={styles['img-main']}>
                                        <Lottie loop animationData={AniRocket} play />
                                    </div>
                                    <div className={styles['img-xtra']}>
                                        <LogoSass></LogoSass>
                                    </div>
                                    <div className={styles['img-xtra']}>
                                        <LogoCssmodules></LogoCssmodules>
                                    </div>
                                </div>
                                <div className={styles['foot-area']}>
                                    <HeadLineDuoTitle color='grey' align='center' small>
                                        The essential tooling you need, right out of the box.
                                    </HeadLineDuoTitle>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </CSSTransition>
            </div>
        </div>
    )
}
