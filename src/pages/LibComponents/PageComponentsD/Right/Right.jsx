import Button from 'apollo-react/components/Button';
import ButtonGroup from 'apollo-react/components/ButtonGroup';
import Card from 'apollo-react/components/Card';
import Step from 'apollo-react/components/Step';
import StepLabel from 'apollo-react/components/StepLabel';
import Stepper from 'apollo-react/components/Stepper';
import Typography from 'apollo-react/components/Typography';
import { useEffect, useState } from 'react';

import styles from './Right.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************

    const [activeStepA, setActiveStepA] = useState(0)
    const [activeStepB, setActiveStepB] = useState(0)
    const [activeStepC, setActiveStepC] = useState(0)
    /// ***********************************************
    // functions and logic
    // ***********************************************
    const steps = ['Account information', 'Verify your account', 'Account saved']

    const handleNextA = () => {
        setActiveStepA(activeStepA + 1)
    }

    const handleBackA = () => {
        setActiveStepA(activeStepA - 1)
    }

    const handleResetA = () => {
        setActiveStepA(0)
    }

    const handleNextB = () => {
        setActiveStepB(activeStepB + 1)
    }

    const handleBackB = () => {
        setActiveStepB(activeStepB - 1)
    }

    const handleResetB = () => {
        setActiveStepB(0)
    }

    const handleNextC = () => {
        setActiveStepC(activeStepC + 1)
    }

    const handleBackC = () => {
        setActiveStepC(activeStepC - 1)
    }

    const handleResetC = () => {
        setActiveStepC(0)
    }

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
        <div className={styles['tab']}>
            {/* ----------------------------- */}
            {/* Stepper */}
            {/* ----------------------------- */}

            {/* ----------------------------- */}
            {/* A */}
            {/* ----------------------------- */}

            <div className='clx-headline-sub-title top-gutter'>Stepper Horizontal</div>
            <Card style={{ padding: '24px' }}>
                <Stepper activeStep={activeStepA} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div
                    style={{
                        marginTop: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderTop: 'solid 1px #e9e9e9',
                        paddingTop: '16px'
                    }}
                >
                    {activeStepA === steps.length ? (
                        <div style={{ textAlign: 'center' }}>
                            <Button variant='secondary' onClick={handleResetA}>
                                {'Reset'}
                            </Button>
                            <Typography variant='body2' style={{ margin: '8px 0' }}>
                                {'All steps completed!'}
                            </Typography>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <ButtonGroup
                                buttonProps={[
                                    {
                                        disabled: activeStepA === 0,
                                        onClick: handleBackA,
                                        label: 'Back'
                                    },
                                    {
                                        onClick: handleNextA,
                                        label: activeStepA === steps.length - 1 ? 'Finish' : 'Next'
                                    }
                                ]}
                            />
                        </div>
                    )}
                </div>
            </Card>

            {/* ----------------------------- */}
            {/* B */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Stepper Vertical</div>
            <Card style={{ padding: '24px' }}>
                <Stepper orientation='vertical' activeStep={activeStepB}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div
                    style={{
                        marginTop: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderTop: 'solid 1px #e9e9e9',
                        paddingTop: '16px'
                    }}
                >
                    {activeStepB === steps.length ? (
                        <div style={{ textAlign: 'center' }}>
                            <Button variant='secondary' onClick={handleResetB}>
                                {'Reset'}
                            </Button>
                            <Typography variant='body2' style={{ margin: '8px 0' }}>
                                {'All steps completed!'}
                            </Typography>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <ButtonGroup
                                buttonProps={[
                                    {
                                        disabled: activeStepB === 0,
                                        onClick: handleBackB,
                                        label: 'Back'
                                    },
                                    {
                                        onClick: handleNextB,
                                        label: activeStepB === steps.length - 1 ? 'Finish' : 'Next'
                                    }
                                ]}
                            />
                        </div>
                    )}
                </div>
            </Card>

            {/* ----------------------------- */}
            {/* C */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Stepper Box</div>
            <Card style={{ padding: '24px' }}>
                <Stepper box activeStep={activeStepC}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div
                    style={{
                        marginTop: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderTop: 'solid 1px #e9e9e9',
                        paddingTop: '16px'
                    }}
                >
                    {activeStepC === steps.length ? (
                        <div style={{ textAlign: 'center' }}>
                            <Button variant='secondary' onClick={handleResetC}>
                                {'Reset'}
                            </Button>
                            <Typography variant='body2' style={{ margin: '8px 0' }}>
                                {'All steps completed!'}
                            </Typography>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <ButtonGroup
                                buttonProps={[
                                    {
                                        disabled: activeStepC === 0,
                                        onClick: handleBackC,
                                        label: 'Back'
                                    },
                                    {
                                        onClick: handleNextC,
                                        label: activeStepC === steps.length - 1 ? 'Finish' : 'Next'
                                    }
                                ]}
                            />
                        </div>
                    )}
                </div>
            </Card>

            {/* ----------------------------- */}
            <div className='clx-spacer-24'></div>
        </div>
    )
}
