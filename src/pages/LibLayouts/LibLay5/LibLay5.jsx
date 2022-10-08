import DataVizCard from 'apollo-react/components/DataVizCard';
import Grid from 'apollo-react/components/Grid';
import Hero from 'apollo-react/components/Hero';
import React, { useEffect } from 'react';

import styles from './LibLay5.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************

    // const testClick = function () {}

    const testClick = () => {
        console.log('test')
    }
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
                styles['page-5'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['content']].join(' ')}>
                <Hero
                    title='5 - Data Visualization Cards'
                    subtitle='When there is no data to display'
                    className={styles['top-hero']}
                >
                    <Grid container spacing={3} style={{ marginTop: 12, marginBottom: 0 }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <DataVizCard
                                title='Card Title'
                                subtitle='Optional subtitle'
                                message='Custom message'
                                menuItems={[
                                    { label: 'Option 1', onClick: testClick },
                                    { label: 'Option 2', onClick: testClick },
                                    { label: 'Option 3', onClick: testClick }
                                ]}
                                // children={<div>dfgdfg</div>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <DataVizCard
                                title='Card Title'
                                subtitle='Optional subtitle'
                                message='Custom message'
                                menuItems={[
                                    { label: 'Option 1', onClick: testClick },
                                    { label: 'Option 2', onClick: testClick },
                                    { label: 'Option 3', onClick: testClick }
                                ]}
                                // children={<div>dfgdfg</div>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <DataVizCard
                                title='Card Title'
                                subtitle='Optional subtitle'
                                message='Custom message'
                                menuItems={[
                                    { label: 'Option 1', onClick: testClick },
                                    { label: 'Option 2', onClick: testClick },
                                    { label: 'Option 3', onClick: testClick }
                                ]}
                                // children={<div>dfgdfg</div>}
                            />
                        </Grid>
                    </Grid>
                </Hero>
                <Grid container spacing={0} style={{ backgroundColor: '#f8f9fb' }}>
                    <Grid item xs={12}>
                        <DataVizCard title='Card Title' subtitle='Optional subtitle' style={{ margin: '8px 24px 0' }} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
