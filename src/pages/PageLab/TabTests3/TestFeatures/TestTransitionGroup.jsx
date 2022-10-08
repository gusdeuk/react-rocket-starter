import Button from 'apollo-react/components/Button/Button';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './TestCommon.module.scss';

export default function TestComponent(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [animationProp1, setAnimationProp1] = useState(false)
    const [animationProp2, setAnimationProp2] = useState(false)
    /// ***********************************************
    // functions and logic
    // ***********************************************

    // https://reactcommunity.org/react-transition-group/
    // https://blog.bitsrc.io/animating-reactjs-with-react-transition-group-2af6c87cab0c
    // https://blog.openreplay.com/how-to-add-animations-with-react-transition-group

    const testCallOnEnter = (param) => {
        console.log('testCallOnEnter')
    }
    function testCallOnExit(param) {
        console.log('testCallOnExit')
    }

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['test-page'], styles['test-transitions']].join(' ')}>
            <div>
                <div className={'clx-headline-title grey center'}>
                    Css Transition tests: With Custom Animation classes
                </div>

                <CSSTransition
                    in={animationProp1}
                    timeout={2000}
                    classNames={{
                        appear: styles['my-node-appear'],
                        appearActive: styles['my-node-appear-active'],
                        appearDone: styles['my-node-appear-done'],
                        enter: styles['my-node-enter'],
                        enterActive: styles['my-node-enter-active'],
                        enterDone: styles['my-node-enter-done'],
                        exit: styles['my-node-exit'],
                        exitActive: styles['my-node-exit-active'],
                        exitDone: styles['my-node-exit-done']
                    }}
                    mountOnEnter
                    unmountOnExit
                    // EVENTS
                    onEnter={() => testCallOnEnter('lala')}
                    onExited={() => testCallOnExit('lala')}
                >
                    <div className={styles['test-animate']}>{"I'll receive my-node-* classes"}</div>
                </CSSTransition>

                {/* <Button variant='secondary' onClick={scrollToTop} style={{ margin: '10px auto', display: 'block' }}>
                Test Scroll to top
            </Button> */}

                <Button variant='secondary' onClick={() => setAnimationProp1(true)}>
                    In element
                </Button>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <Button variant='secondary' onClick={() => setAnimationProp1(false)}>
                    Out Element
                </Button>
            </div>

            <div>
                <div className={'clx-headline-title top-gutter grey center'}>
                    Css Transition Tests: With Animate CSS lib classes
                </div>
                <CSSTransition
                    in={animationProp2}
                    timeout={2000}
                    classNames={{
                        enter: 'animate__animated animate__fadeInDown animate__faster',
                        exit: 'animate__animated animate__fadeOutUp animate__slower'
                    }}
                    mountOnEnter
                    unmountOnExit
                    // EVENTS
                    onEnter={() => testCallOnEnter('lala')}
                    onExited={() => testCallOnExit('lala')}
                >
                    <div className={[styles['test-animate']].join(' ')}>{"I'll receive my-node-* classes"}</div>
                </CSSTransition>

                <Button variant='secondary' onClick={() => setAnimationProp2(true)}>
                    In element
                </Button>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <Button variant='secondary' onClick={() => setAnimationProp2(false)}>
                    Out Element
                </Button>
            </div>
        </div>
    )
}
