import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import React, { useEffect } from 'react';

import styles from './LibLay2.module.scss';
import RightToolBar from './RightToolBar/RightToolBar';
import TopNavFixedBar from './TopNavFixedBar/TopNavFixedBar';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [collapseToolbar, setCollapseToolbar] = React.useState(true)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    // fake card list
    let numbers = []
    for (let x = 0; x < 25; x++) {
        numbers.push(x)
    }
    const listItems = numbers.map((number) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={4} key={number}>
            <Card>
                <div className={styles['card-test']}>
                    <div>Card</div>
                </div>
            </Card>
        </Grid>
    ))

    // callback >> adjust content controlled from toolbar
    function callRightToolBarChangeFunction(value) {
        setCollapseToolbar(value)
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        // RUN ONLY ONE TIME >> ,[]
        setCollapseToolbar(true)
    }, [])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-2'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <TopNavFixedBar></TopNavFixedBar>

            <RightToolBar callChange={callRightToolBarChangeFunction}></RightToolBar>

            <div className={[styles['content'], collapseToolbar ? 'toolbar-closed' : ''].join(' ')}>
                <div className={styles['headline-title']}>2 - Responsive Card Grid + Panel</div>
                <Grid container spacing={3}>
                    {listItems}
                </Grid>
            </div>
        </div>
    )
}
