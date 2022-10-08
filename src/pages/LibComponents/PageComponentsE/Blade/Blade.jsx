import Rocket from 'apollo-react-icons/Rocket';
import Blade from 'apollo-react/components/Blade';
import Button from 'apollo-react/components/Button';
import ButtonGroup from 'apollo-react/components/ButtonGroup';
import Divider from 'apollo-react/components/Divider';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Tooltip from 'apollo-react/components/Tooltip';
import React, { useEffect } from 'react';

import styles from './Blade.module.scss';

export default function BladeBlock() {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setOpenBlade(true)
        // setExpandBlade(false)
    }, [])

    const [openBlade, setOpenBlade] = React.useState(false)
    const [expandBlade, setExpandBlade] = React.useState(false)
    const onCloseBlade = () => {
        setOpenBlade(false)
    }

    const onOpenBlade = () => {
        setOpenBlade(true)
    }
    const onChangeBlade = (e, expanded) => {
        console.log(expanded)
        if (expanded) {
            setExpandBlade(false)
        }
    }

    return (
        <div className={[styles['blade']].join(' ')}>
            <Button variant='secondary' onClick={onOpenBlade}>
                {'Open Right Blade'}
            </Button>

            <Blade
                // marginTop={56}
                width={300}
                side='right'
                open={true}
                onClose={onCloseBlade}
                onChange={onChangeBlade}
                title='Right Blade'
                subtitle='This blade has actions'
                hasBackdrop
                expanded={expandBlade}
                //hideCloseButton
                actions={
                    <ButtonGroup
                        alignItems='right'
                        buttonProps={[
                            {
                                onClick: onCloseBlade
                            },
                            {
                                onClick: onOpenBlade
                            }
                        ]}
                    />
                }
            ></Blade>
        </div>
    )
}
