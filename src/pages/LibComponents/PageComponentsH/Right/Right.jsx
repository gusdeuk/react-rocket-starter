import FileIcon from 'apollo-react-icons/File';
import FileInput from 'apollo-react/components/FileInput';
import FileUpload from 'apollo-react/components/FileUpload';
import Grid from 'apollo-react/components/Grid/Grid';
import PasswordInput from 'apollo-react/components/PasswordInput';
import PhoneNumberInput from 'apollo-react/components/PhoneNumberInput';
import Search from 'apollo-react/components/Search';
import Slider from 'apollo-react/components/Slider';
import TextField from 'apollo-react/components/TextField';
import TimePicker from 'apollo-react/components/TimePicker';
import TreeItem from 'apollo-react/components/TreeItem';
import TreeView from 'apollo-react/components/TreeView';
import { useEffect, useState } from 'react';

import styles from './Right.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [sliderValue1, setSliderValue1] = useState(50)
    const [sliderValue2, setSliderValue2] = useState(250)
    const [sliderRangeValue, setSliderRangeValue] = useState([120, 150])
    const [selectedFiles, setSelectedFiles] = useState([])
    /// ***********************************************
    // functions and logic
    // ***********************************************
    const handleSliderChange1 = (event, value) => {
        setSliderValue1(value)
    }

    const handleSliderChange2 = (event, value) => {
        setSliderValue2(value)
    }
    const handleSliderRangeChange = (event, value) => {
        setSliderRangeValue(value)
    }

    const handleUpload = (newValue) => {
        setSelectedFiles((value) => [...value, ...newValue])
    }

    const handleDelete = (file) => {
        setSelectedFiles((value) => value.filter((item) => item.name !== file.name))
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
        <div className={styles['tab']}>
            {/* ----------------------------- */}
            {/* Text Fields */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Text Fields</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        style={{ width: '100%' }}
                        helperText='This is a note about the field'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        helperText='This is a note about the field'
                        defaultValue='Default Value'
                        error
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        helperText='This is a note about the field'
                        required
                        style={{ width: '100%' }}
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        style={{ width: '100%' }}
                        helperText='This is a note about the field'
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        helperText='This is a note about the field'
                        defaultValue='Default Value'
                        error
                        style={{ width: '100%' }}
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label='Label'
                        placeholder='Placeholder'
                        helperText='This is a note about the field'
                        required
                        style={{ width: '100%' }}
                        size='small'
                    ></TextField>
                </Grid>
            </Grid>
            {/* ----------------------------- */}
            {/* Search */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Search</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Search placeholder='Search' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Search placeholder='Search' fullWidth disabled />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Search placeholder='Search' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Search placeholder='Search' fullWidth disabled size='small' />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Time Picker */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Time Picker</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TimePicker label='Label' helperText='This is a note about the field' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TimePicker
                        defaultValue='12:00 PM'
                        label='Label'
                        helperText='This is a note about the field'
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TimePicker label='Label' helperText='This is a note about the field' error fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TimePicker label='Label' helperText='This is a note about the field' size='small' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TimePicker
                        defaultValue='12:00 PM'
                        label='Label'
                        helperText='This is a note about the field'
                        disabled
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TimePicker
                        label='Label'
                        helperText='This is a note about the field'
                        error
                        size='small'
                        fullWidth
                    />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Password Input */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Password Input</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <PasswordInput
                        placeholder='Enter Password'
                        helperText='Click icon to hide/show text'
                        defaultValue='Default Value'
                        label='Password'
                        fullWidth
                    />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Phone Input */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Phone Input</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <PhoneNumberInput
                        label='Label'
                        helperText='This is a note about the field'
                        defaultCountry='us'
                        onChange={(value, country) => console.log(value, country)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PhoneNumberInput
                        label='Label'
                        helperText='This is a note about the field'
                        defaultCountry='ch'
                        error
                        fullWidth
                        onChange={(value, country) => console.log(value, country)}
                    />
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Sliders */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title  top-gutter'>Sliders</div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Slider
                        label='Label'
                        helperText='Slide to adjust value'
                        value={parseInt(sliderValue2)}
                        onChange={handleSliderChange2}
                        min={10}
                        max={500}
                        valueLabelDisplay='on'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Slider
                        label='Label'
                        helperText='Slide to adjust value'
                        value={parseInt(sliderValue1)}
                        onChange={handleSliderChange1}
                        step={10}
                        marks
                        min={10}
                        max={100}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Slider
                        label='Label'
                        helperText='Slide to adjust value'
                        value={parseInt(sliderRangeValue)}
                        onChange={handleSliderRangeChange}
                        step={5}
                        min={100}
                        max={200}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    {/* ----------------------------- */}
                    {/* File Input */}
                    {/* ----------------------------- */}
                    <div className='clx-headline-sub-title top-gutter'>File Input</div>
                    <div style={{ maxWidth: 440, margin: '-20px  0 0 0' }}>
                        <FileInput
                            onChange={(file) => console.log(file.name)}
                            buttonText='Browse'
                            helperText='This is a note about the field'
                            placeholder='Placeholder'
                            label='Label'
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* ----------------------------- */}
                    {/* File Upload */}
                    {/* ----------------------------- */}
                    <div className='clx-headline-sub-title top-gutter'>File Upload</div>
                    <div style={{ maxWidth: 426 }}>
                        <FileUpload
                            label='Label'
                            required
                            value={selectedFiles}
                            onUpload={handleUpload}
                            onFileDelete={handleDelete}
                            fullWidth
                        />
                    </div>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Tree Item */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Tree Item</div>
            <div>
                <TreeView variant='folder' defaultExpanded={['1']} defaultSelected={['1']}>
                    <TreeItem nodeId='1' label='Acytolyn 2019 Conference'>
                        <TreeItem nodeId='2' label='Conference.pdf' />
                    </TreeItem>
                    <TreeItem nodeId='3' label='Canalyn 2019 Campaign Trail Folder'>
                        <TreeItem nodeId='4' label='Powerpoint'>
                            <TreeItem nodeId='5' label='Presentations'>
                                <TreeItem nodeId='6' label='Templates'>
                                    <TreeItem nodeId='7' label='template-1.ppt' icon={<FileIcon />} />
                                </TreeItem>
                                <TreeItem nodeId='8' label='Prep-1.ppt' />
                                <TreeItem nodeId='9' label='Prep-2.ppt' />
                            </TreeItem>
                        </TreeItem>
                        <TreeItem nodeId='10' label='Brochures'>
                            <TreeItem nodeId='11' label='Brochure1.pdf' />
                        </TreeItem>
                        <TreeItem nodeId='12' label='Canalyn-2019-poster.pdf' />
                    </TreeItem>
                    <TreeItem nodeId='13' label='Glidim 2018 Conference'>
                        <TreeItem nodeId='14' label='Conference.pdf' />
                    </TreeItem>
                    <TreeItem nodeId='15' label='Zytol 2018 Fair'>
                        <TreeItem nodeId='16' label='Fair-2018.pdf' />
                    </TreeItem>
                </TreeView>
            </div>
        </div>
    )
}
