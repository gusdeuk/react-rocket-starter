import SettingsIcon from 'apollo-react-icons/Cog';
import HelpIcon from 'apollo-react-icons/Help';
import UserIcon from 'apollo-react-icons/User';
import Badge from 'apollo-react/components/Badge';
import Breadcrumbs from 'apollo-react/components/Breadcrumbs';
import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import FixedBar from 'apollo-react/components/FixedBar';
import Footer from 'apollo-react/components/Footer';
import Link from 'apollo-react/components/Link';
import NavigationBar from 'apollo-react/components/NavigationBar';
import Pagination from 'apollo-react/components/Pagination';
import Tab from 'apollo-react/components/Tab';
import Tabs from 'apollo-react/components/Tabs';
import Typography from 'apollo-react/components/Typography';
import { useEffect, useState } from 'react';

import styles from './Left.module.scss';

/* eslint-disable no-script-url */
export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [tabValue, setTabValue] = useState(0)

    const [page, setPage] = useState(0)

    const menuItems = [
        {
            text: 'Home',
            href: 'javascript:void(0);'
        },
        {
            text: 'Settings',
            menuItems: [
                {
                    text: 'Communication Management',
                    href: 'javascript:void(0);'
                },
                {
                    text: 'Custom Field Management',
                    href: 'javascript:void(0);'
                },
                {
                    text: 'Report Configuration',
                    href: 'javascript:void(0);'
                },
                {
                    subtitle: 'Pre-disclosure'
                },
                {
                    text: 'Communication Templates',
                    href: 'javascript:void(0);'
                }
            ]
        }
    ]

    const profileMenuProps = {
        name: 'Oliver Queen',
        title: 'Sales Rep',
        email: 'oliver.queen@iqvia.com',
        logoutText: 'Log out',
        menuItems: [
            {
                text: 'Profile',
                href: 'javascript:void(0);',
                icon: UserIcon
            },
            {
                text: 'Settings',
                href: 'javascript:void(0);',
                icon: SettingsIcon
            },
            {
                text: 'Help',
                href: 'javascript:void(0);',
                icon: HelpIcon
            }
        ]
    }

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleChangeTab = (event, value) => {
        setTabValue(value)
    }

    const handleClick = () => console.log('Breadcrumb was clicked')

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
            {/* TABS */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title'>Tabs</div>
            <Tabs value={tabValue} onChange={handleChangeTab} truncate>
                <Tab label='Tab Froolala' />
                <Tab
                    label={
                        <Badge badgeContent={9} max={999}>
                            {'Tab Badge'}
                        </Badge>
                    }
                />
                <Tab label='Tab Zarlanga' />
                <Tab label='Tab Sarazen' />
                <Tab label='Co-See-Tab' />
            </Tabs>

            <div style={{ padding: '24px 0 0 0' }}>
                {tabValue === 0 && <Typography variant='body2'>{'Tab one content'}</Typography>}
                {tabValue === 1 && <Typography variant='body2'>{'Tab two content'}</Typography>}
                {tabValue === 2 && <Typography variant='body2'>{'Tab three content'}</Typography>}
                {tabValue === 3 && <Typography variant='body2'>{'Tab four content'}</Typography>}
                {tabValue === 4 && <Typography variant='body2'>{'Tab five content'}</Typography>}
            </div>
            {/* ----------------------------- */}
            {/* Breadcrumbs */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Breadcrumbs</div>
            <Breadcrumbs
                style={{ padding: 0 }}
                items={[
                    { href: 'javascript:void(0);', onClick: handleClick },
                    { href: 'javascript:void(0);', title: 'My HCPs', onClick: handleClick },
                    {
                        href: 'javascript:void(0);',
                        title: 'Oliver Queen',
                        onClick: handleClick
                    },
                    {
                        title: 'Benicio Monserrate Rafael del Toro Sánchez'
                    }
                ]}
            />
            {/* ----------------------------- */}
            {/* Fixed bar */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Fixed Bar</div>
            <div style={{ padding: '10px 0' }}>
                <FixedBar title='Title Big' subtitle='Optional subtitle'>
                    <Button variant='text'>Text</Button>
                    <Button variant='primary'>Primary</Button>
                </FixedBar>
            </div>
            <div style={{ padding: '10px 0' }}>
                <FixedBar title='Title Small' size='small'>
                    <Button variant='text'>Text</Button>
                    <Button variant='primary'>Primary</Button>
                </FixedBar>
            </div>
            <div style={{ padding: '10px 0' }}>
                <FixedBar title='Title Big' onClose={() => console.log('closed!')} />
            </div>
            <div style={{ padding: '10px 0' }}>
                <FixedBar title='Title Small' size='small' onClose={() => console.log('closed!')} />
            </div>
            {/* ----------------------------- */}
            {/* Link */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Simple links</div>
            <div style={{}}>
                <Link onClick={() => console.log('link clicked')} style={{ marginRight: '24px' }}>
                    Link default
                </Link>
                <Link disabled style={{ marginRight: '24px' }}>
                    Link disabled
                </Link>
                <Link onClick={() => console.log('link clicked')} size='small'>
                    Link small
                </Link>
            </div>
            {/* ----------------------------- */}
            {/* Pagination */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Pagination</div>
            <Card
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: '16px'
                }}
            >
                <Pagination count={20} rowsPerPage={5} page={page} onChangePage={setPage} />
            </Card>
            {/* ----------------------------- */}
            {/* Footer */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Footer</div>
            <Footer
                style={{ padding: '0' }}
                buttonProps={[
                    {
                        label: 'Terms of Use',
                        onClick: () => console.log('Terms of Use link clicked')
                    },
                    {
                        label: 'Privacy Policy',
                        onClick: () => console.log('Privacy Policy link clicked')
                    }
                ]}
                languagePickerProps={{
                    noDeselect: true,
                    defaultValue: 'en',
                    placeholder: 'Language',
                    onChange: (value) => console.log(`${value} was selected`),
                    menuItems: [
                        {
                            text: 'English',
                            value: 'en'
                        },
                        {
                            text: 'Spanish',
                            value: 'sp'
                        },
                        {
                            text: 'Portuguese',
                            value: 'pt'
                        }
                    ]
                }}
                maxWidth={1600}
            />
            {/* ----------------------------- */}
            {/* NavigationBar */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Navigation bar</div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <NavigationBar
                    style={{ position: 'static' }}
                    LogoComponent={() => (
                        <Typography
                            style={{
                                color: 'white',
                                lineHeight: '56px',
                                marginRight: 24,
                                cursor: 'pointer',
                                zIndex: 2,
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => console.log('Logo clicked')}
                        >
                            IQVIA™ <span style={{ fontWeight: 600 }}>Test App</span>
                        </Typography>
                    )}
                    menuItems={menuItems}
                    // notificationsMenuProps={notificationsMenuProps}
                    profileMenuProps={profileMenuProps}
                    // onClick={navClick}
                    maxWidth={1600}
                    waves
                />
            </div>
            {/* ----------------------------- */}
            <div className='clx-spacer-24'></div>
        </div>
    )
}
