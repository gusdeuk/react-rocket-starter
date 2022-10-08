import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import FixedBar from 'apollo-react/components/FixedBar';
import Grid from 'apollo-react/components/Grid';
import React, { useEffect } from 'react';

import styles from './LibLay1.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    /// ***********************************************
    // functions and logic
    // ***********************************************
    let numbers = []
    for (let x = 0; x < 25; x++) {
        numbers.push(x)
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************
    const listItems = numbers.map((number) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={number}>
            <Card>
                <div className={styles['card-test']}>
                    <div>Card</div>
                </div>
            </Card>
        </Grid>
    ))
    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-1'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['content']].join(' ')}>
                <div className={styles['headline-title']}>1 - Basic Cards + Fixed Bar</div>
                <FixedBar title='This is a main title' subtitle='This is a subtitle' className={styles['fixed-bar']}>
                    {/* <Button variant='text'>Text btn</Button> */}
                    <Button variant='primary'>Action</Button>
                </FixedBar>

                <Grid container spacing={3}>
                    {listItems}
                </Grid>
            </div>
        </div>
    )
}
