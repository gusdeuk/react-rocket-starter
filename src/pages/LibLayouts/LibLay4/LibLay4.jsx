import ArrowDown2 from 'apollo-react-icons/Arrow2Down';
import ChevronDown from 'apollo-react-icons/ChevronDown';
import DownloadIcon from 'apollo-react-icons/Download';
import Filter from 'apollo-react-icons/Filter';
import InfoIcon from 'apollo-react-icons/Info';
import PlusIcon from 'apollo-react-icons/Plus';
import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import FixedBar from 'apollo-react/components/FixedBar';
import Grid from 'apollo-react/components/Grid';
import IconButton from 'apollo-react/components/IconButton';
import MenuButton from 'apollo-react/components/MenuButton';
import MenuItem from 'apollo-react/components/MenuItem';
import Select from 'apollo-react/components/Select';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Tooltip from 'apollo-react/components/Tooltip';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './LibLay4.module.scss';
import Megafilters from './Megafilters/Megafilters';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    const [tabValue, setTabValue] = React.useState(0)
    const [showMegamenu, setShowMegamenu] = React.useState(false)

    const topMenuItems = [
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

    const actionItemsDropMenu = [
        {
            text: 'Action 1'
        },
        {
            text: 'Action 2'
        },
        {
            text: 'Action 3'
        }
    ]

    /// ***********************************************
    // functions and logic
    // ***********************************************

    function toggleMegamenu() {
        setShowMegamenu(!showMegamenu)
    }
    function closeMegamenu() {
        setShowMegamenu(false)
    }

    const handleChangeTab = (event, value) => {
        setTabValue(value)
        setShowMegamenu(false)
    }

    const expandRowsHandler = (event, value) => {
        console.log('expand')
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // child local components
    // ***********************************************
    let numCards = []
    for (let x = 0; x < 25; x++) {
        numCards.push(x)
    }

    const listItems = numCards.map((number) => (
        <Grid item xs={12} key={number}>
            <Card>
                <div className={styles['card-base']}>
                    <div className={styles['card-head']}>
                        <div className={styles['card-title']}>This is a title {number}</div>
                        <div className={styles['card-collapser']}>
                            <Tooltip variant='dark' title='Collapse/Expand' placement='left'>
                                <IconButton small disableRipple>
                                    <ChevronDown></ChevronDown>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <div className={styles['card-content']}>Card content</div>
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
                styles['page-4'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <div className={[styles['content']].join(' ')}>
                {/*  ------------------------------------------------------------ */}
                {/* top fixed bar */}
                {/*  ------------------------------------------------------------ */}
                <FixedBar
                    title='4 - Filterable Row Style Grid'
                    subtitle='This is a subtitle'
                    className={styles['fixed-bar']}
                >
                    <span className={styles['in-line-actions']}>
                        <Button variant='text'>Cancel</Button>
                        <Button variant='secondary'>Export</Button>
                        <Button variant='primary'>Apply</Button>
                    </span>
                    <MenuButton buttonText='Actions' menuItems={topMenuItems} className={styles['menu-button']} />
                </FixedBar>

                {/*  ------------------------------------------------------------ */}
                {/* tabs */}
                {/*  ------------------------------------------------------------ */}
                <div className={styles['tab-nav']}>
                    <Tabs value={tabValue} onChange={handleChangeTab} truncate>
                        <Tab label='Country List' />
                        <Tab label='Country Metrics' />
                        <Tab label='People w/Covid' />
                        <Tab label='Cositas Coming' />
                    </Tabs>
                </div>

                <div className={styles['tab-content']}>
                    {/*  ------------------------------------------------------------ */}
                    {/* TAB 0 CONTENT */}
                    {/*  ------------------------------------------------------------ */}
                    {tabValue === 0 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            {/*  ------------------------------------------------------------ */}
                            {/* tab actions */}
                            {/*  ------------------------------------------------------------ */}
                            <div className={styles['tab-actions']}>
                                {/*  ------------------------------------------------------------ */}
                                {/* left */}
                                {/*  ------------------------------------------------------------ */}
                                <div className={styles['left']}>
                                    <span className={styles['item']}>
                                        <Button variant='secondary' size='small' icon={Filter} onClick={toggleMegamenu}>
                                            Megafilters
                                        </Button>
                                    </span>
                                    <span className={styles['item']}>
                                        <Button
                                            variant='secondary'
                                            size='small'
                                            icon={PlusIcon}
                                            onClick={expandRowsHandler}
                                        >
                                            Expand rows
                                        </Button>
                                    </span>
                                    <span className={styles['item']}>
                                        <MenuButton
                                            buttonText='Available actions'
                                            size='small'
                                            menuItems={actionItemsDropMenu}
                                            className={styles['mui-menu-ctrl']}
                                        />
                                    </span>
                                    <span className={styles['item']}>
                                        <Button variant='secondary' size='small' icon={DownloadIcon}>
                                            Custom data
                                        </Button>
                                    </span>
                                    <span className={[styles['item'], styles['info-icon']].join(' ')}>
                                        <Tooltip
                                            variant='dark'
                                            title='Details here, explanation lorem ipsum'
                                            placement='top'
                                        >
                                            <IconButton size='small'>
                                                <InfoIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </span>
                                </div>

                                {/*  ------------------------------------------------------------ */}
                                {/* right */}
                                {/*  ------------------------------------------------------------ */}
                                <div className={styles['right']}>
                                    <span className={[styles['item'], styles['sort-text']].join(' ')}>
                                        <Typography variant='body2' style={{ display: 'inline' }} noWrap>
                                            {'Sort'}
                                        </Typography>
                                    </span>
                                    <span className={[styles['item'], styles['sort-icon']].join(' ')}>
                                        <Tooltip variant='dark' title='Toggle Asc/Desc' placement='top'>
                                            <IconButton size='small'>
                                                <ArrowDown2 />
                                            </IconButton>
                                        </Tooltip>
                                    </span>
                                    <span className={styles['item']}>
                                        <Select value={'1'} size='small' className={styles['mui-select-ctrl']}>
                                            <MenuItem value='1'>{'By country name'}</MenuItem>
                                            <MenuItem value='2'>{'By Population'}</MenuItem>
                                            <MenuItem value='3'>{'By Rating'}</MenuItem>
                                            <MenuItem value='3'>{'By Cositas'}</MenuItem>
                                        </Select>
                                    </span>
                                </div>

                                {/*  ------------------------------------------------------------ */}
                                {/* megamenu w/ CSS transition*/}
                                {/*  ------------------------------------------------------------ */}

                                <Megafilters
                                    className={styles['mega-filters']}
                                    showMegafilters={showMegamenu}
                                    callbackCloseMegafilters={closeMegamenu}
                                ></Megafilters>
                            </div>

                            {/*  ------------------------------------------------------------ */}
                            {/* list items */}
                            {/*  ------------------------------------------------------------ */}
                            <Grid container spacing={3} className={styles['base-grid']}>
                                {listItems}
                            </Grid>
                        </div>
                    )}

                    {/*  ------------------------------------------------------------ */}
                    {/* others tabs  1 2 3 */}
                    {/*  ------------------------------------------------------------ */}
                    {tabValue === 1 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Typography variant='body2'>{'This is Metrics content'}</Typography>
                        </div>
                    )}

                    {tabValue === 2 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Typography variant='body2'>{'This is Covid content'}</Typography>
                        </div>
                    )}

                    {tabValue === 3 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <Typography variant='body2'>{'This is Cositas content'}</Typography>{' '}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
