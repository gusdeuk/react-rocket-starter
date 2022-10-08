import Card from 'apollo-react/components/Card';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Tooltip from 'apollo-react/components/Tooltip';
import React, { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import Bottom from './Bottom/Bottom';
import Left from './Left/Left';
import styles from './PageComponentsD.module.scss';
import Right from './Right/Right';

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
                styles['page-d'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                D - Navigation, Others
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                <Grid container spacing={3}>
                    {/* ----------------------------- */}
                    {/* TAB 1 */}
                    {/* ----------------------------- */}
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Base Navigation</div>
                        <Left></Left>
                    </Grid>

                    {/* ----------------------------- */}
                    {/* TAB 2 */}
                    {/* ----------------------------- */}

                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Wizards and Others</div>
                        <Right></Right>
                    </Grid>
                </Grid>
                <div className='clx-spacer-24'></div>
                {/* ----------------------------- */}
                {/* Scrollers */}
                {/* ----------------------------- */}
                <div className={'clx-headline-title grey center'}>Custom Scroll Styling</div>
                <Bottom />

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24'></div>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
