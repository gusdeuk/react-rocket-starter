import BarChart from 'apollo-react/components/BarChart';
import BulletChart from 'apollo-react/components/BulletChart';
import ClusterColumnChart from 'apollo-react/components/ClusterColumnChart';
import ColumnChart from 'apollo-react/components/ColumnChart';
import Divider from 'apollo-react/components/Divider';
import DonutChartV2 from 'apollo-react/components/DonutChartV2';
import Grid from 'apollo-react/components/Grid/Grid';
import LineChart from 'apollo-react/components/LineChart';
import { useEffect } from 'react';

import styles from './ApolloCharts.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const data1 = [
        {
            label: '2014',
            data: [{ Canada: 12, France: 30, Germany: 20, Smokeland: 10, Waterland: 16, Fafaland: 5 }]
        },
        {
            label: '2015',
            data: [{ Canada: 20, France: 28, Germany: 33, Smokeland: 13, Waterland: 30, Fafaland: 20 }]
        }
        // {
        //     label: '2016',
        //     data: [{ Canada: 30, France: 13, Germany: 41, Smokeland: 16, Waterland: 5 }]
        // }
    ]

    const dataCities = [
        { city: 'New York', humidity: 16 },
        { city: 'Santiago', humidity: 26 },
        { city: 'Tokyo', humidity: 30 },
        { city: 'Johannesburg', humidity: 39 },
        { city: 'Rome', humidity: 45 }
    ]

    const dataCitiesB = [
        { city: 'New York', humidity: 16 },
        { city: 'Santiago', humidity: 26 },
        { city: 'Tokyo', humidity: 30 },
        { city: 'BA', humidity: 30 }
    ]

    const dataBullet = [
        { City: 'New York', Humidity: [16, 50] },
        { City: 'Santiago', Humidity: [34, 80] },
        { City: 'Tokyo', Humidity: [20, 30] },
        { City: 'Johannesburg', Humidity: [75, 10] },
        { City: 'Rome', Humidity: [33, 70] }
    ]
    const legendLabels = ['Day', 'Night']

    const dataLine = [
        {
            label: 'a',
            data: [
                { x: '01', y: 1 },
                { x: '02', y: 3 },
                { x: '03', y: 6 },
                { x: '04', y: 4 },
                { x: '05', y: 2 },
                { x: '06', y: 7 },
                { x: '07', y: 12 }
            ]
        },
        {
            label: 'b',
            data: [
                { x: '01', y: 2 },
                { x: '02', y: 2 },
                { x: '03', y: 2 },
                { x: '04', y: 3 },
                { x: '05', y: 3 },
                { x: '06', y: 6 },
                { x: '07', y: 10 }
            ]
        },
        {
            label: 'c',
            data: [
                { x: '01', y: 3 },
                { x: '02', y: 2 },
                { x: '03', y: 1 },
                { x: '04', y: 4 },
                { x: '05', y: 6 },
                { x: '06', y: 3 },
                { x: '07', y: 2 }
            ]
        },
        {
            label: 'd',
            data: [
                { x: '01', y: 0 },
                { x: '02', y: 1 },
                { x: '03', y: 3 },
                { x: '04', y: 5 },
                { x: '05', y: 8 },
                { x: '06', y: 4 },
                { x: '07', y: 1 }
            ]
        }
    ]
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
        <div className={styles['tab']}>
            {/* ----------------------------- */}
            {/* content */}
            {/* ----------------------------- */}

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title'>Cluster Column Chart</div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <ClusterColumnChart data={data1} suffix='%' height={350} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Bar Chart</div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                <BarChart data={dataCities} suffix='%' width={300} height={350} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Bullet Chart</div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                <BulletChart data={dataBullet} width={300} height={368} legendLabels={legendLabels} suffix='%' />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Column Chart</div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                <ColumnChart data={dataCitiesB} width={300} height={368} legendLabels={legendLabels} suffix='%' />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Donut Meter (Default color)</div>
            <div style={{ margin: '0 auto', transform: 'scale(0.9)', maxWidth: '300px' }}>
                <DonutChartV2
                    percent={50}
                    subtitle='Label'
                    tooltipTitle='$41,000'
                    tooltipSubtitle='Total sales in 2018'
                />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Donut Meter (Custom color)</div>
            <div style={{ margin: '0 auto', transform: 'scale(0.9)', width: '300px' }}>
                <DonutChartV2
                    stroke='#0768fd'
                    dropshadow
                    percent={100}
                    subtitle='Label'
                    tooltipTitle='$82,000'
                    tooltipSubtitle='Total sales in 2018'
                />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Line Chart</div>
            <div style={{ margin: '0 auto', maxWidth: '500px' }}>
                <LineChart data={dataLine} xTicks={5} style={{}} />
            </div>
        </div>
    )
}
