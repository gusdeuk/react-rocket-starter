import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import Paper from 'apollo-react/components/Paper';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect } from 'react';

import styles from './TabGrid.module.scss';

export default function Component() {
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
        <div className={styles['tab-grid']}>
            <div className={'clx-headline-title grey center'}>
                {' '}
                <b>XS:</b> 0px+ | <b>SM:</b> 600px+ | <b>MD:</b> 960px+ | <b>LG:</b> 1280px+ | <b>XL:</b>:1920px+
            </div>

            <div className='clx-desc-box green center'>
                These are Apollo DS / MUI v4 Grid breakpoints. See MUI official docs for details if you want to use the
                new extended v5 breakpoints.
            </div>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=6</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=6</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=4</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=8</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=3</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=3</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=3</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=3</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Divider style={{ margin: '24px 0' }}></Divider>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Divider style={{ margin: '24px 0' }}></Divider>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=4</Typography>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs=6</Typography>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={styles['cell']}>
                        <Typography variant='body2'>xs</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
