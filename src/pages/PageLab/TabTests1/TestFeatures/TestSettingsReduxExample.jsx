import Button from 'apollo-react/components/Button';
import Divider from 'apollo-react/components/Divider/';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    decrementValue,
    incrementValue,
    setIsHomePageOff,
    setIsHomePageOn,
    setPreferredColor,
} from '../../../../store/reducers/testSettingsSliceReducer';
import styles from './TestCommon.module.scss';

export default function TestSettingsReduxTest() {
    const count = useSelector((state) => state.testSettings.value)
    const stringMutado = useSelector((state) => state.testSettings.stringMutado)
    const isHomePage = useSelector((state) => state.testSettings.isHomePage)
    const preferredColor = useSelector((state) => state.testSettings.preferredColor)
    const dispatch = useDispatch()

    return (
        <div className={[styles['test-page']]}>
            <div className={'clx-headline-title grey center top-gutter'}>Redux Toolkit Settings</div>
            <div>
                <Button onClick={() => dispatch(incrementValue())} variant='secondary' size='small'>
                    Increment
                </Button>
                <span style={{ width: '10px', display: 'inline-block' }}></span>
                <span>{count}</span>
                <span> ---- </span>
                <span>{stringMutado}</span>
                <span style={{ width: '10px', display: 'inline-block' }}></span>
                <Button onClick={() => dispatch(decrementValue())} variant='secondary' size='small'>
                    Decrement
                </Button>
            </div>
            <Divider style={{ margin: '15px 0' }}></Divider>
            <div>
                <Button onClick={() => dispatch(setIsHomePageOn())} variant='secondary' size='small'>
                    SET Home page ON
                </Button>
                <span style={{ width: '10px', display: 'inline-block' }}></span>
                <Button onClick={() => dispatch(setIsHomePageOff())} variant='secondary' size='small'>
                    SET Home page OFF
                </Button>

                <div style={{ marginTop: '10px' }}>
                    {isHomePage && <div>isHomePage --- TRUE</div>}
                    {!isHomePage && <div>isHomePage --- FALSE</div>}
                </div>
            </div>
            <Divider style={{ margin: '15px 0' }}></Divider>
            <div>
                <Button onClick={() => dispatch(setPreferredColor('blue'))} variant='secondary' size='small'>
                    SET color BLUE
                </Button>
                <span style={{ width: '10px', display: 'inline-block' }}></span>
                <Button onClick={() => dispatch(setPreferredColor('red'))} variant='secondary' size='small'>
                    SET color RED
                </Button>

                <div style={{ marginTop: '10px' }}>{preferredColor}</div>
            </div>
        </div>
    )
}
