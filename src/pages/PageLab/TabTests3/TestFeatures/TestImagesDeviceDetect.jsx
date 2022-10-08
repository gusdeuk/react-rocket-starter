import React, { useEffect, useState } from 'react';
import { BrowserView, isDesktop, isMacOs, isMobile, MobileView } from 'react-device-detect';

import { ReactComponent as ProductImageCompo } from '../../../../assets/svgs/test-strip.svg';
import productImage from '../../../../assets/svgs/test-strip.svg';
import styles from './TestCommon.module.scss';

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
    useEffect(() => {
        // ------------------------------
        // test device detect library
        // https://github.com/duskload/react-device-detect/tree/master/docs
        if (isMobile) {
            console.log('test detect mobile')
        }
        if (isDesktop) {
            console.log('test detect desktop')
        }
        if (isMacOs) {
            console.log('test detect isMacOs')
        }
    }, [])

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['test-page']]}>
            <div className={'clx-headline-title grey  center'}>Device Detect Library Test</div>

            <BrowserView>
                <div>This is rendered only in browser</div>
            </BrowserView>
            <MobileView>
                <div>This is rendered only on mobile</div>
            </MobileView>

            <div className={'clx-headline-title top-gutter grey center'}>
                Load public STATIC image - No Webpack / resources folder
            </div>

            <img alt='' src={process.env.PUBLIC_URL + '/resources/img-avatars/avt-1.png'} />

            <div className={'clx-headline-title top-gutter grey center'}>Load SVG image A - Webpack Process</div>

            <img alt='' src={productImage} />

            <div className={'clx-headline-title top-gutter grey center'}>Load SVG image B - As React Component</div>

            <ProductImageCompo></ProductImageCompo>
        </div>
    )
}
