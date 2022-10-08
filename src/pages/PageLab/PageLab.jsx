import SegmentedControl from 'apollo-react/components/SegmentedControl';
import SegmentedControlGroup from 'apollo-react/components/SegmentedControlGroup';
import React from 'react';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import styles from './PageLab.module.scss';
import TabTests0 from './TabTests0/TabTests0';
import TabTests1 from './TabTests1/TabTests1';
import TabTests2 from './TabTests2/TabTests2';
import TabTests3 from './TabTests3/TabTests3';
import TabTests4 from './TabTests4/TabTests4';
import TabTests5 from './TabTests5/TabTests5';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************

    const [segmentValue, setSegmentValue] = React.useState(0)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleChangeTab = (event, value) => {
        if ((value !== null) & (value !== segmentValue)) {
            setSegmentValue(value)
        }
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
                styles['page-lab'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                Stuff We're Playing With
            </HeadLineDuoTitle>
            <div className={[styles['content']].join(' ')}>
                <div className={styles['tab-nav']}>
                    <SegmentedControlGroup
                        value={segmentValue}
                        exclusive
                        onChange={(event, value) => handleChangeTab(event, value)}
                    >
                        <SegmentedControl value={0}>
                            <span>&nbsp;{'0'}</span>
                        </SegmentedControl>
                        <SegmentedControl value={1}>
                            <span>&nbsp;{'1'}</span>
                        </SegmentedControl>
                        <SegmentedControl value={2}>
                            <span>&nbsp;{'2'}</span>
                        </SegmentedControl>
                        <SegmentedControl value={3}>
                            <span>&nbsp;{'3'}&nbsp;</span>
                        </SegmentedControl>
                        <SegmentedControl value={4}>
                            <span>&nbsp;{'4'}&nbsp;</span>
                        </SegmentedControl>
                        <SegmentedControl value={5}>
                            <span>&nbsp;{'5'}&nbsp;</span>
                        </SegmentedControl>
                    </SegmentedControlGroup>
                </div>
                <div className={styles['tab-content']}>
                    {segmentValue === 0 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests0></TabTests0>
                        </div>
                    )}
                    {segmentValue === 1 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests1></TabTests1>
                        </div>
                    )}
                    {segmentValue === 2 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests2></TabTests2>
                        </div>
                    )}
                    {segmentValue === 3 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests3></TabTests3>
                        </div>
                    )}
                    {segmentValue === 4 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests4></TabTests4>
                        </div>
                    )}
                    {segmentValue === 5 && (
                        <div className={[styles['tab-wrapper'], 'animate__animated animate__fadeIn'].join(' ')}>
                            <TabTests5></TabTests5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
