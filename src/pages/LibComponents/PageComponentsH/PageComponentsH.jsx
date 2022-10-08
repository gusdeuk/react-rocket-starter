import Grid from 'apollo-react/components/Grid/Grid';
import React, { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import TabBottom from './Bottom/Bottom';
import TabLeft from './Left/Left';
import styles from './PageComponentsH.module.scss';
import TabRight from './Right/Right';

export default function Page() {
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
        <div
            className={[
                styles['page-h'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                H - Form Elements
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* CONTENT */}
                {/* ----------------------------- */}
                <Grid container spacing={3}>
                    {/* ----------------------------- */}
                    {/* TAB 1 */}
                    {/* ----------------------------- */}
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Selectors, Pickers</div>
                        <TabLeft></TabLeft>
                    </Grid>

                    {/* ----------------------------- */}
                    {/* TAB 2 */}
                    {/* ----------------------------- */}

                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Input Data, Files</div>
                        <TabRight></TabRight>
                    </Grid>
                </Grid>
                <div className='clx-spacer-24'></div>
                {/* ----------------------------- */}
                {/* Scrollers */}
                {/* ----------------------------- */}
                <div className={'clx-headline-title grey center'}>Others</div>
                <TabBottom />

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24'></div>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
