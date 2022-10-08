import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import styles from './TabTests3.module.scss';
import TestImagesDeviceDetect from './TestFeatures/TestImagesDeviceDetect';
import ExampleTransitionGroup from './TestFeatures/TestTransitionGroup';

export default function TabTests() {
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
        <div className={[styles['tab-tests']].join(' ')}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <ExampleTransitionGroup></ExampleTransitionGroup>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TestImagesDeviceDetect />
                </Grid>
            </Grid>
        </div>
    )
}
