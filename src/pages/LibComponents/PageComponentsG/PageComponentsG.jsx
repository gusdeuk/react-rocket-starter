import Card from 'apollo-react/components/Card';
import Divider from 'apollo-react/components/Divider';
import Grid from 'apollo-react/components/Grid/Grid';
import Table from 'apollo-react/components/Table';
import React, { useEffect } from 'react';

import HeadLineDuoTitle from '../../../components/HeadLineDuoTitle/HeadLineDuoTitle';
import TxtDisclaimer from '../Common/TxtDisclaimer';
import styles from './PageComponentsG.module.scss';
import columns, { moreColumns, moreColumnsWithFrozen } from './pieces/columns.data';
import rows, { rowsWithExtra } from './pieces/rows.data';
import TableEditable from './TableExpandEdit/TableExpandEdit';

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
    // render main component
    // ***********************************************
    return (
        <div
            className={[
                styles['page-g'],
                styles['page-wrapper'],
                'page-content-plus-nav animate__animated animate__fadeIn'
            ].join(' ')}
        >
            <HeadLineDuoTitle color='blue' align='center' hasDivider hasMargin hasPadding hasBgd>
                G - Data Tables
            </HeadLineDuoTitle>

            <div className={[styles['content']].join(' ')}>
                {/* ----------------------------- */}
                {/* Content */}
                {/* ----------------------------- */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className={'clx-headline-title grey center'}>Fluid Table Variations (Desktop Targets)</div>
                    </Grid>
                </Grid>

                {/* ----------------------------- */}
                {/* Table Scroll */}
                {/* ----------------------------- */}
                <div className='clx-headline-sub-title'>
                    Scrollable content with maxHeight, built in filters, paging , action icons, tiny scroll CSS
                </div>
                <div className={'custom-scroll-wrapper tiny-thumb'}>
                    <Table
                        title='Employees'
                        subtitle='Manage your employees'
                        columns={columns}
                        rows={rows}
                        initialSortedColumn='name'
                        initialSortOrder='asc'
                        rowsPerPageOptions={[5, 10, 15, 'All']}
                        tablePaginationProps={{
                            labelDisplayedRows: ({ from, to, count }) =>
                                `${count === 1 ? 'Employee' : 'Employees'} ${from}-${to} of ${count}`,
                            truncate: true
                        }}
                        defaultRowsPerPage={15}
                        hasScroll
                        maxHeight={400}
                    />
                </div>

                {/* ----------------------------- */}
                {/* Table Frozen + sort */}
                {/* ----------------------------- */}
                <div className='clx-headline-sub-title top-gutter'>Table with frozen columns + sortable columns</div>

                <Table
                    key='frozenExample1'
                    title='Employees'
                    subtitle='Manage your employees'
                    columns={moreColumnsWithFrozen}
                    rows={rowsWithExtra}
                    initialSortedColumn='name'
                    rowsPerPageOptions={[5, 10, 15, 'All']}
                    tablePaginationProps={{
                        labelDisplayedRows: ({ from, to, count }) =>
                            `${count === 1 ? 'Employee ' : 'Employees'} ${from}-${to} of ${count}`,
                        truncate: true
                    }}
                    columnSettings={{ enabled: true, frozenColumnsEnabled: true }}
                />

                {/* ----------------------------- */}
                {/* Table Sort Cols */}
                {/* ----------------------------- */}

                <div className='clx-headline-sub-title top-gutter'>Table with sortable columns</div>

                <Table
                    title='Employees'
                    subtitle='Manage your employees'
                    columns={moreColumns}
                    rows={rowsWithExtra}
                    initialSortedColumn='name'
                    rowsPerPageOptions={[5, 10, 15, 'All']}
                    tablePaginationProps={{
                        labelDisplayedRows: ({ from, to, count }) =>
                            `${count === 1 ? 'Employee ' : 'Employees'} ${from}-${to} of ${count}`,
                        truncate: true
                    }}
                    columnSettings={{ enabled: true }}
                />

                {/* ----------------------------- */}
                {/* Table Simple */}
                {/* ----------------------------- */}

                <div className='clx-headline-sub-title top-gutter'>
                    Basic table nested in a card, column sorting, no paging, no header
                </div>
                <Card>
                    <Table columns={moreColumns} rows={rowsWithExtra} hidePagination />
                </Card>

                {/* ----------------------------- */}
                {/* Table Editable */}
                {/* ----------------------------- */}
                <div className='clx-headline-sub-title top-gutter'>
                    Editable Table with expandable rows to place extra fields
                </div>
                <TableEditable></TableEditable>

                {/* ----------------------------- */}
                {/* Disclaimer */}
                {/* ----------------------------- */}
                <div className='clx-spacer-24'></div>
                <TxtDisclaimer></TxtDisclaimer>
            </div>
        </div>
    )
}
