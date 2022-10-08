import Close from 'apollo-react-icons/Close';
import Card from 'apollo-react/components/Card';
import IconButton from 'apollo-react/components/IconButton';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Megafilters.module.scss';

export default function Megafilters(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [showMega, setShowMega] = React.useState(false)
    /// ***********************************************
    // functions and logic
    // ***********************************************
    function closeMega() {
        setShowMega(false)
        props.callbackCloseMegafilters()
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        setShowMega(props.showMegafilters)
    }, [props])

    // ***********************************************
    // child local components
    // ***********************************************

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['tab-actions_mega-menu'], ''].join(' ')}>
            {/*  ------------------------------------------------------------ */}
            {/* megamenu w/ CSS transition*/}
            {/*  ------------------------------------------------------------ */}
            <CSSTransition
                in={showMega}
                timeout={2000}
                classNames={{
                    enter: 'animate__animated animate__slideInDown animate__faster',
                    exit: 'animate__animated animate__slideOutUp animate__faster'
                }}
                mountOnEnter
                unmountOnExit
                // EVENTS
                // onEnter={() => testCallOnEnter('lala')}
                // onExited={() => testCallOnExit('lala')}
            >
                <Card className={styles['base-container']}>
                    <div className={styles['top-title']}>
                        <span className={styles['title']}>My Popping Megafilters</span>
                        <IconButton className={styles['btn-close']} size='small' onClick={closeMega}>
                            <Close />
                        </IconButton>
                    </div>

                    <div className={[styles['scroll-content'], 'custom-scroll-area tiny-thumb'].join(' ')}>
                        <div style={{ marginBottom: '16px' }}>
                            Note that preventing an element from being the target of pointer events by using
                            pointer-events does not necessarily mean that pointer event listeners on that element cannot
                            or will not be triggered. If one of the element's children has pointer-events explicitly set
                            to allow that child to be the target of pointer events, then any events targeting that child
                            will pass through the parent as the event travels along the parent chain, and trigger event
                            listeners on the parent as appropriate. Of course any pointer activity at a point on the
                            screen that is covered by the parent but not by the child will not be caught by either the
                            child or the parent (it will go "through" the parent and target whatever is underneath).
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            Note that preventing an element from being the target of pointer events by using
                            pointer-events does not necessarily mean that pointer event listeners on that element cannot
                            or will not be triggered. If one of the element's children has pointer-events explicitly set
                            to allow that child to be the target of pointer events, then any events targeting that child
                            will pass through the parent as the event travels along the parent chain, and trigger event
                            listeners on the parent as appropriate. Of course any pointer activity at a point on the
                            screen that is covered by the parent but not by the child will not be caught by either the
                            child or the parent (it will go "through" the parent and target whatever is underneath).
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            Note that preventing an element from being the target of pointer events by using
                            pointer-events does not necessarily mean that pointer event listeners on that element cannot
                            or will not be triggered. If one of the element's children has pointer-events explicitly set
                            to allow that child to be the target of pointer events, then any events targeting that child
                            will pass through the parent as the event travels along the parent chain, and trigger event
                            listeners on the parent as appropriate. Of course any pointer activity at a point on the
                            screen that is covered by the parent but not by the child will not be caught by either the
                            child or the parent (it will go "through" the parent and target whatever is underneath).
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            Note that preventing an element from being the target of pointer events by using
                            pointer-events does not necessarily mean that pointer event listeners on that element cannot
                            or will not be triggered. If one of the element's children has pointer-events explicitly set
                            to allow that child to be the target of pointer events, then any events targeting that child
                            will pass through the parent as the event travels along the parent chain, and trigger event
                            listeners on the parent as appropriate. Of course any pointer activity at a point on the
                            screen that is covered by the parent but not by the child will not be caught by either the
                            child or the parent (it will go "through" the parent and target whatever is underneath).
                        </div>
                    </div>
                </Card>
            </CSSTransition>
        </div>
    )
}
