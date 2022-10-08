import Button from 'apollo-react/components/Button';
import TextField from 'apollo-react/components/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as WaterImageCompo } from '../../assets/svgs/apollo-watermark.svg';
import { ReactComponent as WavesImageCompo1Mob } from '../../assets/svgs/wave-short-top-1-mobile.svg';
import { ReactComponent as WavesImageCompo1 } from '../../assets/svgs/wave-short-top-1.svg';
import { ReactComponent as WavesImageCompo2Mob } from '../../assets/svgs/wave-short-top-2-mobile.svg';
import { ReactComponent as WavesImageCompo2 } from '../../assets/svgs/wave-short-top-2.svg';
import { setIsLogged } from '../../store/reducers/appGlobalDataSliceReducer';
import styles from './PageLaunch.module.scss';

export default function Launch(props) {
    // ***********************************************
    // states, inits
    // ***********************************************

    let [isClosing, setIsClosing] = useState(false)
    let textFieldValue = useState('')
    let [hasError, setHasError] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    /// ***********************************************
    // functions and logic
    // ***********************************************

    // ***********************************************
    // child local components
    // ***********************************************
    function LoginPanel() {
        // this runs always (no second parameter, [])
        useEffect(() => {
            const listener = (event) => {
                if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                    //console.log('Enter key was pressed. Run your function.')
                    event.preventDefault()
                    // callMyFunction();
                    handleClickLogin()
                }
            }
            document.addEventListener('keydown', listener)
            return () => {
                document.removeEventListener('keydown', listener)
            }
        })

        function handleClickLogin() {
            setHasError(false)
            // add some logic to check fake password
            //console.log(textFieldValue.password)
            let passcheck = textFieldValue.password
            if (passcheck) {
                if (
                    textFieldValue.password.toLowerCase() === 'x' ||
                    textFieldValue.password.toLowerCase() === 'ñañaña' ||
                    textFieldValue.password.toLowerCase() === 'nianiania' ||
                    textFieldValue.password.toLowerCase() === 'gorila' ||
                    textFieldValue.password.toLowerCase() === 'saraza'
                ) {
                    setIsClosing(true)
                    setTimeout(function () {
                        // set global state as logged in
                        dispatch(setIsLogged(true))
                        // navigate to home
                        history.push('/app/home')
                    }, 1600)
                } else {
                    // console.log('error')
                    setHasError(true)
                }
            } else {
                setHasError(true)
            }
        }

        function changeValue(e, type) {
            //setHasError(false)
            const value = e.target.value
            const nextState = {}
            nextState[type] = value
            textFieldValue = nextState
        }

        // ***********************************************
        // use effect
        // ***********************************************
        useEffect(() => {
            // while mounting this page-url
            // set global state as logged OUT
            dispatch(setIsLogged(false))
        }, [])

        // ***********************************************
        // render child component
        // ***********************************************
        return (
            <div>
                <div className={`${hasError ? 'animate__animated animate__fast animate__shakeX' : ''}`}>
                    <TextField
                        className={styles['login-pass-text-field']}
                        fullWidth
                        label='Please say the magic word'
                        //type='password'
                        placeholder=''
                        onChange={(e) => changeValue(e, 'password')}
                        error={hasError}
                        helperText={hasError ? "That's not the magic word!" : ' '}
                        inputProps={{
                            type: 'password',
                            autoComplete: 'new-password'
                        }}
                    />
                </div>

                <div>
                    <Button variant={'primary'} onClick={handleClickLogin} fullWidth type='submit'>
                        Enter
                    </Button>
                </div>
                <div className={styles['app-version']}>
                    PWA Alpha App Release - <b>{process.env.REACT_APP_MY_VERSION}</b>
                </div>
            </div>
        )
    }

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['page-launch'], styles['page-wrapper']].join(' ')}>
            {/*  ------------------------------------------------------------ */}
            {/*  WAVES TOP*/}
            {/*  ------------------------------------------------------------ */}
            <div
                className={[
                    styles['waves-top'],
                    'animate__animated animate__fast animate__slideInDown',
                    `${isClosing ? 'animate__slideOutUp' : ''}`
                ].join(' ')}
            >
                <div className={styles['waves-wrapper']}>
                    <WavesImageCompo2 className={styles['svg-desktop']}></WavesImageCompo2>
                    <WavesImageCompo2Mob className={styles['svg-mobile']}></WavesImageCompo2Mob>
                </div>
            </div>

            {/*  ------------------------------------------------------------ */}
            {/*  CONTENT*/}
            {/*  ------------------------------------------------------------ */}
            <div
                className={[
                    styles['content'],
                    'animate__animated animate__fast animate__fadeInUp',
                    `${isClosing ? 'animate__fadeOutDown' : ''}`
                ].join(' ')}
            >
                <div className={styles['title']}>Apollo Rocket Starter</div>
                <LoginPanel></LoginPanel>
            </div>
            {/*  ------------------------------------------------------------ */}
            {/*  WATERMARK bottom*/}
            {/*  ------------------------------------------------------------ */}
            <div
                className={[
                    styles['water-logo'],
                    'animate__animated animate__fast animate__fadeIn',
                    `${isClosing ? 'animate__fadeOut' : ''}`
                ].join(' ')}
            >
                <div className={styles['water-wrapper']}>
                    <WaterImageCompo className={styles['svg-water']}></WaterImageCompo>
                </div>
            </div>
        </div>
    )
}
