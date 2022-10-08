import ChevronLeftIcon from 'apollo-react-icons/ChevronLeft';
import ChevronRightIcon from 'apollo-react-icons/ChevronRight';
import Clock from 'apollo-react-icons/Clock';
import Doctor1 from 'apollo-react-icons/Doctor1';
import MedicalCard from 'apollo-react-icons/MedicalCard';
import Pencil from 'apollo-react-icons/Pencil';
import Rocket from 'apollo-react-icons/Rocket';
import IconButton from 'apollo-react/components/IconButton';
import Paper from 'apollo-react/components/Paper';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Tooltip from 'apollo-react/components/Tooltip';
import React, { useEffect } from 'react';

import styles from './RightToolBar.module.scss';

export default function RightToolBar(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    const [valueTab, setValueTab] = React.useState(0)
    const [collapseToolbar, setCollapseToolbar] = React.useState(true)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleChangeTab = (event, value) => {
        setValueTab(value)
        setCollapseToolbar(false)
        props.callChange(false)
    }

    const handleChangeBar = (value) => {
        setCollapseToolbar(value)
    }

    const toggleBar = () => {
        if (collapseToolbar) {
            setCollapseToolbar(false)
            props.callChange(false)
        } else {
            setCollapseToolbar(true)
            props.callChange(true)
        }
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])
    useEffect(() => {
        //useEffect(() => {
        // RUN ONLY ONE TIME
        if (props.collapsed) {
            handleChangeBar(true)
        }
    }, [props.collapsed])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div className={[styles['mini-toolbar-component'], collapseToolbar ? 'is-collapsed' : ''].join(' ')}>
            <Paper square className={styles['toolbar-wrapper']}>
                <IconButton size='small' className={styles['open-close-button']} onClick={toggleBar}>
                    {collapseToolbar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>

                <Tabs
                    value={valueTab}
                    onChange={handleChangeTab}
                    truncate={false}
                    orientation={collapseToolbar ? 'vertical' : 'horizontal'}
                    className={styles['mini-tabs-nav']}
                >
                    <Tooltip variant='dark' title='Rocket' placement='left'>
                        <Tab icon={<Rocket />} />
                    </Tooltip>

                    <Tooltip variant='dark' title='Clock' placement='left'>
                        <Tab icon={<Clock />} />
                    </Tooltip>
                    <Tooltip variant='dark' title='Medical' placement='left'>
                        <Tab icon={<MedicalCard />} />
                    </Tooltip>
                    <Tooltip variant='dark' title='Pencil' placement='left'>
                        <Tab icon={<Pencil />} />
                    </Tooltip>
                    <Tooltip variant='dark' title='Doctor' placement='left'>
                        <Tab icon={<Doctor1 />} />
                    </Tooltip>
                </Tabs>

                {collapseToolbar ? (
                    <div className={styles['mini-tabs-panel']}>
                        <div className={styles['mini-tabs-content']}></div>
                    </div>
                ) : (
                    <div className={styles['mini-tabs-panel']}>
                        <div className={styles['mini-tabs-content']}>Tab content will go here 1/2/3/4/5</div>
                    </div>
                )}
            </Paper>
        </div>
    )
}
