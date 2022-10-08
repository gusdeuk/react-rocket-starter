import { ButtonBase } from '@mui/material';
import BellIcon from 'apollo-react-icons/Bell';
import UserIcon from 'apollo-react-icons/User';
import { blue, blueDark, fuchsia, green, orange, purple, white } from 'apollo-react/colors';
import ApolloProgress from 'apollo-react/components/ApolloProgress';
import Avatar from 'apollo-react/components/Avatar';
import Badge from 'apollo-react/components/Badge';
import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import CircularProgress from 'apollo-react/components/CircularProgress';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid/Grid';
import IconButton from 'apollo-react/components/IconButton';
import LinearProgress from 'apollo-react/components/LinearProgress';
import Loader from 'apollo-react/components/Loader';
import Tag from 'apollo-react/components/Tag';

import styles from './Right.module.scss';

export default function BlockBanner() {
    return (
        <div className={[styles['tags']].join(' ')}>
            {/* ----------------------------- */}
            {/* Tags*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Tags: Colors / Status / With Icons</div>
            <div>
                <Tag label='Tag' variant='blue' /> <Tag label='Tag' variant='purple' />{' '}
                <Tag label='Tag' variant='orange' /> <Tag label='Tag' variant='green' />{' '}
                <Tag label='Tag' variant='fuchsia' /> <Tag label='Tag' variant='blueDark' />{' '}
                <Tag label='Tag' variant='red' /> <Tag label='Tag' variant='grey' /> <Tag label='Tag' variant='black' />
            </div>
            <div className='clx-spacer-24'></div>
            <div>
                <Tag label='Tag' /> <Tag label='Tag' status='positive' /> <Tag label='Tag' status='negative' />{' '}
                <Tag label='Tag' status='warning' />{' '}
            </div>
            <div className='clx-spacer-24'></div>
            <div>
                <Tag label='Tag' variant='blue' Icon={BellIcon} /> <Tag label='Tag' variant='purple' Icon={BellIcon} />{' '}
                <Tag label='Tag' variant='orange' Icon={BellIcon} /> <Tag label='Tag' variant='green' Icon={BellIcon} />{' '}
                <Tag label='Tag' variant='fuchsia' Icon={BellIcon} />{' '}
                <Tag label='Tag' variant='blueDark' Icon={BellIcon} /> <Tag label='Tag' variant='red' Icon={BellIcon} />{' '}
                <Tag label='Tag' variant='grey' Icon={BellIcon} /> <Tag label='Tag' variant='black' Icon={BellIcon} />
            </div>
            <div className='clx-spacer-24'></div>
            {/* ----------------------------- */}
            {/* Badges*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Badges: Icon / Number / Dot / Custom color</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='2' className={styles['test-badge-style-2']}>
                            <IconButton size='small'>
                                <BellIcon />
                            </IconButton>
                        </Badge>
                    </span>{' '}
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='2' className={styles['test-badge-style']}>
                            <IconButton size='small'>
                                <BellIcon />
                            </IconButton>
                        </Badge>{' '}
                    </span>
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='1500' max={999}>
                            <IconButton size='small'>
                                <BellIcon />
                            </IconButton>
                        </Badge>
                    </span>{' '}
                    <span style={{ padding: '16px' }}>
                        <Badge variant='dot'>
                            <IconButton size='small'>
                                <BellIcon />
                            </IconButton>
                        </Badge>
                    </span>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <span style={{ padding: '16px' }}>
                        <Badge variant='dot'>
                            <Button>Messages</Button>
                        </Badge>
                    </span>
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='10' max={9}>
                            <Button>Messages</Button>
                        </Badge>
                    </span>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='150' max={99}>
                            <Button>Messages</Button>
                        </Badge>
                    </span>{' '}
                    <span style={{ padding: '16px' }}>
                        <Badge badgeContent='1500' max={999}>
                            <Button>Messages</Button>
                        </Badge>
                    </span>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Divider*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Dividers: Dark / Default / Light</div>
            <Card style={{ padding: '24px' }}>
                <Divider type='dark' />
                <div className='clx-spacer-24'></div>
                <Divider />
                <div className='clx-spacer-24'></div>
                <Divider type='light' />
            </Card>
            {/* ----------------------------- */}
            {/* Avatars Initials*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Avatars: Initials</div>
            <div
                style={{
                    padding: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap'
                }}
            >
                <Avatar style={{ color: 'dark', margin: 16 }} size='extraLarge'>
                    XL
                </Avatar>

                <Avatar style={{ color: 'dark', margin: 16 }} size='large'>
                    LG
                </Avatar>

                <Avatar style={{ color: 'dark', margin: 16 }} size='medium'>
                    MD
                </Avatar>

                <Avatar style={{ color: 'dark', margin: 16 }} size='small'>
                    SM
                </Avatar>
            </div>
            {/* ----------------------------- */}
            {/*Avatar Colors*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Avatars: Colors with Icons</div>
            <div
                style={{
                    padding: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap'
                }}
            >
                <Avatar style={{ backgroundColor: purple, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
                <Avatar style={{ backgroundColor: blue, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
                <Avatar style={{ backgroundColor: orange, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
                <Avatar style={{ backgroundColor: fuchsia, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
                <Avatar style={{ backgroundColor: green, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
                <Avatar style={{ backgroundColor: blueDark, color: white, margin: 16 }}>
                    <UserIcon />
                </Avatar>
            </div>
            {/* ----------------------------- */}
            {/*Cards*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Cards: Default / Interactive / Disabled</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <Card style={{ padding: 16, fontSize: '14px', height: '100px' }}>Default</Card>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Card interactive style={{ padding: 16, fontSize: '14px', height: '100px' }}>
                        Interactive
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Card disabled style={{ padding: 16, fontSize: '14px', height: '100px' }}>
                        Disabled
                    </Card>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Apollo Progress*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Progress: Apollo</div>
            <Card
                style={{
                    padding: '16px',
                    width: '100%',
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ApolloProgress />
            </Card>

            {/* ----------------------------- */}
            {/*Circular Progress*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Progress: Circular</div>
            <Grid container>
                <Grid item xs={12} sm={6} md={3} style={{ textAlign: 'center', padding: 16 }}>
                    <CircularProgress value={25} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ textAlign: 'center', padding: 16 }}>
                    <CircularProgress value={50} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ textAlign: 'center', padding: 16 }}>
                    <CircularProgress value={75} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ textAlign: 'center', padding: 16 }}>
                    <CircularProgress variant='indeterminate' />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/*Progress linear*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Progress: Linear</div>
            <div>
                <LinearProgress variant='determinate' value={25} />
                <div className='clx-spacer-24'></div>
                <LinearProgress variant='determinate' value={50} />
                <div className='clx-spacer-24'></div>
                <LinearProgress variant='determinate' value={75} />
                <div className='clx-spacer-24'></div>
                <LinearProgress variant='indeterminate' />
            </div>

            {/* ----------------------------- */}
            {/*Loader*/}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Loader: Inner / Full Screen</div>
            <Card style={{ padding: '16px', width: '100%', height: 200, position: 'relative' }}>
                <Loader isInner variant='indeterminate'></Loader>
            </Card>
        </div>
    )
}
