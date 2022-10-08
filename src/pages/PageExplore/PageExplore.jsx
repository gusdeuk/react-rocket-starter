import Button from 'apollo-react/components/Button';
import Card from 'apollo-react/components/Card';
import Grid from 'apollo-react/components/Grid';
import Tag from 'apollo-react/components/Tag';
import Tooltip from 'apollo-react/components/Tooltip';
import Typography from 'apollo-react/components/Typography';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HeadLineDuoTitle from '../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import IconCube from '../../icons/IconCube';
import IconLayout from '../../icons/IconLayout';
import styles from './PageExplore.module.scss';
import { listGridData } from './PageExploreData';

export default function Page() {
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
    // child local components
    // ***********************************************
    const listItems = listGridData.map((data, key) => (
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={key.toString()}>
            <Card className={[styles['card-content'], 'card-type-' + data.category].join(' ')}>
                <div className={[styles['card-head'], 'card-' + data.color].join(' ')}>
                    <div className={styles['card-icon']}>
                        {data.category === 'layout' && <IconLayout className={styles['card-icon']}></IconLayout>}
                        {data.category === 'component' && <IconCube className={styles['card-icon']}></IconCube>}
                    </div>
                </div>

                <div className={styles['card-body']}>
                    <div className={styles['card-title']}>
                        <Tooltip variant='dark' title={data.title} placement='top'>
                            <Typography variant='body1' noWrap style={{ fontWeight: 600 }}>
                                {data.title}
                            </Typography>
                        </Tooltip>
                    </div>
                    <div className={styles['card-text']}>
                        <p> {data.text}</p>
                    </div>
                    <div className={styles['card-tag']}>
                        {data.category === 'layout' && (
                            <Tag className={'tag-' + data.color} label='Layout Example'></Tag>
                        )}
                        {data.category === 'component' && (
                            <Tag className={'tag-' + data.color} label='Component Set'></Tag>
                        )}
                    </div>
                </div>

                <div className={styles['card-footer']}>
                    <NavLink exact to={data.pathname} activeClassName={styles['selected']} className={styles['link']}>
                        <Button variant='secondary' size={'small'}>
                            Browse
                        </Button>
                    </NavLink>
                </div>
            </Card>
        </Grid>
    ))

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-explore'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                What Can I Do With This?
            </HeadLineDuoTitle>
            <div className={[styles['content']].join(' ')}>
                <Grid container spacing={3}>
                    {listItems}
                </Grid>
            </div>
        </div>
    )
}
