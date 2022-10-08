import StarSolidIcon from 'apollo-react-icons/StarSolid';
import Banner from 'apollo-react/components/Banner';
import Divider from 'apollo-react/components/Divider';
import React, { useEffect } from 'react';

import styles from './Banner.module.scss';

export default function BlockBanner() {
    return (
        <div className={[styles['banner']].join(' ')}>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='info'
                open={true}
                message='Be sure to engage the warp drive before your next mission.'
            />

            <div className='clx-spacer-16'></div>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='success'
                open={true}
                message='Congratulations! You‘ve found life on a new planet!'
            />
            <div className='clx-spacer-16'></div>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='warning'
                open={true}
                message='Uh-oh, you may have lost connection with mission control.'
            />
            <div className='clx-spacer-16'></div>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='error'
                open={true}
                message='Red alert, you are being attacked!'
            />
            <div className='clx-spacer-16'></div>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='info'
                open={true}
                message='Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.'
                icon={StarSolidIcon}
            />
            <div className='clx-spacer-16'></div>
            <Banner
                className={[styles['static-banner']].join(' ')}
                variant='info'
                open={true}
                message='Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.'
                noIcon
            />
        </div>
    )
}
