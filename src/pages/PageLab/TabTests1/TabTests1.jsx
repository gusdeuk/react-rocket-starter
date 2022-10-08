import Button from 'apollo-react/components/Button/Button';
import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import styles from './TabTests1.module.scss';
import ExampleFetchAxiosJsonData from './TestFeatures/TestFetchAxiosJsonData';
import ExampleFetchJsonData from './TestFeatures/TestFetchJsonData';
import ExampleImportJsonData from './TestFeatures/TestImportJsonData';
import TestSettingsReduxExample from './TestFeatures/TestSettingsReduxExample';
import ExampleSyntaxHighlighter from './TestFeatures/TestSyntaxHighlighter';

export default function TabTests() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************
    function scrollToTop() {
        window.scrollTo(0, 0)
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
        <div className={[styles['tab-tests']].join(' ')}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <ExampleSyntaxHighlighter></ExampleSyntaxHighlighter>

                    <TestSettingsReduxExample />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ExampleImportJsonData></ExampleImportJsonData>
                    <ExampleFetchJsonData></ExampleFetchJsonData>

                    <ExampleFetchAxiosJsonData></ExampleFetchAxiosJsonData>
                </Grid>
            </Grid>

            <div className={'clx-headline-title grey center top-gutter'}>Scroll Top</div>
            <Button variant='secondary' onClick={scrollToTop} style={{ margin: '10px auto', display: 'block' }}>
                Test Scroll to top
            </Button>
        </div>
    )
}
