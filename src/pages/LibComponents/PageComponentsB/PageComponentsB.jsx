import * as icons from 'apollo-react-icons';
import * as colors from 'apollo-react/colors';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid';
import MenuItem from 'apollo-react/components/MenuItem';
import Modal from 'apollo-react/components/Modal';
import Radio from 'apollo-react/components/Radio';
import RadioGroup from 'apollo-react/components/RadioGroup';
import Select from 'apollo-react/components/Select';
import TextField from 'apollo-react/components/TextField';
import Typography from 'apollo-react/components/Typography';
import isIE11 from 'apollo-react/utils/isIE11';
import React, { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import styles from './PageComponentsB.module.scss';

export default function Page() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [color, setColor] = React.useState('black')
    const [fontSize, setFontSize] = React.useState('large')
    const [filter, setFilter] = React.useState('')
    const [view, setView] = React.useState(isIE11() ? 'compact' : 'detail')
    const [selectedIcon, setSelectedIcon] = React.useState({})
    const [modalOpen, setModalOpen] = React.useState(false)

    /// ***********************************************
    // functions and logic
    // ***********************************************

    const handleSelectIcon = (icon) => {
        setSelectedIcon(icon)
        setModalOpen(true)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value)
    }

    const handleViewChange = (e) => {
        setView(e.target.value)
    }

    let timer = null

    const handleFilterChange = (e) => {
        const value = e.target.value
        clearTimeout(timer)
        timer = setTimeout(() => setFilter(value), 50)
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
        <div
            className={[
                styles['page-b'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                B - Iconography
            </HeadLineDuoTitle>

            <div className={styles['content']}>
                {/* ----------------------------- */}
                {/* Sample elements */}
                {/* ----------------------------- */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className={'clx-headline-title grey center'}>Click an icon to get embed info</div>
                    </Grid>
                </Grid>

                {/* ----------------------------- */}
                {/* Content */}
                {/* ----------------------------- */}
                <div>
                    <Divider style={{ marginTop: '0' }}></Divider>

                    {/* ----------------------------- */}
                    {/* Filters */}
                    {/* ----------------------------- */}
                    <div className={styles.spacingBottomStyle}>
                        <Select
                            label='Color'
                            placeholder='Select a color'
                            value={color}
                            onChange={handleColorChange}
                            style={{ marginRight: '16px', width: '120px' }}
                            canDeselect={false}
                            size={'small'}
                        >
                            <MenuItem value='black'>{'Black'}</MenuItem>
                            <MenuItem value='neutral7'>{'Grey (neutral7)'}</MenuItem>
                            <MenuItem value='purple'>{'Purple'}</MenuItem>
                            <MenuItem value='blue'>{'Blue'}</MenuItem>
                            <MenuItem value='orange'>{'Orange'}</MenuItem>
                            <MenuItem value='fuchsia'>{'Fuchsia'}</MenuItem>
                            <MenuItem value='green'>{'Green'}</MenuItem>
                            <MenuItem value='blueDark'>{'Blue Dark'}</MenuItem>
                        </Select>
                        <Select
                            size={'small'}
                            label='Font size'
                            placeholder='Select a font size'
                            value={fontSize}
                            onChange={handleFontSizeChange}
                            style={{ marginRight: '16px', width: '120px' }}
                            canDeselect={false}
                        >
                            <MenuItem value='extraSmall'>{'Extra Small'}</MenuItem>
                            <MenuItem value='small'>{'Small'}</MenuItem>
                            <MenuItem value='default'>{'Default'}</MenuItem>
                            <MenuItem value='large'>{'Large'}</MenuItem>
                        </Select>
                        <TextField
                            size={'small'}
                            label='Filter'
                            placeholder='Search icons...'
                            onChange={handleFilterChange}
                            style={{ marginRight: '16px', width: '200px' }}
                        />
                        <div style={{ display: 'inline-block', width: 240, paddingTop: 16 }}>
                            <RadioGroup
                                label='View'
                                value={view}
                                onChange={handleViewChange}
                                row
                                size={'small'}
                                style={{ paddingTop: 8 }}
                            >
                                <Radio value='detail' label='Detail' />
                                <Radio value='compact' label='Compact' />
                            </RadioGroup>
                        </div>
                    </div>

                    <Divider style={{ marginBottom: '20px' }}></Divider>

                    {/* ----------------------------- */}
                    {/* Grid > icons */}
                    {/* ----------------------------- */}

                    <Grid container spacing={1} wrap='wrap'>
                        {Object.keys(icons)
                            .filter((iconName) => {
                                const key = iconName.charAt(0).toLowerCase() + iconName.slice(1)
                                // const keywords = iconKeywords[key] ? iconKeywords[key] : []
                                const keywords = []
                                return (
                                    iconName.toLowerCase().includes(filter.toLowerCase()) ||
                                    keywords.filter((key) => key.includes(filter.toLowerCase())).length > 0
                                )
                            })
                            .map((iconName) => {
                                const Icon = icons[iconName]

                                return view === 'detail' ? (
                                    // card icons
                                    <Grid key={iconName} item xs={6} sm={4} md={2} lg={1}>
                                        <div
                                            className={styles.cardStyle}
                                            onClick={() => handleSelectIcon({ iconName, Icon })}
                                        >
                                            <div className={styles.iconContainer}>
                                                <Icon fontSize={fontSize} style={{ color: colors[color] }} />
                                            </div>
                                            <Typography className={styles.iconNameStyle} noWrap>
                                                {iconName}
                                            </Typography>
                                        </div>
                                    </Grid>
                                ) : (
                                    // small icons
                                    <Icon
                                        key={iconName}
                                        fontSize={fontSize}
                                        htmlColor={colors[color]}
                                        style={{ margin: '20px 12px', cursor: 'pointer' }}
                                        onClick={() => handleSelectIcon({ iconName, Icon })}
                                    />
                                )
                            })}
                    </Grid>
                </div>
                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24' />
                <TxtDisclaimer></TxtDisclaimer>
            </div>

            {/* ----------------------------- */}
            {/* MODAL */}
            {/* ----------------------------- */}
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={`${selectedIcon.iconName} icon`}
                buttonProps={[{ label: 'Close', variant: 'primary' }]}
            >
                <div className={styles['modal-icons']}>
                    {selectedIcon.Icon && (
                        <div className={styles.wrapIcon}>
                            <selectedIcon.Icon fontSize='large' />
                            <selectedIcon.Icon />
                            <selectedIcon.Icon fontSize='small' />
                            <selectedIcon.Icon fontSize='extraSmall' />
                        </div>
                    )}
                </div>
                <br />
                <code>{`import ${selectedIcon.iconName} from 'apollo-react-icons/${selectedIcon.iconName}';`}</code>
            </Modal>
        </div>
    )
}
