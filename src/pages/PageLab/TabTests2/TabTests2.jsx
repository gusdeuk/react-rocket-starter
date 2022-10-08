import Grid from 'apollo-react/components/Grid/Grid';
import { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import styles from './TabTests2.module.scss';

export default function TabTests() {
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
        <div className={[styles['tab-tests']].join(' ')}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={'clx-headline-title grey center'}>Clx-headline-title</div>

                    <div className={'clx-headline-title blue center'}>Clx-headline-title</div>

                    <div className={'clx-headline-title fuchsia center'}>Clx-headline-title</div>

                    <div className={'clx-headline-title purple center'}>Clx-headline-title</div>

                    <div className={'clx-headline-title orange center'}>Clx-headline-title</div>

                    <div className={'clx-headline-title green center'}>Clx-headline-title</div>
                    <div className={'clx-headline-title white center'}>Clx-headline-title</div>

                    <div className='clx-headline-sub-title'>Clx-headline-sub-title</div>

                    <div className={'clx-desc-box fuchsia'}>
                        Clx-desc-box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className={'clx-desc-box blue'}>
                        Clx-desc-box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className={'clx-desc-box white'}>
                        Clx-desc-box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <div className={'clx-headline-title grey center'}>Dual Doc Helper Titles</div>

                    <HeadLineDuoTitle color='fuchsia' align='center' hasDivider hasPadding>
                        Headline Duo Title
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='purple' align='center' hasDivider hasPadding>
                        Headline Duo Title
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='blue' align='center' hasDivider hasPadding>
                        Headline Duo Title
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='green' align='center' hasDivider hasPadding>
                        Headline Duo Title
                    </HeadLineDuoTitle>

                    <br />
                    <HeadLineDuoTitle color='purple' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>
                    <HeadLineDuoTitle color='orange' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>
                    <HeadLineDuoTitle color='green' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>
                    <HeadLineDuoTitle color='blue' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='grey' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='red' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>

                    <HeadLineDuoTitle color='fuchsia' align='center' small>
                        Clean. Smart. Simple.
                    </HeadLineDuoTitle>
                </Grid>
            </Grid>
        </div>
    )
}
