import React, { useEffect } from 'react';
import Lottie from 'react-lottie-player';

import Animation from '../../../animations/react-lottie/not-found.json';
import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import styles from './LibLay7.module.scss';

export default function Page() {
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
        <div
            className={[
                styles['page-7'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                7 - Metro Style Blocks
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                <div style={{ width: '250px', margin: '0 auto' }}>
                    <div style={{}}>
                        <Lottie
                            loop
                            animationData={Animation}
                            play
                            style={{ width: 200, height: 200, margin: '0 auto' }}
                        />
                    </div>
                    <div className={'clx-headline-title blue center'}>Coming Soon</div>
                </div>
            </div>
        </div>
    )
}
