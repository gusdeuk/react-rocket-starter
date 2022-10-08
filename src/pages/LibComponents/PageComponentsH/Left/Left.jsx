import ConversationChatIcon from 'apollo-react-icons/ConversationChat';
import QuestionIcon from 'apollo-react-icons/Question';
import TextBoldIcon from 'apollo-react-icons/TextBold';
import TextItalicsIcon from 'apollo-react-icons/TextItalics';
import TextUnderlineIcon from 'apollo-react-icons/TextUnderline';
import UserIcon from 'apollo-react-icons/User';
import Checkbox from 'apollo-react/components/Checkbox';
import Chip from 'apollo-react/components/Chip';
import ChipGroup from 'apollo-react/components/ChipGroup';
import DatePicker from 'apollo-react/components/DatePickerV2';
import Grid from 'apollo-react/components/Grid/Grid';
import MenuItem from 'apollo-react/components/MenuItem';
import Radio from 'apollo-react/components/Radio';
import RadioGroup from 'apollo-react/components/RadioGroup';
import SegmentedControl from 'apollo-react/components/SegmentedControl';
import SegmentedControlGroup from 'apollo-react/components/SegmentedControlGroup';
import Select from 'apollo-react/components/Select';
import Switch from 'apollo-react/components/Switch';
import Tooltip from 'apollo-react/components/Tooltip';
import { useEffect, useState } from 'react';

