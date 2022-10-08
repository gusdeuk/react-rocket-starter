import Panel from 'apollo-react/components/Panel';
import PanelGroup from 'apollo-react/components/PanelGroup';

import styles from './Panel.module.scss';

export default function PanelBlock() {
    return (
        <div>
            <div className='clx-headline-sub-title top-gutter'>Panel: 2 panels - hidden button in the last one</div>
            <div className={styles['panel']}>
                <Panel open={true} width={100}>
                    <div style={{ padding: '24px' }}>TEST 100px</div>
                </Panel>
                <Panel width={'100%'} hideButton>
                    <div>
                        <div style={{ padding: '24px' }}>TEST 100%</div>
                    </div>
                </Panel>
            </div>

            <div className='clx-headline-sub-title top-gutter'>
                Panel: 4 panels - collapsed by default, resizeable on
            </div>
            <div>
                <PanelGroup className={styles['panel']}>
                    <Panel open={true} resizable maxWidth={'25%'}>
                        <div style={{ padding: '24px' }}>25%</div>
                    </Panel>
                    <Panel open={true} resizable maxWidth={'25%'}>
                        <div style={{ padding: '24px' }}>25%</div>
                    </Panel>
                    <Panel open={true} resizable maxWidth={'25%'}>
                        <div style={{ padding: '24px' }}>25%</div>
                    </Panel>
                    <Panel open={true} resizable maxWidth={'25%'}>
                        <div style={{ padding: '24px' }}>25%</div>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    )
}
