import ChevronDown from 'apollo-react-icons/ChevronDown'
import ChevronRight from 'apollo-react-icons/ChevronRight'
import EllipsisVerticalIcon from 'apollo-react-icons/EllipsisVertical'
import moment from 'moment'
import React, { useState } from 'react'

import { neutral7, neutral8 } from 'apollo-react/colors'
import Button from 'apollo-react/components/Button'
import DatePicker from 'apollo-react/components/DatePickerV2'
import IconButton from 'apollo-react/components/IconButton'
import IconMenuButton from 'apollo-react/components/IconMenuButton'
import MenuItem from 'apollo-react/components/MenuItem'
import Select from 'apollo-react/components/Select'
import Table, { compareDates, compareNumbers, compareStrings } from 'apollo-react/components/Table'
import TextField from 'apollo-react/components/TextField'
import Tooltip from 'apollo-react/components/Tooltip'
import Typography from 'apollo-react/components/Typography'
import initialRows from './rows.data'

const ExpandCell = ({ row: { employeeId, handleToggleRow, expanded, editMode } }) => {
    const iconButton = (
        <IconButton id='expand' size='small' onClick={() => handleToggleRow(employeeId)} disabled={editMode}>
            {expanded ? <ChevronDown /> : <ChevronRight />}
        </IconButton>
    )

    return (
        <div style={{ width: 12, marginTop: editMode ? 8 : 0, marginLeft: editMode ? -8 : 0 }}>
            {!editMode ? (
                <Tooltip title={expanded ? 'Collapse' : 'Expand'} disableFocusListener>
                    {iconButton}
                </Tooltip>
            ) : (
                iconButton
            )}
        </div>
    )
}

const ActionCell = ({ row }) => {
    const { employeeId, onRowEdit, onRowSave, editMode, onCancel, editedRow, onDelete } = row
    const menuItems = [
        {
            text: 'Edit',
            onClick: () => onRowEdit(employeeId)
        },
        {
            text: 'Delete',
            onClick: () => onDelete(employeeId)
        }
    ]

    return editMode ? (
        <div style={{ marginTop: 8, whiteSpace: 'nowrap' }}>
            <Button size='small' style={{ marginRight: 8 }} onClick={onCancel}>
                {'Cancel'}
            </Button>
            <Button
                size='small'
                variant='primary'
                onClick={onRowSave}
                disabled={
                    Object.values(editedRow).some((item) => !item) ||
                    (editMode && !Object.keys(editedRow).some((key) => editedRow[key] !== row[key]))
                }
            >
                {'Save'}
            </Button>
        </div>
    ) : (
        <Tooltip title='Actions' disableFocusListener>
            <IconMenuButton id='actions' menuItems={menuItems} size='small'>
                <EllipsisVerticalIcon />
            </IconMenuButton>
        </Tooltip>
    )
}

const Cell = ({ row, column }) => <div style={{ paddingTop: row.editMode ? 12 : 0 }}>{row[column.accessor]}</div>

const fieldStyles = {
    style: {
        marginTop: 3,
        marginLeft: -8
    }
}

const EditableCell = ({ row, column: { accessor: key } }) =>
    row.editMode ? (
        <TextField
            size='small'
            fullWidth
            value={row.editedRow[key]}
            onChange={(e) => row.editRow(key, e.target.value)}
            error={!row.editedRow[key]}
            helperText={!row.editedRow[key] && 'Required'}
            {...fieldStyles}
        />
    ) : (
        row[key]
    )

const EditableDatePicker = ({ row, accessor: key }) => {
    const [inputValue, setInputValue] = React.useState(null)

    return (
        <DatePicker
            size='small'
            fullWidth
            TextFieldProps={fieldStyles}
            value={moment(row.editedRow[key], 'MM/DD/YYYY')}
            inputValue={inputValue}
            onChange={(value, inputValue) => {
                row.editRow(key, value)
                setInputValue(inputValue)
            }}
            error={!row.editedRow[key]}
            helperText={!row.editedRow[key] ? 'Required' : ''}
        />
    )
}

const EditableDateCell = ({ row, column: { accessor: key } }) =>
    row.editMode ? <EditableDatePicker row={row} accessor={key} /> : moment(row[key], 'MM/DD/YYYY').format('M/D/YYYY')

const makeEditableSelectCell = (options) => ({ row, column: { accessor: key } }) =>
    row.editMode ? (
        <Select
            size='small'
            fullWidth
            canDeselect={false}
            value={row.editedRow[key]}
            onChange={(e) => row.editRow(key, e.target.value)}
            {...fieldStyles}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    ) : (
        row[key]
    )

const columns = [
    {
        accessor: 'expand',
        customCell: ExpandCell
    },
    {
        header: 'ID',
        accessor: 'employeeId',
        sortFunction: compareNumbers,
        customCell: Cell
    },
    {
        header: 'Name',
        accessor: 'name',
        sortFunction: compareStrings,
        customCell: EditableCell
    },
    {
        header: 'Department',
        accessor: 'dept',
        sortFunction: compareStrings,
        customCell: makeEditableSelectCell(['Design', 'Engineering', 'Human Resources', 'Marketing', 'QA'])
    },
    {
        header: 'Email',
        accessor: 'email',
        sortFunction: compareStrings,
        customCell: EditableCell
    },
    {
        header: 'Hire Date',
        accessor: 'hireDate',
        sortFunction: compareDates,
        customCell: EditableDateCell
    },
    {
        header: 'Status',
        accessor: 'employmentStatus',
        sortFunction: compareStrings,
        customCell: makeEditableSelectCell(['Contractor', 'Full-time'])
    },
    {
        accessor: 'action',
        customCell: ActionCell,
        align: 'right'
    }
]