import styles from './Left.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [radioValue, setRadioValue] = useState('1')
    const [segmentedValue, setSegmentedValue] = useState('')

    const [switchValue, setSwitchValue] = useState(true)
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
        <div className={styles['tab']}>
            {/* ----------------------------- */}
            {/* Checkbox */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Checkbox</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Standard' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Std Checked' checked />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Std Indeterminate' indeterminate />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Standard Error' error />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Std checked disabled' checked disabled />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Std disabled' disabled />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small' size='small' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small Checked' checked size='small' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small Indeterminate' indeterminate size='small' />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small Error' error size='small' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small checked disabled' checked disabled size='small' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Checkbox label='Small disabled' disabled size='small' />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Chip */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Chip / Chip Group</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Chip label='Label' onDelete={() => {}} />
                    <Chip label='Label' onDelete={() => {}} />
                    <Chip label='Label' onDelete={() => {}} />
                    <Chip label='Label' disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Chip color='white' label='Label' onDelete={() => {}} />
                    <Chip color='white' label='Label' onDelete={() => {}} />
                    <Chip color='white' label='Label' onDelete={() => {}} />
                    <Chip color='white' label='Label' disabled />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Chip label='Label' onDelete={() => {}} size='small' />
                    <Chip label='Label' onDelete={() => {}} size='small' />
                    <Chip label='Label' onDelete={() => {}} size='small' />
                    <Chip label='Label' disabled size='small' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Chip color='white' label='Label' onDelete={() => {}} size='small' />
                    <Chip color='white' label='Label' onDelete={() => {}} size='small' />
                    <Chip color='white' label='Label' onDelete={() => {}} size='small' />
                    <Chip color='white' label='Label' disabled />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <ChipGroup onChange={(e, value) => console.log(`Selected chip with value "${value}"`)}>
                        <Chip label='Choice 1' value='one' />
                        <Chip label='Choice 2' value='two' />
                        <Chip label='Choice 3' value='three' />
                        <Chip label='Choice 4' value='four' disabled />
                    </ChipGroup>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <ChipGroup value='one' disabled>
                        <Chip label='Choice 1' value='one' />
                        <Chip label='Choice 2' value='two' />
                        <Chip label='Choice 3' value='three' />
                        <Chip label='Choice 4' value='four' />
                    </ChipGroup>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Date Pickers */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Date Range Picker</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <DatePicker
                        placeholder='mm/dd/yyyy'
                        label='Signup Date'
                        helperText='Please select date of signing up'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DatePicker defaultValue={new Date()} label='Date' helperText='Disabled' disabled fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DatePicker
                        label='Date'
                        helperText='Please correct the error'
                        error
                        placeholder='mm/dd/yyyy'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <DatePicker
                        placeholder='mm/dd/yyyy'
                        label='Signup Date'
                        helperText='Please select date of signing up'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DatePicker
                        defaultValue={new Date()}
                        label='Date'
                        helperText='Disabled'
                        disabled
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DatePicker
                        label='Date'
                        helperText='Please correct the error'
                        error
                        placeholder='mm/dd/yyyy'
                        size='small'
                        fullWidth
                    />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Radio Buttons */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Radio Buttons</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={radioValue}
                        onChange={(e) => {
                            setRadioValue(e.target.value)
                        }}
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={radioValue}
                        onChange={(e) => {
                            //setRadioValue(e.target.value)
                        }}
                        disabled
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={null}
                        onChange={(e) => {
                            //setRadioValue(e.target.value)
                        }}
                        error
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: 16 }}>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={radioValue}
                        onChange={(e) => {
                            setRadioValue(e.target.value)
                        }}
                        size='small'
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={radioValue}
                        onChange={(e) => {
                            //setRadioValue(e.target.value)
                        }}
                        disabled
                        size='small'
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <RadioGroup
                        label='Label'
                        helperText='Optional help text'
                        aria-label='label'
                        name='label'
                        value={null}
                        onChange={(e) => {
                            //setRadioValue(e.target.value)
                        }}
                        error
                        size='small'
                    >
                        <Radio value='1' label='Option 1' />
                        <Radio value='2' label='Option 2' />
                        <Radio value='3' label='Option 3' />
                    </RadioGroup>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Segmented Control */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Segmented Control</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SegmentedControlGroup
                        value={segmentedValue}
                        exclusive
                        onChange={(event, value) => setSegmentedValue(value)}
                    >
                        <SegmentedControl value='one'>{'Item 1'}</SegmentedControl>
                        <SegmentedControl value='two'>{'Item 2'}</SegmentedControl>
                        <SegmentedControl value='three'>{'Item 3'}</SegmentedControl>
                        <SegmentedControl value='four'>{'Item4'}</SegmentedControl>
                    </SegmentedControlGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SegmentedControlGroup
                        value={segmentedValue}
                        exclusive
                        onChange={(event, value) => setSegmentedValue(value)}
                    >
                        <Tooltip title='Chat' placement='top'>
                            <SegmentedControl value='chat'>
                                <ConversationChatIcon />
                            </SegmentedControl>
                        </Tooltip>
                        <Tooltip title='Help' placement='top'>
                            <SegmentedControl value='help'>
                                <QuestionIcon />
                            </SegmentedControl>
                        </Tooltip>
                        <SegmentedControl value='person' disabled>
                            <UserIcon />
                        </SegmentedControl>
                    </SegmentedControlGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SegmentedControlGroup
                        disabled
                        value={segmentedValue}
                        onChange={(event, value) => setSegmentedValue(value)}
                    >
                        <SegmentedControl value='bold'>
                            <TextBoldIcon />
                        </SegmentedControl>
                        <SegmentedControl value='italic'>
                            <TextItalicsIcon />
                        </SegmentedControl>
                        <SegmentedControl value='underline'>
                            <TextUnderlineIcon />
                        </SegmentedControl>
                    </SegmentedControlGroup>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Select */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Select Single / Multiple</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='You can select one option'
                        // value={'1'}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='You can select one option'
                        // value={'1'}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        error
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='You can select one option'
                        // value={'1'}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        disabled
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='Select multiple options'
                        value={[]}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        multiple
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='You can select one option'
                        // value={'1'}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        size='small'
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='You can select one option'
                        //value={{}}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        error
                        size='small'
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='Select multiple options'
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        disabled
                        size='small'
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Select
                        label='Label'
                        helperText='Select multiple options'
                        value={[]}
                        //onChange={this.handleChange}
                        placeholder='Select item...'
                        fullWidth
                        multiple
                        size='small'
                    >
                        <MenuItem value='1'>{'Item 1'}</MenuItem>
                        <MenuItem value='2'>{'Item 2'}</MenuItem>
                        <MenuItem value='3'>{'Item 3'}</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Switch */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Switch</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Switch label='Label' checked={switchValue} onChange={(e, checked) => setSwitchValue(checked)} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch label='Label' checked={false} onChange={(e, checked) => setSwitchValue(checked)} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch label='Label' checked={true} disabled onChange={(e, checked) => setSwitchValue(checked)} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch label='Label' checked={false} disabled onChange={(e, checked) => setSwitchValue(checked)} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Switch
                        label='Label'
                        checked={switchValue}
                        onChange={(e, checked) => setSwitchValue(checked)}
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch
                        label='Label'
                        checked={false}
                        onChange={(e, checked) => setSwitchValue(checked)}
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch
                        label='Label'
                        checked={true}
                        disabled
                        onChange={(e, checked) => setSwitchValue(checked)}
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Switch
                        label='Label'
                        checked={false}
                        disabled
                        onChange={(e, checked) => setSwitchValue(checked)}
                        size='small'
                    />
                </Grid>
            </Grid>
        </div>
    )
}
