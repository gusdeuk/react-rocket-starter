import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import Paper from 'apollo-react/components/Paper';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect } from 'react';

import styles from './TabTypography.module.scss';

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
        <div className={styles['tab-typography']}>
            {/* ----------------------------- */}
            {/* Typography */}
            {/* ----------------------------- */}
            <div className={'clx-headline-title grey center'}>Typography</div>

            <Grid container spacing={2}>
                {/* ----------------------------- */}
                {/* Grid > defaults */}
                {/* ----------------------------- */}

                <Grid item xs={12} lg={6}>
                    <div className='clx-headline-sub-title'>
                        Text Components - <b> Default Font Sizes / Weights</b>
                    </div>

                    <Typography variant='h1' gutterBottom>
                        Headline 1 - h1 (40px/600)
                    </Typography>
                    <Typography variant='h2' gutterBottom>
                        Headline 2 - h2 (32px/600)
                    </Typography>
                    <Typography variant='title1' gutterBottom>
                        Title 1 - title1 (20px/600)
                    </Typography>
                    <Typography variant='title2' gutterBottom>
                        Title 2 - title2 (18px/400)
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        Body 1 - body1 (16px/400)
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        Body 2 - body2 (16px/400)
                    </Typography>
                    <Typography variant='caption' gutterBottom>
                        Caption - caption (13px/400)
                    </Typography>
                </Grid>

                {/* ----------------------------- */}
                {/* Grid > overrides */}
                {/* ----------------------------- */}

                <Grid item xs={12} lg={6}>
                    <div className='clx-headline-sub-title'>
                        Text Components - <b>Font Weight: Simple Override Variations</b>
                    </div>

                    <Typography variant='h1' gutterBottom style={{ fontWeight: 300 }}>
                        Headline 1 - Override 300 (40px/300)
                    </Typography>
                    <Typography variant='h2' gutterBottom style={{ fontWeight: 300 }}>
                        Headline 2 - Override 300 (32px/300)
                    </Typography>
                    <Typography variant='title1' gutterBottom style={{ fontWeight: 400 }}>
                        Title 1 - Override 400 (20px/400)
                    </Typography>
                    <Typography variant='title2' gutterBottom style={{ fontWeight: 600 }}>
                        Title 2 - Override 600 (18px/600)
                    </Typography>
                    <Typography variant='body1' gutterBottom style={{ fontWeight: 600 }}>
                        Body 1 - Override 600 - body1 (16px/600)
                    </Typography>
                    <Typography variant='body2' gutterBottom style={{ fontWeight: 600 }}>
                        Body 2 - Override 600 - body2 (16px/600)
                    </Typography>
                    <Typography variant='caption' gutterBottom style={{ fontWeight: 600 }}>
                        Caption 1 - Override 600 - caption (13px/600)
                    </Typography>
                </Grid>
            </Grid>

            <div className={'clx-desc-box blue top-gutter'}>
                <p>
                    <b>Typography Specification:</b>
                </p>
                <p>
                    1 - Font Family: Proxima Nova
                    <br />
                    2 - Font Size: 13/14/16/18/20/32/40px
                    <br />
                    3 - Font Weight: 400 / 500 / 600
                    <br />4 - Font-weight “naming” for CSS numeric weights: Regular = 400 / Medium = 500 / Semibold =
                    600
                </p>
            </div>
        </div>
    )
}
