import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import styles from './PageComponentsI.module.scss';
import TabGrid from './TabGrid/TabGrid';

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
                styles['page-i'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                I - Grid 12 Columns Breakpoints
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* Grid */}
                {/* ----------------------------- */}
                <TabGrid />
                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24' />
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
