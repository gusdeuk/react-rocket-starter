import PlusIcon from 'apollo-react-icons/Plus';
import Button from 'apollo-react/components/Button';
import ButtonGroup from 'apollo-react/components/ButtonGroup';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import styles from './BasicButtons.module.scss';

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
        <div className={styles['tab']}>
            {/* ----------------------------- */}
            {/* content */}
            {/* ----------------------------- */}

            {/* -------------------------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Primary / Secondary Buttons</div>
            <div>
                <Button variant='primary' style={{ margin: '0 16px 16px 0' }}>
                    Primary
                </Button>
                <Button variant='primary' size='small' style={{ margin: '0 16px 16px 0' }}>
                    Small Size
                </Button>
                <Button variant='primary' disabled style={{ margin: '0 16px 16px 0' }}>
                    Disabled
                </Button>
                <Button variant='primary' size='small' disabled style={{ margin: '0 16px 16px 0' }}>
                    Disabled Small
                </Button>
            </div>
            <Divider style={{ margin: '0  0 16px 0' }}></Divider>
            <div>
                <Button variant='primary' icon={PlusIcon} style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button variant='primary' icon={<PlusIcon />} size='small' style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button variant='primary' icon={PlusIcon} disabled style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button variant='primary' icon={<PlusIcon />} size='small' disabled style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
            </div>
            <Divider style={{ margin: '0  0 16px 0' }}></Divider>
            <div>
                <Button variant='secondary' style={{ margin: '0 16px 16px 0' }}>
                    Secondary
                </Button>
                <Button variant='secondary' size='small' style={{ margin: '0 16px 16px 0' }}>
                    Small Size
                </Button>
                <Button variant='secondary' disabled style={{ margin: '0 16px 16px 0' }}>
                    Disabled
                </Button>
                <Button variant='secondary' size='small' disabled style={{ margin: '0 16px 16px 0' }}>
                    Disabled Small
                </Button>
            </div>
            <Divider style={{ margin: '0  0 16px 0' }}></Divider>
            <div>
                <Button variant='secondary' icon={PlusIcon} style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button variant='secondary' icon={<PlusIcon />} size='small' style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button variant='secondary' icon={PlusIcon} disabled style={{ margin: '0 16px 16px 0' }}>
                    Add New
                </Button>
                <Button
                    variant='secondary'
                    icon={<PlusIcon />}
                    size='small'
                    disabled
                    style={{ margin: '0 16px 16px 0' }}
                >
                    Add New
                </Button>
            </div>

            {/* -------------------------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Text Buttons</div>
            <div>
                {/* variant prop is not required */}
                <Button variant='text' style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
                <Button size='small' style={{ margin: '0 16px 16px 0' }}>
                    Small Text
                </Button>
                <Button disabled style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
                <Button size='small' disabled style={{ margin: '0 16px 16px 0' }}>
                    Disabled Small
                </Button>{' '}
            </div>
            <Divider style={{ margin: '0  0 16px 0' }}></Divider>
            <div>
                <Button icon={<PlusIcon />} style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
                <Button icon={<PlusIcon />} size='small' style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
                <Button icon={<PlusIcon />} disabled style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
                <Button size='small' icon={<PlusIcon />} disabled style={{ margin: '0 16px 16px 0' }}>
                    Text
                </Button>
            </div>

            {/* -------------------------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Full Width Buttons</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Button variant='primary' fullWidth>
                        Primary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button variant='secondary' fullWidth>
                        Secondary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button fullWidth>Text</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant='primary' fullWidth disabled>
                        Primary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button variant='secondary' fullWidth disabled>
                        Secondary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button fullWidth disabled>
                        Text
                    </Button>
                </Grid>
            </Grid>
            <Divider style={{ margin: '16px  0 16px 0' }}></Divider>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Button variant='primary' fullWidth size='small'>
                        Primary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button variant='secondary' fullWidth size='small'>
                        Secondary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button fullWidth size='small'>
                        Text
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant='primary' fullWidth disabled size='small'>
                        Primary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button variant='secondary' fullWidth disabled size='small'>
                        Secondary
                    </Button>
                    <div style={{ padding: 4 }} />
                    <Button fullWidth disabled size='small'>
                        Text
                    </Button>
                </Grid>
            </Grid>

            {/* -------------------------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Button Groups</div>

            <div>
                <ButtonGroup style={{ margin: '0 16px 16px 0' }} />
                <ButtonGroup
                    style={{ margin: '0 16px 16px 0' }}
                    buttonProps={[
                        {
                            label: 'Default Label'
                        },
                        {
                            label: 'Primary Label'
                        }
                    ]}
                />
                <ButtonGroup
                    style={{ margin: '0 16px 16px 0' }}
                    buttonProps={[
                        {
                            variant: 'text',
                            label: 'Cancel'
                        },
                        {
                            variant: 'secondary',
                            label: 'Reset'
                        },
                        {
                            variant: 'primary',
                            label: 'Submit'
                        }
                    ]}
                />

                <ButtonGroup
                    style={{ margin: '0 16px 16px 0' }}
                    buttonProps={[
                        {
                            variant: 'text',
                            label: 'Cancel'
                        },
                        {
                            variant: 'secondary',
                            label: 'Reset'
                        },
                        {
                            variant: 'secondary',
                            label: 'Search'
                        },
                        {
                            variant: 'primary',
                            label: 'Submit'
                        }
                    ]}
                />
            </div>
        </div>
    )
}
