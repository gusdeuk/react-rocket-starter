import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import BlockAccordion from './Accordion/Accordion';
import BlockBanner from './Banners/Banner';
import BlockModals from './Modals/Modals';
import styles from './PageComponentsE.module.scss';
import BlockPanel from './Panel/Panel';
import BlockPeekTips from './PeekTips/PeekTips';
import BlockRight from './Right/Right';

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
                styles['page-e'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                E - Data Display, Modals
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* Content */}
                {/* ----------------------------- */}

                <Grid container spacing={3}>
                    {/* ----------------------------- */}
                    {/* LEFT */}
                    {/* ----------------------------- */}
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Pop Ups, Expandables &amp; Banners</div>
                        {/* --------------------------------------------------- */}
                        <div className='clx-headline-sub-title'>Modals</div>
                        <BlockModals></BlockModals>
                        {/* --------------------------------------------------- */}
                        <div className='clx-headline-sub-title top-gutter'>Accordion</div>
                        <BlockAccordion />
                        {/* --------------------------------------------------- */}
                        <BlockPanel></BlockPanel>
                        {/* --------------------------------------------------- */}
                        <div className='clx-headline-sub-title  top-gutter'>Banners</div>
                        <BlockBanner></BlockBanner>
                        {/* --------------------------------------------------- */}
                        <BlockPeekTips></BlockPeekTips>
                    </Grid>

                    {/* ----------------------------- */}
                    {/* RIGHT */}
                    {/* ----------------------------- */}
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Display Information, Progress, Others</div>

                        <BlockRight></BlockRight>
                    </Grid>
                </Grid>

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24'></div>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