const skillLevels = ['Beginner', 'Intermediate', 'Expert']

const EditableRow = ({ row }) => {
    const [inputValue, setInputValue] = React.useState(null)

    return (
        <div>
            <TextField
                label='Description'
                size='small'
                multiline
                rows={3}
                value={row.expanded ? row.editedRow.description : row.description}
                onChange={(e) => row.editRow('description', e.target.value)}
                error={row.expanded && !row.editedRow.description}
                helperText={row.expanded && !row.editedRow.description && 'Required'}
                style={{ width: 240 }}
            />
            <DatePicker
                label='Birthday'
                size='small'
                value={moment(row.expanded ? row.editedRow.birthday : row.birthday, 'MM/DD/YYYY')}
                inputValue={inputValue}
                onChange={(value, inputValue) => {
                    row.editRow('birthday', value)
                    setInputValue(inputValue)
                }}
                error={row.expanded && !row.editedRow.birthday}
                helperText={row.expanded && !row.editedRow.birthday ? 'Required' : ''}
                TextFieldProps={{ style: { marginLeft: 16, width: 240 } }}
            />
            <Select
                label='Skill Level'
                size='small'
                canDeselect={false}
                value={row.expanded ? row.editedRow.skillLevel : row.skillLevel}
                onChange={(e) => row.editRow('skillLevel', e.target.value)}
                style={{ marginLeft: 16, width: 240 }}
            >
                {skillLevels.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

const DetailRow = ({ row }) => {
    return (
        <div style={{ display: 'flex', padding: '8px 0px 8px 8px' }}>
            <div style={{ width: 280 }}>
                <Typography style={{ fontWeight: 500, color: neutral8 }}>{'Description'}</Typography>
                <Typography style={{ color: neutral7 }} variant='body2'>
                    {row.description}
                </Typography>
            </div>
            <div style={{ marginLeft: 32 }}>
                <Typography style={{ fontWeight: 500, color: neutral8 }}>{'Birthday'}</Typography>
                <Typography style={{ color: neutral7 }} variant='body2'>
                    {moment(row.birthday, 'MM/DD/YYYY').format('M/D/YYYY')}
                </Typography>
            </div>
            <div style={{ marginLeft: 32 }}>
                <Typography style={{ fontWeight: 500, color: neutral8 }}>{'Skill Level'}</Typography>
                <Typography style={{ color: neutral7 }} variant='body2'>
                    {row.skillLevel}
                </Typography>
            </div>
        </div>
    )
}

const ExpandableRow = ({ row, ...rest }) =>
    row.editMode ? <EditableRow row={row} {...rest} /> : <DetailRow row={row} {...rest} />

const newRows = initialRows.map((row, i) => ({
    ...row,
    description: `${row.name} is an amazing ${row.dept} person. They've been with us for ${Math.floor(
        moment().diff(moment(row.hireDate, 'MM/DD/YYYY'), 'years')
    )} years!`,
    birthday: moment(row.hireDate, 'MM/DD/YYYY').subtract(23, 'years').format('MM/DD/YYYY'),
    skillLevel: skillLevels[i % 3]
}))

const TableEditable = () => {
    const [rows, setRows] = useState(newRows)
    const [editedRow, setEditedRow] = useState({})
    const [expandedRows, setExpandedRows] = useState([])

    const handleToggleRow = (employeeId) => {
        setExpandedRows((expandedRows) =>
            expandedRows.includes(employeeId)
                ? expandedRows.filter((id) => id !== employeeId)
                : [...expandedRows, employeeId]
        )
    }

    const onRowEdit = (employeeId) => {
        setEditedRow(rows.find((row) => row.employeeId === employeeId))
    }

    const onRowSave = () => {
        setRows(rows.map((row) => (row.employeeId === editedRow.employeeId ? editedRow : row)))
        setEditedRow({})
    }

    const onCancel = () => {
        setEditedRow({})
    }

    const onDelete = (employeeId) => {
        setRows(rows.filter((row) => row.employeeId !== employeeId))
    }

    const editRow = (key, value) => {
        setEditedRow({ ...editedRow, [key]: value })
    }

    return (
        <Table
            title='Employees'
            subtitle='Manage your employees'
            columns={columns}
            rows={rows.map((row) => ({
                ...row,
                onRowEdit,
                onRowSave,
                onCancel,
                onDelete,
                editRow,
                handleToggleRow,
                editMode: editedRow.employeeId === row.employeeId,
                editedRow,
                key: row.employeeId,
                expanded: editedRow.employeeId === row.employeeId || expandedRows.includes(row.employeeId)
            }))}
            initialSortedColumn='name'
            initialSortOrder='asc'
            rowsPerPageOptions={[10, 15, 'All']}
            rowProps={{ hover: false }}
            tablePaginationProps={{
                labelDisplayedRows: ({ from, to, count }) =>
                    `${count === 1 ? 'Employee' : 'Employees'} ${from}-${to} of ${count}`,
                truncate: true
            }}
            ExpandableComponent={ExpandableRow}
        />
    )
}

export default TableEditable
