import Autocomplete from 'apollo-react/components/Autocomplete';
import AutocompleteV2 from 'apollo-react/components/AutocompleteV2';
import Grid from 'apollo-react/components/Grid/Grid';
import RichTextEditor from 'apollo-react/components/RichTextEditor';
import { useEffect, useState } from 'react';

import styles from './Bottom.module.scss';

export default function Component() {
    // ***********************************************
    // states, inits
    // ***********************************************

    const countries = [
        { label: 'Afghanistan', value: 1 },
        { label: 'Aland Islands', value: 2 },
        { label: 'Albania', value: 3 },
        { label: 'Algeria', value: 4 },
        { label: 'American Samoa', value: 5 },
        { label: 'Andorra', value: 6 },
        { label: 'Angola', value: 7 },
        { label: 'Anguilla', value: 8 },
        { label: 'Antarctica', value: 9 },
        { label: 'Antigua and Barbuda', value: 10 },
        { label: 'Argentina', value: 11 },
        { label: 'Armenia', value: 12 },
        { label: 'Aruba', value: 13 },
        { label: 'Australia', value: 14 },
        { label: 'Austria', value: 15 },
        { label: 'Azerbaijan', value: 16 },
        { label: 'Bahamas', value: 17 },
        { label: 'Bahrain', value: 18 },
        { label: 'Bangladesh', value: 19 },
        { label: 'Barbados', value: 20 },
        { label: 'Belarus', value: 21 },
        { label: 'Belgium', value: 22 },
        { label: 'Belize', value: 23 },
        { label: 'Benin', value: 24 },
        { label: 'Bermuda', value: 25 },
        { label: 'Bhutan', value: 26 },
        { label: 'Bolivia, Plurinational State of', value: 27 },
        { label: 'Bonaire, Sint Eustatius and Saba', value: 28 },
        { label: 'Bosnia and Herzegovina', value: 29 },
        { label: 'Botswana', value: 30 },
        { label: 'Bouvet Island', value: 31 },
        { label: 'Brazil', value: 32 },
        { label: 'British Indian Ocean Territory', value: 33 },
        { label: 'Brunei Darussalam', value: 34 }
    ]
    const [inputValueV2, setInputValueV2] = useState(countries[3].label)
    const [valueV2, setValueV2] = useState(countries[3])
    const [valueV2B, setValueV2B] = useState([countries[1], countries[3]])

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
            {/* Autocompletes */}
            {/* ----------------------------- */}

            {/* ----------------------------- */}
            {/* Autocomplete V1 */}
            {/* ----------------------------- */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <div className='clx-headline-sub-title top-gutter'>Autocomplete V1 - Standard (UNIQUE))</div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                label='Single select V1'
                                helperText='This is a note about the field'
                                placeholder='Optional hint text…'
                                source={countries}
                                fullWidth
                                singleSelect
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                label='Multi select V1 blue'
                                helperText='This is a note about the field'
                                placeholder='Optional hint text…'
                                source={countries}
                                fullWidth
                                defaultValue={[5, 9, 14, 24]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                label='Multi select V1 white '
                                helperText='This is a note about the field'
                                placeholder='Optional hint text…'
                                source={countries}
                                fullWidth
                                defaultValue={[5, 9, 14, 24]}
                                chipColor='white'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* ----------------------------- */}
            {/* Autocomplete V2 */}
            {/* ----------------------------- */}

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <div className='clx-headline-sub-title top-gutter'>Autocomplete V2 - Standard</div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Single select V2'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                source={countries}
                                value={valueV2}
                                inputValue={inputValueV2}
                                onChange={(event, newValue) => {
                                    setValueV2(newValue)
                                }}
                                onInputChange={(event, newInputValue) => {
                                    setInputValueV2(newInputValue)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Multiselect V2 Blue'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                multiple
                                source={countries}
                                value={valueV2B}
                                onChange={(event, newValue) => {
                                    setValueV2B(newValue)
                                }}
                                limitChips={2}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Multiselect V2 White'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                multiple
                                source={countries}
                                value={valueV2B}
                                onChange={(event, newValue) => {
                                    setValueV2B(newValue)
                                }}
                                limitChips={2}
                                chipColor='white'
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* SMALL */}
                <Grid item xs={12} sm={12}>
                    <div className='clx-headline-sub-title top-gutter'>Autocomplete V2 - Small</div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Single select V2'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                source={countries}
                                value={valueV2}
                                inputValue={inputValueV2}
                                size='small'
                                onChange={(event, newValue) => {
                                    setValueV2(newValue)
                                }}
                                onInputChange={(event, newInputValue) => {
                                    setInputValueV2(newInputValue)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Multiselect V2 Blue'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                multiple
                                size='small'
                                source={countries}
                                value={valueV2B}
                                onChange={(event, newValue) => {
                                    setValueV2B(newValue)
                                }}
                                limitChips={2}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AutocompleteV2
                                label='Multiselect V2 White'
                                placeholder='Optional hint text…'
                                helperText='Optional help text'
                                fullWidth
                                multiple
                                size='small'
                                source={countries}
                                value={valueV2B}
                                onChange={(event, newValue) => {
                                    setValueV2B(newValue)
                                }}
                                limitChips={2}
                                chipColor='white'
                            />
                        </Grid>{' '}
                    </Grid>
                </Grid>
            </Grid>

            {/* ----------------------------- */}
            {/* Rich Text Editor */}
            {/* ----------------------------- */}
            <div className='clx-headline-sub-title top-gutter'>Rich Text Editor</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <RichTextEditor
                        label='Your Story'
                        placeholder='Start typing your story...'
                        helperText='You can type your story in desired format.'
                        variant='inline'
                    />
                </Grid>
            </Grid>
        </div>
    )
}
