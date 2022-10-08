import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import styles from './PageComponentsA.module.scss';
import TabColor from './TabColor/TabColor';
import TabTypography from './TabTypography/TabTypography';

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
                styles['page-a'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                A - Color, Typography
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* Color */}
                {/* ----------------------------- */}
                <TabColor />
                <div className='clx-spacer-24' />
                {/* ----------------------------- */}
                {/* Typography */}
                {/* ----------------------------- */}
                <TabTypography />

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
