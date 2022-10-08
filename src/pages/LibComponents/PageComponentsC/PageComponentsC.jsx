import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import BasicButtons from './BasicButtons/BasicButtons';
import MenuButtons from './MenuButtons/MenuButtons';
import styles from './PageComponentsC.module.scss';

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
                styles['page-c'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                C - Buttons, Menus
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                <Grid container spacing={3}>
                    {/* ----------------------------- */}
                    {/* BUTTONS */}
                    {/* ----------------------------- */}
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Basic Buttons</div>
                        <BasicButtons></BasicButtons>
                    </Grid>

                    {/* ----------------------------- */}
                    {/* MENUS */}
                    {/* ----------------------------- */}

                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Other Buttons</div>
                        <MenuButtons></MenuButtons>
                    </Grid>
                </Grid>

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <Divider style={{ margin: '24px 0' }}></Divider>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
