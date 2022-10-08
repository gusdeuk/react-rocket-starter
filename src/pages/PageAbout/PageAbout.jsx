import Accordion from 'apollo-react/components/Accordion';
import AccordionDetails from 'apollo-react/components/AccordionDetails';
import AccordionSummary from 'apollo-react/components/AccordionSummary';
import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import Typography from 'apollo-react/components/Typography';
import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserView, isDesktop, isMacOs, isMobile, MobileView } from 'react-device-detect';

import HeadLineDuoTitle from '../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import LogoGrid from './LogoGrid/LogoGrid';
import styles from './PageAbout.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [accordionExpandedPanelA, setAccordionExpandedPanelA] = React.useState(false)
    const [accordionExpandedPanelB, setAccordionExpandedPanelB] = React.useState(false)
    const [accordionExpandedPanelC, setAccordionExpandedPanelC] = React.useState(false)
    const [accordionExpandedPanelD, setAccordionExpandedPanelD] = React.useState(false)
    const [accordionExpandedPanelE, setAccordionExpandedPanelE] = React.useState(false)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleAccordionChange = (panel) => (event, newExpanded) => {
        console.log(isMobile)
        if (!isMobile) {
            if (panel === 'panelA') {
                setAccordionExpandedPanelA(!accordionExpandedPanelA)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelB') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(!accordionExpandedPanelB)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelC') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(!accordionExpandedPanelC)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelD') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(!accordionExpandedPanelD)
                setAccordionExpandedPanelE(false)
            }
            if (panel === 'panelE') {
                setAccordionExpandedPanelA(false)
                setAccordionExpandedPanelB(false)
                setAccordionExpandedPanelC(false)
                setAccordionExpandedPanelD(false)
                setAccordionExpandedPanelE(!accordionExpandedPanelE)
            }
        } else {
            if (panel === 'panelA') {
                setAccordionExpandedPanelA(!accordionExpandedPanelA)
            }
            if (panel === 'panelB') {
                setAccordionExpandedPanelB(!accordionExpandedPanelB)
            }
            if (panel === 'panelC') {
                setAccordionExpandedPanelC(!accordionExpandedPanelC)
            }
            if (panel === 'panelD') {
                setAccordionExpandedPanelD(!accordionExpandedPanelD)
            }
            if (panel === 'panelE') {
                setAccordionExpandedPanelE(!accordionExpandedPanelE)
            }
        }
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        // ------------------------------
        // test device detect library
        // https://github.com/duskload/react-device-detect/tree/master/docs
        if (isDesktop) {
            setAccordionExpandedPanelA(true)
        } else {
            setAccordionExpandedPanelA(false)
        }
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
                styles['page-about'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                Do not Start from Scratch
            </HeadLineDuoTitle>
            <div className={[styles['content']].join(' ')}>
                {/*  ------------------------------------------------------------ */}
                {/* LEFT */}
                {/*  ------------------------------------------------------------ */}
                <Grid container spacing={0} className={styles['base-grid']}>
                    <Grid item xs={12} sm={12} md={6} className={[styles['col'], styles['left']].join(' ')}>
                        <Card className={[styles['acc-container']]}>
                            {/*  ------------------------------------------------------------ */}
                            {/* Section A */}
                            {/*  ------------------------------------------------------------ */}

                            <Accordion expanded={accordionExpandedPanelA} onChange={handleAccordionChange('panelA')}>
                                <AccordionSummary className={styles['acc-item-title']}>
                                    <Typography>Styling Features</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles['acc-item-content']}>
                                    <ul className={styles['list-data']}>
                                        <li>
                                            <b>
                                                Style with standard classes using CSS / SCSS files. 100% CSS-in-JS free!
                                            </b>
                                        </li>
                                        <li>
                                            See You Tube link below if you are interested why we decided not to use
                                            CSS-in-JS as our main styling technique.
                                        </li>
                                        <li>Angular / Vue way safe, scoped and friendly SCSS / CSS files.</li>
                                        <li>
                                            CSS Modules Library: Scoping everything at the component level. We use this
                                            dependency to avoid class name conflicts generating smart unique classes.
                                        </li>
                                        <li>
                                            Global SCSS definitions available to declare non-scoped classes (available
                                            across the whole DOM, like fonts, etc) in a organized and safer way. Always
                                            using SCSS. Use the naming convention of your preference, like BEM, etc.
                                        </li>
                                        <li>
                                            Global helper classes and CSS utilities, integrated in the SCSS compiling
                                            cascade.
                                        </li>
                                    </ul>

                                    <ul className={[styles['list-links']]}>
                                        <li>
                                            <a href='https://github.com/css-modules/css-modules' target='_blank'>
                                                https://github.com/css-modules/css-modules
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.youtube.com/watch?v=NMiEREulVLc' target='_blank'>
                                                https://www.youtube.com/watch?v=NMiEREulVLc
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            {/*  ------------------------------------------------------------ */}
                            {/* Section B */}
                            {/*  ------------------------------------------------------------ */}
                            <Accordion expanded={accordionExpandedPanelB} onChange={handleAccordionChange('panelB')}>
                                <AccordionSummary className={styles['acc-item-title']}>
                                    <Typography>General Features</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles['acc-item-content']}>
                                    <ul className={styles['list-data']}>
                                        <li>
                                            <b>
                                                PWA - Progressive web application basic setup / Manifest / Complete
                                                Iconset / Workbox configuration.
                                            </b>
                                        </li>
                                        <li>Base Application made with Create React App / Webpack / React 18+.</li>
                                        <li>Well organized, clean and intuitive folder structure</li>
                                        <li>
                                            Multiple layout support to display different Views / Navigation components.
                                        </li>
                                        <li>
                                            Content Pages, Error Pages, Shared Components, Simple Redux Store, Styles,
                                            Custom SVG icon components and more.
                                        </li>

                                        <li>
                                            CSS Animation Libs + React Transition events working together, supporting
                                            both custom CSS In/Out animations styles and also animation events.
                                        </li>
                                        <li>
                                            Simple JSX functional components with JS (TSX and typescript available).
                                        </li>

                                        <li>
                                            Dot environment (.env) file for react global variables and other CRA
                                            options.
                                        </li>
                                        <li>Prettier basic configuration (.prettierrc)</li>
                                    </ul>

                                    <ul className={[styles['list-links']]}>
                                        <li>
                                            <a href='https://create-react-app.dev/' target='_blank'>
                                                https://create-react-app.dev/
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='https://reactcommunity.org/react-transition-group/'
                                                target='_blank'
                                            >
                                                https://reactcommunity.org/react-transition-group/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://web.dev/learn/pwa/' target='_blank'>
                                                https://web.dev/learn/pwa/
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            {/*  ------------------------------------------------------------ */}
                            {/* Section C */}
                            {/*  ------------------------------------------------------------ */}
                            <Accordion expanded={accordionExpandedPanelC} onChange={handleAccordionChange('panelC')}>
                                <AccordionSummary className={styles['acc-item-title']}>
                                    <Typography>Routing Related Features</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles['acc-item-content']}>
                                    <ul className={styles['list-data']}>
                                        <li>
                                            <b>
                                                Multiple layouts and content pages for each layout, based on nested
                                                routes.
                                            </b>
                                        </li>
                                        <li>
                                            Basic guard rotection for routes: Example reading a given state stored
                                            globally + navigation reject based on that state.
                                        </li>
                                        <li>
                                            Webpack code splitting in chunks: Separated compiled CSS /JS per each
                                            declared route.
                                        </li>
                                    </ul>

                                    <ul className={[styles['list-links']]}>
                                        <li>
                                            <a href='https://v5.reactrouter.com/' target='_blank'>
                                                https://v5.reactrouter.com/
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            {/*  ------------------------------------------------------------ */}
                            {/* Section D */}
                            {/*  ------------------------------------------------------------ */}
                            <Accordion expanded={accordionExpandedPanelD} onChange={handleAccordionChange('panelD')}>
                                <AccordionSummary className={styles['acc-item-title']}>
                                    <Typography>Helpers and Dependencies</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles['acc-item-content']}>
                                    <ul className={styles['list-data']}>
                                        <li>
                                            <b>
                                                PWA features: Workbox library, a set of modules that simplify common
                                                service worker routing and caching.
                                            </b>
                                        </li>
                                        <li>
                                            React Device Detect Utils, useful for conditional renderings based on device
                                            type.
                                        </li>
                                        <li>
                                            React Lottie Animation Player: LottieFiles.com provides all the tools that
                                            you need to create, edit, test and display vector based animations.
                                        </li>
                                        <li>Axios Http client library.</li>
                                        <li>Testing utilities with React Testing Library.</li>

                                        <li>Redux Toolkit for global state management using selector/dispatch.</li>
                                        <li>
                                            React Chartjs-2 using ChartsJ open source library.<b>[v3.8]</b>
                                        </li>
                                        <li>
                                            Faker Js: Generate fake but realistic data for chart testing and development
                                        </li>
                                        <li>
                                            React Teleporter utility to move React components in the same React DOM
                                            tree.
                                        </li>
                                    </ul>

                                    <ul className={[styles['list-links']]}>
                                        <li>
                                            <a href='https://redux-toolkit.js.org/' target='_blank'>
                                                https://redux-toolkit.js.org/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://react-chartjs-2.js.org/' target='_blank'>
                                                https://react-chartjs-2.js.org/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://developer.chrome.com/docs/workbox/' target='_blank'>
                                                https://developer.chrome.com/docs/workbox/
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='https://testing-library.com/docs/react-testing-library/intro/'
                                                target='_blank'
                                            >
                                                https://testing-library.com/docs/react-testing-library/intro/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://axios-http.com/' target='_blank'>
                                                https://axios-http.com/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://fakerjs.dev/' target='_blank'>
                                                https://fakerjs.dev/
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://lottiefiles.com/' target='_blank'>
                                                https://lottiefiles.com/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/mifi/react-lottie-player' target='_blank'>
                                                https://github.com/mifi/react-lottie-player
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://github.com/duskload/react-device-detect' target='_blank'>
                                                https://github.com/duskload/react-device-detect
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://github.com/gregberge/react-teleporter' target='_blank'>
                                                https://github.com/gregberge/react-teleporter
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            {/*  ------------------------------------------------------------ */}
                            {/* Section E */}
                            {/*  ------------------------------------------------------------ */}
                            <Accordion expanded={accordionExpandedPanelE} onChange={handleAccordionChange('panelE')}>
                                <AccordionSummary className={styles['acc-item-title']}>
                                    <Typography>Miscelaneous Stuff</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles['acc-item-content']}>
                                    <ul className={styles['list-data']}>
                                        <li>
                                            <b>PWA Install Detection component: </b>Provides UI Messaging Events for
                                            good and friendly PWA engage installation user flow.
                                        </li>
                                        <li>
                                            <b>PWA Update Detection component: </b>Provides UI Messaging Events for easy
                                            browser cache clearing / content update when a new version is automatically
                                            detected.
                                        </li>
                                        <li>
                                            <b>Bottom Nav Component for mobile:</b> A fully responsive complement
                                            working in sync with ADS Navigation component.
                                        </li>
                                        <li>
                                            Base web font family embedded ready to use at the root level and available
                                            across the whole DOM tree.
                                        </li>
                                        <li>
                                            Material UI (MUI v5) component library for React <b>[Latest version]</b>
                                        </li>
                                        <li>
                                            MUI theme configuration file + SCSS structure to override styles as needed.
                                        </li>
                                        <li>
                                            MUI v5 components custom styling strategy: base theme config + global SCSS
                                            overrides structure using component classes.Styling using Emotion for MUI is
                                            also available, just in case.
                                        </li>
                                        <li>
                                            Apollo ADS React Library: Custom wrapping UI Library with style
                                            customizations over several MUI v4 components.
                                        </li>
                                    </ul>

                                    <ul className={[styles['list-links']]}>
                                        <li>
                                            <a href='https://mui.com/' target='_blank'>
                                                https://mui.com/
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://ads-react.apollo.iqvia.io/' target='_blank'>
                                                https://ads-react.apollo.iqvia.io/
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Grid>

                    {/*  ------------------------------------------------------------ */}
                    {/* RIGHT */}
                    {/*  ------------------------------------------------------------ */}
                    <Grid item xs={12} sm={12} md={6} className={[styles['col'], styles['right']].join(' ')}>
                        <div className={styles['right-top']}>
                            <div className={styles['right-title']}>
                                <HeadLineDuoTitle color='purple' align='center' small>
                                    Craft your presentation layer smoothly
                                </HeadLineDuoTitle>
                            </div>
                            <div className={styles['right-caption']}>
                                The essential tooling collection to style your react-ive views like a champ
                            </div>
                        </div>

                        <LogoGrid></LogoGrid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
