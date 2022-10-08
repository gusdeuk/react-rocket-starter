import { useEffect } from 'react';

import styles from './Common.module.scss';

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
        <div className={styles['txt-disclaimer']}>
            {/* ----------------------------- */}
            {/* Disclaimer */}
            {/* ----------------------------- */}

            <div className={'clx-desc-box green center'}>
                <span>
                    <b>NOTE:</b> We are embedding components into a real React application context for training
                    purposes. Refer the <u>Apollo React Docs</u> to pick sample code, props, methods, etc.
                </span>
            </div>
        </div>
    )
}
