import { black } from 'apollo-react/colors';
import { blue } from 'apollo-react/colors';
import { blueDark } from 'apollo-react/colors';
import { fuchsia } from 'apollo-react/colors';
import { green } from 'apollo-react/colors';
import { neptuneGradient } from 'apollo-react/colors';
import { neutral1 } from 'apollo-react/colors';
import { neutral2 } from 'apollo-react/colors';
import { neutral3 } from 'apollo-react/colors';
import { neutral4 } from 'apollo-react/colors';
import { neutral5 } from 'apollo-react/colors';
import { neutral6 } from 'apollo-react/colors';
import { neutral7 } from 'apollo-react/colors';
import { neutral8 } from 'apollo-react/colors';
import { orange } from 'apollo-react/colors';
import { primary } from 'apollo-react/colors';
import { primaryDark } from 'apollo-react/colors';
import { primaryLight } from 'apollo-react/colors';
import { purple } from 'apollo-react/colors';
import { red } from 'apollo-react/colors';
import { white } from 'apollo-react/colors';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import faker from 'faker';
import { useEffect } from 'react';
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Scatter } from 'react-chartjs-2';

import styles from './ChartsJs.module.scss';

// OJOOOO >>> import chart JS elements >>>>> needed
export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    // DOCS CHARTS JS + react-chartjs-2
    // https://www.chartjs.org/docs/latest/charts/bar.html
    // https://react-chartjs-2.js.org/examples
    //-----------------------------------------------
    // registyer chart JS elements >>>>> needed
    ChartJS.register(
        RadialLinearScale,
        ArcElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        PointElement,
        LineElement
    )

    //-----------------------------------
    const labelsMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    //-----------------------------------
    const polarData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 12, 8, 13, 16],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderWidth: 1
            }
        ]
    }
    //-----------------------------------
    const optionsBubble = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    const dataBubble = {
        datasets: [
            {
                label: 'Red dataset',
                data: Array.from({ length: 50 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                    r: faker.datatype.number({ min: 5, max: 20 })
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Blue dataset',
                data: Array.from({ length: 50 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                    r: faker.datatype.number({ min: 5, max: 20 })
                })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }

    //----------------------------------
    const optionsScatter = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    const dataScatter = {
        datasets: [
            {
                label: 'A dataset',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 })
                })),
                backgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    }

    //----------------------------------
    const dataPie = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }
    //------------------------------------
    const optionsDoughnut = {
        borderWidth: 4,
        hoverBorderColor: '#d2d2d2'
    }
    const dataDoughnut = {
        labels: [
            '1-purple',
            '2-blue',
            '3-orange',
            '4-fuchsia',
            '5-green',
            '6-darkBlue',
            '7-red',
            '8-neutral6',
            '9-neutral4'
        ],
        datasets: [
            {
                label: 'My First Dataset',
                data: [25, 15, 10, 10, 10, 10, 10, 5, 5],
                backgroundColor: [purple, blue, orange, fuchsia, green, blueDark, red, neutral6, neutral4],
                hoverOffset: 0
            }
        ]
    }

    //------------------------------------

    const optionsBar = {
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }

    const dataBar = {
        labels: labelsMonths,
        datasets: [
            {
                label: 'Dataset 1',
                data: labelsMonths.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Dataset 2',
                data: labelsMonths.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(75, 192, 192)'
            },
            {
                label: 'Dataset 3',
                data: labelsMonths.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(53, 162, 235)'
            }
        ]
    }

    //------------------------------------
    const optionsLine = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    }
    const dataLine = {
        labels: labelsMonths,
        datasets: [
            {
                label: 'Dataset 1',
                data: labelsMonths.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Dataset 2',
                data: labelsMonths.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }
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
            <div className='clx-headline-sub-title'>Doughnut Chart - Apollo DV color example sequence</div>
            <div style={{ maxWidth: '350px', margin: '0 auto' }}>
                <Doughnut options={optionsDoughnut} data={dataDoughnut} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Bar Chart</div>
            <div style={{ maxWidth: '600px', margin: '0 auto', minHeight: '350px' }}>
                <Bar options={optionsBar} data={dataBar} style={{ minHeight: '350px' }} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Pie Chart</div>
            <div style={{ maxWidth: '350px', margin: '0 auto' }}>
                <Pie data={dataPie}></Pie>
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Line Chart</div>
            <div style={{ maxWidth: '600px', margin: '0 auto', minHeight: '350px' }}>
                <Line options={optionsLine} data={dataLine} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>PolarArea Chart</div>
            <div style={{ maxWidth: '450px', margin: '0 auto' }}>
                <PolarArea data={polarData} />
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title'>Bubble Chart</div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Bubble options={optionsBubble} data={dataBubble} />;
            </div>

            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Scatter Chart</div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Scatter options={optionsScatter} data={dataScatter} />
            </div>
        </div>
    )
}
