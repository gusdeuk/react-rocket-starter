import OpacityIcon from '@mui/icons-material/Opacity';
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
import Card from 'apollo-react/components/Card';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import Paper from 'apollo-react/components/Paper';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect } from 'react';

import styles from './TabColor.module.scss';

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
        <div className={styles['tab-color']}>
            {/* ----------------------------- */}
            {/* Typography */}
            {/* ----------------------------- */}
            <div className={'clx-headline-title grey center'}>Color</div>

            {/* ----------------------------- */}
            {/* Theme Colors */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title '>Theme Colors</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ background: neptuneGradient }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>neptuneGradient</div>
                            <div className={styles['card-text']}>#250056 #0076ae</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: primary }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>neptunePrimary</div>
                            <div className={styles['card-text']}>#0768fd</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: primaryDark }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>neptunePrimaryDark</div>
                            <div className={styles['card-text']}>#0557d5</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: primaryLight }}>
                            <div className={[styles['card-icon'], styles['dark']].join(' ')}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>neptunePrimaryLight</div>
                            <div className={styles['card-text']}>#ecf3ff</div>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Neutral Colors */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Neutral Colors</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: white }}>
                            <div className={[styles['card-icon'], styles['dark']].join(' ')}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>White</div>
                            <div className={styles['card-text']}>#ffffff</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral1 }}>
                            <div className={[styles['card-icon'], styles['dark']].join(' ')}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 1</div>
                            <div className={styles['card-text']}>#f8f9fb</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral2 }}>
                            <div className={[styles['card-icon'], styles['dark']].join(' ')}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 2</div>
                            <div className={styles['card-text']}>#f2f2f2</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral3 }}>
                            <div className={[styles['card-icon'], styles['dark']].join(' ')}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 3</div>
                            <div className={styles['card-text']}>#e9e9e9</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral4 }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 4</div>
                            <div className={styles['card-text']}>#d9d9d9</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral5 }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 5</div>
                            <div className={styles['card-text']}>#b5b5b5</div>
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral6 }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 6</div>
                            <div className={styles['card-text']}>#999999</div>
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral7 }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 7</div>
                            <div className={styles['card-text']}>#595959</div>
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: neutral8 }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Neutral 8</div>
                            <div className={styles['card-text']}>#444444</div>
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: black }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Black</div>
                            <div className={styles['card-text']}>#000000</div>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Utility Colors */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Utility Colors</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: green }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Green</div>
                            <div className={styles['card-text']}>#00c221</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: orange }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Orange</div>
                            <div className={styles['card-text']}>#ff9300</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: red }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Red</div>
                            <div className={styles['card-text']}>#e20000</div>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Data Visualization Colors */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Data Visualization Colors</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: purple }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Purple</div>
                            <div className={styles['card-text']}>#9e54b0</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: blue }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Blue</div>
                            <div className={styles['card-text']}>#015ff1</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: orange }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Orange</div>
                            <div className={styles['card-text']}>#ff9300</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: fuchsia }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Fuchsia</div>
                            <div className={styles['card-text']}>#df216d</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: green }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Green</div>
                            <div className={styles['card-text']}>#00c221</div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card className={[styles['card-content']]}>
                        <div className={styles['card-head']} style={{ backgroundColor: blueDark }}>
                            <div className={styles['card-icon']}>
                                <OpacityIcon></OpacityIcon>
                            </div>
                        </div>

                        <div className={styles['card-body']}>
                            <div className={styles['card-title']}>Blue Dark</div>
                            <div className={styles['card-text']}>#10558a</div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
