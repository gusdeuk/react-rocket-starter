import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavDesktop from '../../components/NavDesktop/NavDesktop';
import NavMobile from '../../components/NavMobile/NavMobile';
import styles from './MainLayout.module.scss';

export default function MainLayout(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    const PageNotFound = lazy(() =>
        import('../../pages/PageNotFound/PageNotFound' /* webpackChunkName: "PageNotFound" */)
    )
    const PageHome = lazy(() => import('../../pages/PageHome/PageHome' /* webpackChunkName: "PageHome" */))
    const PageAbout = lazy(() => import('../../pages/PageAbout/PageAbout' /* webpackChunkName: "PageAbout" */))
    const PageExplore = lazy(() => import('../../pages/PageExplore/PageExplore' /* webpackChunkName: "PageExplore" */))
    const PageLab = lazy(() => import('../../pages/PageLab/PageLab' /* webpackChunkName: "PageLab" */))
    const PageComponentsA = lazy(() =>
        import('../../pages/LibComponents/PageComponentsA/PageComponentsA' /* webpackChunkName: "PageComponentsA" */)
    )
    const PageComponentsB = lazy(() =>
        import('../../pages/LibComponents/PageComponentsB/PageComponentsB' /* webpackChunkName: "PageComponentsB" */)
    )
    const PageComponentsC = lazy(() =>
        import('../../pages/LibComponents/PageComponentsC/PageComponentsC' /* webpackChunkName: "PageComponentsC" */)
    )
    const PageComponentsD = lazy(() =>
        import('../../pages/LibComponents/PageComponentsD/PageComponentsD' /* webpackChunkName: "PageComponentsD" */)
    )
    const PageComponentsE = lazy(() =>
        import('../../pages/LibComponents/PageComponentsE/PageComponentsE' /* webpackChunkName: "PageComponentsE" */)
    )
    const PageComponentsF = lazy(() =>
        import('../../pages/LibComponents/PageComponentsF/PageComponentsF' /* webpackChunkName: "PageComponentsF" */)
    )
    const PageComponentsG = lazy(() =>
        import('../../pages/LibComponents/PageComponentsG/PageComponentsG' /* webpackChunkName: "PageComponentsG" */)
    )
    const PageComponentsH = lazy(() =>
        import('../../pages/LibComponents/PageComponentsH/PageComponentsH' /* webpackChunkName: "PageComponentsH" */)
    )
    const PageComponentsI = lazy(() =>
        import('../../pages/LibComponents/PageComponentsI/PageComponentsI' /* webpackChunkName: "PageComponentsI" */)
    )

    const LibLay1 = lazy(() => import('../../pages/LibLayouts/LibLay1/LibLay1' /* webpackChunkName: "LibLay1" */))
    const LibLay2 = lazy(() => import('../../pages/LibLayouts/LibLay2/LibLay2' /* webpackChunkName: "LibLay2" */))
    const LibLay3 = lazy(() => import('../../pages/LibLayouts/LibLay3/LibLay3' /* webpackChunkName: "LibLay3" */))
    const LibLay4 = lazy(() => import('../../pages/LibLayouts/LibLay4/LibLay4' /* webpackChunkName: "LibLay4" */))
    const LibLay5 = lazy(() => import('../../pages/LibLayouts/LibLay5/LibLay5' /* webpackChunkName: "LibLay5" */))
    const LibLay6 = lazy(() => import('../../pages/LibLayouts/LibLay6/LibLay6' /* webpackChunkName: "LibLay6" */))
    const LibLay7 = lazy(() => import('../../pages/LibLayouts/LibLay7/LibLay7' /* webpackChunkName: "LibLay7" */))
    const LibLay8 = lazy(() => import('../../pages/LibLayouts/LibLay8/LibLay8' /* webpackChunkName: "LibLay8" */))
    const LibLay9 = lazy(() => import('../../pages/LibLayouts/LibLay9/LibLay9' /* webpackChunkName: "LibLay9" */))
    /// ***********************************************
    // functions and logic
    // ***********************************************
    function doSomething() {}

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div className={[styles['main-layout'], ''].join(' ')}>
            <NavDesktop />
            <NavMobile />
            <Suspense
                fallback={
                    <div className={styles['loader-wrapper']}>
                        <CircularProgress size={70} />
                    </div>
                }
            >
                <Switch>
                    <Route path='/app/home' component={PageHome}></Route>

                    <Route path='/app/PageExplore' component={PageExplore}></Route>
                    <Route path='/app/PageLab' component={PageLab}></Route>
                    <Route path='/app/PageAbout' component={PageAbout}></Route>
                    <Route path='/app/PageComponentsA' component={PageComponentsA}></Route>
                    <Route path='/app/PageComponentsB' component={PageComponentsB}></Route>
                    <Route path='/app/PageComponentsC' component={PageComponentsC}></Route>
                    <Route path='/app/PageComponentsD' component={PageComponentsD}></Route>
                    <Route path='/app/PageComponentsE' component={PageComponentsE}></Route>
                    <Route path='/app/PageComponentsF' component={PageComponentsF}></Route>
                    <Route path='/app/PageComponentsG' component={PageComponentsG}></Route>
                    <Route path='/app/PageComponentsH' component={PageComponentsH}></Route>
                    <Route path='/app/PageComponentsI' component={PageComponentsI}></Route>

                    <Route path='/app/LibLay1' component={LibLay1}></Route>
                    <Route path='/app/LibLay2' component={LibLay2}></Route>
                    <Route path='/app/LibLay3' component={LibLay3}></Route>
                    <Route path='/app/LibLay4' component={LibLay4}></Route>
                    <Route path='/app/LibLay5' component={LibLay5}></Route>
                    <Route path='/app/LibLay6' component={LibLay6}></Route>
                    <Route path='/app/LibLay7' component={LibLay7}></Route>
                    <Route path='/app/LibLay8' component={LibLay8}></Route>
                    <Route path='/app/LibLay9' component={LibLay9}></Route>

                    {/* main layout resolves 404 too */}
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    )
}
