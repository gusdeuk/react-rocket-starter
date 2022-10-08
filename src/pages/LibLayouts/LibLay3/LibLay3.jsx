import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import MenuButton from 'apollo-react/components/MenuButton';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect } from 'react';

import styles from './LibLay3.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    const [tabValue, setTabValue] = React.useState(0)

    const menuItems = [
        {
            text: 'Cancel'
        },
        {
            text: 'Export'
        },
        {
            text: 'Apply '
        },
        {
            text: 'Format C:',
            destructiveAction: true
        }
    ]
    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleChangeTab = (event, value) => {
        setTabValue(value)
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
                styles['page-3'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['content']].join(' ')}>
                <div className={styles['base-head']}>
                    <div className={[styles['wrapper'], 'clearfix'].join(' ')}>
                        <div className={styles['left']}>
                            <Typography variant='h3' className={styles['main-title']}>
                                3 - Fixed Width Twin Containers
                            </Typography>
                        </div>
                        <div className={styles['right']}>
                            <span className={styles['actions']}>
                                <Button variant='text'>Cancel</Button>
                                <Button variant='secondary'>Export</Button>
                                <Button variant='primary'>Apply</Button>
                            </span>
                            <span className={styles['menu-button']}>
                                <MenuButton buttonText='Actions' menuItems={menuItems} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles['tab-nav']}>
                    <Tabs value={tabValue} onChange={handleChangeTab} truncate>
                        <Tab label='Project Details' />
                        <Tab label='Startup Settings' />
                        <Tab label='Cositas Configuration' />
                    </Tabs>
                </div>

                <div className={styles['tab-content']}>
                    {tabValue === 0 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Grid container spacing={0} className={styles['base-grid']}>
                                <Grid item xs={12} sm={12} md={6} className={styles['col']}>
                                    <Card className={[styles['card'], styles['left']].join(' ')}>
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} className={styles['col']}>
                                    <Card className={[styles['card'], styles['right']].join(' ')}>
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    {tabValue === 1 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Typography variant='body2'>{'This is Settings content'}</Typography>
                        </div>
                    )}
                    {tabValue === 2 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Typography variant='body2'>{'This is Cositas content'}</Typography>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
