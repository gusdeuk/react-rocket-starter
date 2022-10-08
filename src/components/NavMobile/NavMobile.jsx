import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Close from 'apollo-react-icons/Close';
import EllipsisHorizontal from 'apollo-react-icons/EllipsisHorizontal';
import Home from 'apollo-react-icons/House';
import Button from 'apollo-react/components/Button';
import Divider from 'apollo-react/components/Divider';
import IconButton from 'apollo-react/components/IconButton';
import NavigationBar from 'apollo-react/components/NavigationBar';
import Tooltip from 'apollo-react/components/Tooltip';
import Typography from 'apollo-react/components/Typography';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import IconCube from '../../icons/IconCube';
import IconLayout from '../../icons/IconLayout';
import { setIsLogged } from '../../store/reducers/appGlobalDataSliceReducer';
import styles from './NavMobile.module.scss';
import { menuBase, menuComponents, menuLayouts } from './NavMobileData';

export default function NavMobile(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    let [subMenuLibraryOpen, setSubMenuLibraryOpen] = useState(false)
    let [isLibraryPage, setIsLibraryPage] = useState(false)

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const profileMenuProps = {
        name: 'Shumway',
        title: 'Gordon Shumway, Investigator',
        email: 'gordon.shumway@iqvia.com',
        hideLogout: true,
        menuItems: []
    }

    /// ***********************************************
    // functions and logic
    // ***********************************************

    function toggleSubMenuLibrary() {
        setSubMenuLibraryOpen(!subMenuLibraryOpen)
    }
    function closeAllSubMenus() {
        setSubMenuLibraryOpen(false)
    }

    function handleClickToPageFromSub() {
        closeAllSubMenus()
    }
    function handleLogout() {
        closeAllSubMenus()
        setTimeout(function () {
            // set global state as logged out
            dispatch(setIsLogged(false))
            // navigate to home
            history.push('/public/launch')
        }, 500)
    }

    //------------------------------------------
    // Hook para catchear el resize
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        })
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
                setSubMenuLibraryOpen(false)
            }
            // Add event listener
            window.addEventListener('resize', handleResize)
            // Call handler right away so state gets updated with initial window size
            handleResize()
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize)
        }, []) // Empty array ensures that effect is only run on mount
        return windowSize
    }
    useWindowSize()
    //------------------------------------------

    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        // console.log('called use effect general')
    }, [])

    useEffect(() => {
        // console.log('changed location' + location.pathname)
        const currentPath = location.pathname
        if (currentPath.includes('/app/PageComponents') || currentPath.includes('/app/LibLay')) {
            setIsLibraryPage(true)
        } else {
            setIsLibraryPage(false)
        }
        closeAllSubMenus()
    }, [location])
    // Only re-run the effect if location changes

    // ***********************************************
    // child local components
    // ***********************************************
    const CustomNavBar = ({ history, location: { pathname } }) => {
        return (
            <NavigationBar
                className={[styles['nav-bar-mobile-home']].join(' ')}
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
                        onClick={() => history.push('/app/home')}
                    >
                        Apollo <span style={{ fontWeight: 600 }}>Rocket Starter App</span>
                    </Typography>
                )}
                waves
                maxWidth={'100%'}
                profileMenuProps={profileMenuProps}
            />
        )
    }

    const ConnectedCustomNavBar = withRouter(CustomNavBar)

    // ***********************************************
    // render main component
    // ***********************************************

    return (
        <div
            className={[
                styles['nav-mobile-component'],
                'nav-mobile-wrapper animate__animated animate__fadeIn animate__faster	'
            ].join(' ')}
        >
            {/* ------------------------------------------------ */}
            {/* main level */}
            {/* ------------------------------------------------ */}

            {/*  ------------------------------------------------------------ */}
            {/* Static NAV BAR */}
            {/*  ------------------------------------------------------------ */}
            <ConnectedCustomNavBar></ConnectedCustomNavBar>

            <div className={styles['menu-bottom']}>
                {/* items direct */}
                {menuBase.map((data, key) => {
                    return (
                        <div className={styles['item']} key={key.toString()}>
                            <NavLink exact={true} to={data.pathname} activeClassName={styles['selected']}>
                                <div className={styles['wrap']}>
                                    {data.text === 'Home' && <Home className={styles['menu-icon']}></Home>}
                                    {data.text === 'About' && (
                                        <AppShortcutIcon className={styles['menu-icon']}></AppShortcutIcon>
                                    )}
                                    {data.text === 'Explore' && (
                                        <TravelExploreIcon className={styles['menu-icon']}></TravelExploreIcon>
                                    )}
                                    {data.text === 'Lab' && (
                                        <ScienceRoundedIcon className={styles['menu-icon']}></ScienceRoundedIcon>
                                    )}
                                    <div className={'truncate'}>{data.text}</div>
                                    <div className={styles['sep']}></div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}

                {/* item with submenu */}
                <div className={styles['item']}>
                    <span className={[isLibraryPage ? styles['selected'] : ''].join(' ')}>
                        <div className={[styles['wrap']].join(' ')} onClick={toggleSubMenuLibrary}>
                            <EllipsisHorizontal className={styles['menu-icon']}></EllipsisHorizontal>
                            <div className={'truncate'}>MORE</div>
                        </div>
                    </span>
                </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* submenus level */}
            {/* ------------------------------------------------ */}

            <CSSTransition
                in={subMenuLibraryOpen}
                timeout={800}
                classNames={{
                    enter: 'animate__animated animate__slideInRight animate__faster',
                    exit: 'animate__animated animate__slideOutRight animate__faster'
                }}
                mountOnEnter
                unmountOnExit
                // EVENTS
                // onEnter={() => testCallOnEnter('lala')}
                // onExited={() => testCallOnExit('lala')}
            >
                <div className={styles['expanded-panel']}>
                    <div className={styles['top-actions']}>
                        <IconButton className={styles['btn-close']} size='small' onClick={closeAllSubMenus}>
                            <Close />
                        </IconButton>

                        <Button
                            className={styles['btn-logout']}
                            variant='secondary'
                            size='small'
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>

                    <div className={[styles['content'], 'custom-scroll-area vert-scroll tiny-thumb'].join(' ')}>
                        <div className={styles['list']}>
                            <div className={styles['list-title']}>Layout Ideas</div>
                            <div className={styles['wrapper-layouts']}>
                                {menuLayouts.map((data, key) => {
                                    return (
                                        <Tooltip
                                            variant='dark'
                                            title={data.tooltip}
                                            placement='top'
                                            key={key.toString() + 'a'}
                                        >
                                            <NavLink
                                                key={key.toString()}
                                                exact={true}
                                                to={data.pathname}
                                                activeClassName={styles['selected']}
                                                onClick={handleClickToPageFromSub}
                                                className={styles['sub-button']}
                                            >
                                                <IconLayout className={styles['sub-icon']}></IconLayout>
                                                <div className={styles['sub-item']}>{data.text}</div>
                                            </NavLink>
                                        </Tooltip>
                                    )
                                })}
                            </div>

                            <Divider style={{ margin: '18px 0 12px 0' }}></Divider>

                            <div className={styles['list-title']}>Component Playground</div>

                            <div className={styles['wrapper-compos']}>
                                {menuComponents.map((data, key) => {
                                    return (
                                        <Tooltip
                                            variant='dark'
                                            title={data.tooltip}
                                            placement='top'
                                            key={key.toString() + 'b'}
                                        >
                                            <NavLink
                                                key={key.toString()}
                                                exact={true}
                                                to={data.pathname}
                                                activeClassName={styles['selected']}
                                                onClick={handleClickToPageFromSub}
                                                className={styles['sub-button']}
                                            >
                                                <IconCube className={styles['sub-icon']}></IconCube>
                                                <div className={styles['sub-item']}>{data.text}</div>
                                            </NavLink>
                                        </Tooltip>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div className={styles['wrapper-bottom']}>
                            <Divider></Divider>
                            <div className={styles['bottom-actions']}>
                                <Button variant='secondary' fullWidth size='small' onClick={handleLogout}>
                                    Logout / Exit
                                </Button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
