import ArrowDownIcon from 'apollo-react-icons/ArrowDown';
import BellIcon from 'apollo-react-icons/Bell';
import EllipsisVertical from 'apollo-react-icons/EllipsisVertical';
import OpenNewIcon from 'apollo-react-icons/OpenNew';
import StarOutlineIcon from 'apollo-react-icons/StarOutline';
import StarSolidIcon from 'apollo-react-icons/StarSolid';
import TrashIcon from 'apollo-react-icons/Trash';
import Button from 'apollo-react/components/Button';
import Divider from 'apollo-react/components/Divider';
import Hero from 'apollo-react/components/Hero';
import IconButton from 'apollo-react/components/IconButton';
import IconMenuButton from 'apollo-react/components/IconMenuButton';
import Menu from 'apollo-react/components/Menu';
import MenuButton from 'apollo-react/components/MenuButton';
import MenuItem from 'apollo-react/components/MenuItem';
import SelectButton from 'apollo-react/components/SelectButton';
import SplitButton from 'apollo-react/components/SplitButton';
import ToggleButton from 'apollo-react/components/ToggleButton';
import { useEffect, useState } from 'react';

import styles from './MenuButtons.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [openValue, setOpenValue] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleClick = (label) => () => {
        console.log(`You picked ${label}.`)
    }

    const handleClickMenu = (event) => {
        setOpenValue(true)
        setAnchorEl(event.currentTarget)
    }

    const handleRequestCloseMenu = () => {
        setOpenValue(false)
    }

    const menuItems = [
        {
            text: 'Business Units',
            onClick: handleClick('Business Units')
        },
        {
            text: 'Topics',
            onClick: handleClick('Topics')
        },
        {
            text: 'Benchmarks',
            onClick: handleClick('Benchmarks')
        },
        {
            text: 'Destructive Action',
            onClick: handleClick('Destructive Action'),
            destructiveAction: true
        }
    ]

    const options = [
        {
            label: 'Option 1',
            onClick: handleClick('Option 1')
        },
        {
            label: 'Option 2',
            onClick: handleClick('Option 2')
        },
        {
            label: 'Option 3',
            onClick: handleClick('Option 3')
        }
    ]

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
            {/* ------------------------------------------- */}
            {/* content */}
            {/* ------------------------------------------- */}
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>MenuButton</div>
            <MenuButton buttonText='Menu button' menuItems={menuItems} style={{ margin: '0 16px 16px 0' }} />
            <MenuButton
                buttonText='Menu button'
                menuItems={menuItems}
                size='small'
                style={{ margin: '0 16px 16px 0' }}
            />
            <MenuButton buttonText='Menu button' menuItems={[]} style={{ margin: '0 16px 16px 0' }} disabled />
            <MenuButton
                buttonText='Menu button'
                menuItems={[]}
                size='small'
                style={{ margin: '0 16px 16px 0' }}
                disabled
            />
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>SelectButton</div>
            <SelectButton placeholder='Select Button' style={{ margin: '0 16px 16px 0' }}>
                <MenuItem value='1'>{'Item 1'}</MenuItem>
                <MenuItem value='2'>{'Item 2'}</MenuItem>
                <MenuItem value='3'>{'Item 3'}</MenuItem>
                <MenuItem value='4' disabled>
                    {'Item 4'}
                </MenuItem>
            </SelectButton>
            <SelectButton placeholder='Select Button' style={{ margin: '0 16px 16px 0' }} disabled>
                <MenuItem value='1'>{'Item 1'}</MenuItem>
                <MenuItem value='2'>{'Item 2'}</MenuItem>
                <MenuItem value='3'>{'Item 3'}</MenuItem>
                <MenuItem value='4' disabled>
                    {'Item 4'}
                </MenuItem>
            </SelectButton>
            <SelectButton placeholder='Select Button' size='small' style={{ margin: '0 16px 16px 0' }}>
                <MenuItem value='1'>{'Item 1'}</MenuItem>
                <MenuItem value='2'>{'Item 2'}</MenuItem>
                <MenuItem value='3'>{'Item 3'}</MenuItem>
                <MenuItem value='4' disabled>
                    {'Item 4'}
                </MenuItem>
            </SelectButton>
            <SelectButton placeholder='Select Button' size='small' style={{ margin: '0 16px 16px 0' }} disabled>
                <MenuItem value='1'>{'Item 1'}</MenuItem>
                <MenuItem value='2'>{'Item 2'}</MenuItem>
                <MenuItem value='3'>{'Item 3'}</MenuItem>
                <MenuItem value='4' disabled>
                    {'Item 4'}
                </MenuItem>
            </SelectButton>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title'>IconButton</div>
            <div>
                <IconButton>
                    <OpenNewIcon />
                </IconButton>
                <IconButton disabled>
                    <OpenNewIcon />
                </IconButton>
                <IconButton size='small'>
                    <OpenNewIcon />
                </IconButton>
                <IconButton size='small' disabled>
                    <OpenNewIcon />
                </IconButton>

                <IconButton color='primary' style={{ margin: '0 0 0 32px' }}>
                    <OpenNewIcon />
                </IconButton>
                <IconButton color='primary' disabled>
                    <OpenNewIcon />
                </IconButton>
                <IconButton color='primary' size='small'>
                    <OpenNewIcon />
                </IconButton>
                <IconButton color='primary' size='small' disabled>
                    <OpenNewIcon />
                </IconButton>
            </div>
            <div>
                <IconButton destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton disabled destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton size='small' destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton size='small' disabled destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton color='primary' destructiveAction style={{ margin: '0 0 0 32px' }}>
                    <TrashIcon />
                </IconButton>
                <IconButton color='primary' disabled destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton color='primary' size='small' destructiveAction>
                    <TrashIcon />
                </IconButton>
                <IconButton color='primary' size='small' disabled destructiveAction>
                    <TrashIcon />
                </IconButton>
            </div>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>IconButton with dark background</div>
            <div>
                <Hero>
                    <IconButton darkMode>
                        <OpenNewIcon />
                    </IconButton>
                    <IconButton darkMode disabled>
                        <OpenNewIcon />
                    </IconButton>
                    <IconButton size='small' darkMode>
                        <OpenNewIcon />
                    </IconButton>
                    <IconButton size='small' darkMode disabled>
                        <OpenNewIcon />
                    </IconButton>
                </Hero>
            </div>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>IconMenuButton</div>
            <IconMenuButton id='actions-2' menuItems={menuItems} style={{ margin: '0 16px 16px 0' }}>
                <EllipsisVertical />
            </IconMenuButton>
            <IconMenuButton id='actions-2' menuItems={menuItems} size='small' style={{ margin: '0 16px 16px 0' }}>
                <EllipsisVertical />
            </IconMenuButton>
            <IconMenuButton id='actions-3' menuItems={[]} disabled style={{ margin: '0 16px 16px 0' }}>
                <EllipsisVertical />
            </IconMenuButton>{' '}
            <IconMenuButton id='actions-2' menuItems={[]} size='small' disabled style={{ margin: '0 16px 16px 0' }}>
                <EllipsisVertical />
            </IconMenuButton>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>ToggleButton</div>
            <div style={{ margin: '0 0 24px 0' }}>
                <ToggleButton
                    defaultIcon={<StarOutlineIcon />}
                    activeIcon={<StarSolidIcon />}
                    onChange={(value) => console.log(value)}
                />
                <ToggleButton
                    size='small'
                    defaultIcon={<StarOutlineIcon />}
                    activeIcon={<StarSolidIcon />}
                    onChange={(value) => console.log(value)}
                />
            </div>
            <Hero>
                <ToggleButton
                    defaultIcon={<StarOutlineIcon />}
                    activeIcon={<StarSolidIcon />}
                    onChange={(value) => console.log(value)}
                    darkMode
                />
                <ToggleButton
                    size='small'
                    defaultIcon={<StarOutlineIcon />}
                    activeIcon={<StarSolidIcon />}
                    onChange={(value) => console.log(value)}
                    darkMode
                />
            </Hero>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>SplitButton</div>
            <div>
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    variant='secondary'
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    size='small'
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    size='small'
                    variant='secondary'
                    style={{ margin: '0 16px 16px 0' }}
                />
            </div>
            <div>
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    disabled
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    variant='secondary'
                    disabled
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    size='small'
                    disabled
                    style={{ margin: '0 16px 16px 0' }}
                />
                <SplitButton
                    label='Option 1'
                    onClick={handleClick('Option 1')}
                    menuItems={options}
                    size='small'
                    variant='secondary'
                    disabled
                    style={{ margin: '0 16px 16px 0' }}
                />
            </div>
            {/* ------------------------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Button + Menu Component from Labs</div>
            <div className={'clx-desc-box blue top-gutter'}>
                <p>
                    <b>Example Button + Icon using &lt;Menu&gt; for options</b>
                </p>
                <p>
                    Accepts any parent element + menu items with html, also test simple tweaks, perfect match width,
                    disable autofocus etc. No small size available here for the menu.
                </p>
            </div>
            <Button
                aria-owns={openValue ? 'simple-menu' : null}
                aria-haspopup='true'
                variant='secondary'
                onClick={handleClickMenu}
                //style={{ width: 222 }}
                style={{ margin: '0 16px 16px 0' }}
            >
                {'Open Menu Component'}
                <ArrowDownIcon style={{ fontSize: 16, marginLeft: 3 }} />
            </Button>
            <Button
                aria-owns={openValue ? 'simple-menu' : null}
                aria-haspopup='true'
                variant='secondary'
                onClick={handleClickMenu}
                // style={{ width: 222 }}
                style={{ margin: '0 16px 16px 0' }}
                size='small'
            >
                {'Open Menu Component'}
                <ArrowDownIcon style={{ fontSize: 16, marginLeft: 3 }} />
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={openValue}
                onClose={handleRequestCloseMenu}
                style={{ marginTop: 4 }}
                size='small'
                disableAutoFocusItem
            >
                <MenuItem onClick={handleRequestCloseMenu} style={{ width: 220 }} selected={false}>
                    {'Business Units'}
                </MenuItem>
                <MenuItem onClick={handleRequestCloseMenu} style={{ width: 220 }} selected={false}>
                    {'Topics'}
                </MenuItem>
                <MenuItem onClick={handleRequestCloseMenu} style={{ width: 220 }} selected={false}>
                    {'Consent'}
                </MenuItem>
                <MenuItem onClick={handleRequestCloseMenu} style={{ width: 220 }} selected={false}>
                    {'Benchmarks'}
                </MenuItem>
                <MenuItem onClick={handleRequestCloseMenu} style={{ width: 220 }} selected={false}>
                    <BellIcon style={{ fontSize: 16, marginLeft: 3 }} />
                    <span style={{ marginLeft: 20 }}>{'Test with icon'}</span>
                </MenuItem>
            </Menu>
        </div>
    )
}
