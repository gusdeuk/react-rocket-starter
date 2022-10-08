import React, { useEffect, useState } from 'react';

import styles from './TestCommon.module.scss';
import { stockData } from './TestImportJsonDataList';

export default function TestComponent(props) {
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
    // render main component
    // ***********************************************
    return (
        <div className={[styles['test-page']]}>
            <div className={'clx-headline-title grey center'}>Import JSon Data</div>
            <div>
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.company + ' , ' + data.ticker + ' ,' + data.stockPrice + ', ' + data.timeElapsed}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
