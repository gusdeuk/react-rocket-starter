import BarChart from 'apollo-react/components/BarChart';
import BulletChart from 'apollo-react/components/BulletChart';
import ClusterColumnChart from 'apollo-react/components/ClusterColumnChart';
import ColumnChart from 'apollo-react/components/ColumnChart';
import Divider from 'apollo-react/components/Divider';
import DonutChartV2 from 'apollo-react/components/DonutChartV2';
import Grid from 'apollo-react/components/Grid/Grid';
import LineChart from 'apollo-react/components/LineChart';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import ApolloCharts from './ApolloCharts/ApolloCharts';
import ChartsJs from './ChartsJs/ChartsJs';
import styles from './PageComponentsF.module.scss';

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
                styles['page-f'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                F - Data Visualization
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* Content */}
                {/* ----------------------------- */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Apollo DV Components</div>
                        <ApolloCharts></ApolloCharts>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={'clx-headline-title grey center'}>Charts JS Components</div>
                        <ChartsJs></ChartsJs>
                    </Grid>
                </Grid>
                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-48'></div>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
