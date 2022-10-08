import Divider from 'apollo-react/components/Divider';
import Modal from 'apollo-react/components/Modal';
import ProjectHeader from 'apollo-react/components/ProjectHeader';
import Typography from 'apollo-react/components/Typography';
import React, { useEffect, useLayoutEffect } from 'react';

import classes from './TopNavFixedBar.module.scss';

export default function TopNavFixedBar(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    const menuItems = [
        { label: 'ABC1230', value: 'Lorem ipsum dolor sit amet', maxWidth: 250 },
        { label: 'Status', value: 'Done' },
        { label: 'Estimation', value: '1234568' },
        { label: 'Initial Response', value: 'Good Oportunity', maxWidth: 180 },
        { label: 'Action Taken', value: 'Accepted' }
    ]

    const [open, setOpen] = React.useState(false)
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
        <div className={classes['top-nav-fixed-bar-component']}>
            <ProjectHeader
                className={classes['proj-header']}
                menuItems={menuItems}
                infoOnClick={() => setOpen(true)}
                maxCellWidth={150}
            />
            <Modal
                className={'custom-scroll-wrapper tiny-thumb'}
                open={open}
                onClose={() => setOpen(false)}
                title='Project Details'
            >
                {menuItems.map(({ label, value }, idx) => {
                    const isMulti = Array.isArray(value) && value.length > 1
                    let text = ''
                    if (isMulti) {
                        text = value.toString().split(',').join(', ')
                    } else {
                        text = value.toString()
                    }
                    //console.log(isMulti, value)
                    const isLast = idx === menuItems.length - 1

                    return (
                        <div key={label}>
                            <Typography variant='body2'>{label}</Typography>
                            <Typography variant='title1' style={{ lineHeight: '32px' }}>
                                {text}
                            </Typography>
                            {isLast ? null : <Divider style={{ margin: '8px 0 8px 0' }} />}
                        </div>
                    )
                })}
            </Modal>
        </div>
    )
}
