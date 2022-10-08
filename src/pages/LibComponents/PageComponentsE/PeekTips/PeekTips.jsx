import InfoIcon from 'apollo-react-icons/Info';
import IconButton from 'apollo-react/components/IconButton';
import Peek from 'apollo-react/components/Peek';
import Tooltip from 'apollo-react/components/Tooltip';
import Typography from 'apollo-react/components/Typography';

import styles from './PeekTips.module.scss';

export default function BlockBanner() {
    return (
        <div className={styles['component']}>
            {/* ----------------------------- */}
            {/* Peeks*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Peek</div>
            <div style={{ padding: '60px 24px' }}>
                <Peek
                    //followCursor
                    placement='right'
                    anchor={
                        <IconButton color='primary'>
                            <InfoIcon />
                        </IconButton>
                    }
                    open
                    content={
                        <div style={{ maxWidth: 400 }}>
                            <Typography variant='title2' gutterBottom style={{ fontWeight: 600 }}>
                                This is a peek, displays on hover
                            </Typography>
                            <Typography variant='body2' style={{ color: '#333' }}>
                                Lorem Ipsum Dolor Sit Amet
                                <br />
                                Lorem Ipsum Dolor Sit Amet
                                <br />
                                Lorem Ipsum Dolor Sit Amet
                                <br />
                            </Typography>
                        </div>
                    }
                />
            </div>
            {/* ----------------------------- */}
            {/* Tooltips*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Tooltips: Small / Big</div>
            <div>
                <div style={{ padding: '24px 24px' }}>
                    <Tooltip variant='dark' title='Dark tooltip' placement='top' open style={{ marginRight: 70 }}>
                        <IconButton color='primary'>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip variant='light' title='Light Tooltip' placement='top' open style={{ marginRight: 48 }}>
                        <IconButton color='primary'>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div style={{ padding: '24px 24px' }}>
                    <Tooltip
                        title='This is a big tooltip title'
                        subtitle='Lorem ipsum dolor sit amet.'
                        placement='right'
                        open
                        style={{ marginRight: 0 }}
                    >
                        <IconButton color='primary'>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
