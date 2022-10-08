import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandIcon from 'apollo-react-icons/Expand';
import ImageIcon from 'apollo-react-icons/Image';
import InfoIcon from 'apollo-react-icons/Info';
import PencilIcon from 'apollo-react-icons/Pencil';
import StatusCheckIcon from 'apollo-react-icons/StatusCheck';
import StatusExclamationIcon from 'apollo-react-icons/StatusExclamation';
import StatusNegativeIcon from 'apollo-react-icons/StatusNegative';
import Button from 'apollo-react/components/Button';
import Modal from 'apollo-react/components/Modal';
import RichTextEditor from 'apollo-react/components/RichTextEditor';
import React, { useEffect, useState } from 'react';

import styles from './Modals.module.scss';

export default function BlockModals() {
    const stylesInline = {
        button: {
            marginRight: 8,
            marginTop: 8
        }
    }

    const useStyles = makeStyles(stylesInline)

    const classes = useStyles()

    const [state, setState] = React.useState({
        neutral: false,
        error: false,
        success: false,
        warning: false,
        custom: false,
        image: false,
        scroll: false
    })

    const handleOpen = (variant) => {
        setState({ ...state, [variant]: true })
    }

    const handleClose = (variant) => {
        setState({ ...state, [variant]: false })
    }

    const handleSave = () => {
        console.log('Your progress has been saved.')
        handleClose('error')
    }

    return (
        <div className={[styles['modals-base']].join(' ')}>
            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('neutral')}
                icon={InfoIcon}
            >
                {'Open Default'}
            </Button>
            <Modal
                open={state.neutral}
                onClose={() => handleClose('neutral')}
                title='Header'
                subtitle='Optional Subtitle'
                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                buttonProps={[{}, { label: 'Next' }]}
                id='neutral'
            />

            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('success')}
                icon={StatusCheckIcon}
            >
                {'Open Success'}
            </Button>
            <Modal
                open={state.success}
                variant='success'
                onClose={() => handleClose('success')}
                title='Header'
                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                id='success'
            />

            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('warning')}
                icon={StatusExclamationIcon}
            >
                {'Open Warning'}
            </Button>
            <Modal
                open={state.warning}
                variant='warning'
                onClose={() => handleClose('warning')}
                title='Header'
                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                buttonProps={[{ label: 'Go Back' }, { label: 'Next' }]}
                id='warning'
            />

            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('error')}
                icon={StatusNegativeIcon}
            >
                {'Open Error'}
            </Button>
            <Modal
                open={state.error}
                variant='error'
                onClose={() => handleClose('error')}
                title='Header'
                message='Incididunt ut labore et dolore magna aliqua.'
                buttonProps={[{ label: 'Go Back' }, { label: 'Save', onClick: handleSave }]}
                id='error'
            />

            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('custom')}
                icon={PencilIcon}
            >
                {'Open Custom'}
            </Button>
            <Modal
                open={state.custom}
                variant='default'
                onClose={() => handleClose('custom')}
                title='Header'
                buttonProps={[{}, { label: 'Save', onClick: handleSave }]}
                id='custom'
            >
                <RichTextEditor
                    label='Your Story'
                    placeholder='Start typing your story...'
                    helperText='You can type your story in desired format.'
                />
            </Modal>

            <Button className={classes.button} variant='secondary' onClick={() => handleOpen('image')} icon={ImageIcon}>
                {'Open Image'}
            </Button>
            <Modal
                open={state.image}
                image='https://i.picsum.photos/id/902/600/320.jpg?hmac=D48HZvuphAyOQdIOusy8RRoh8WbdAgQaoBuvgW5kh3k'
                alt='mountain with dramatic sky'
                title='Header'
                subtitle='Optional Subtitle'
                message={`Incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna
          aliqua incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna
          aliquadolore magna aliqua incididunt ut labore et dolore magna aliqua.`}
                onClose={() => handleClose('image')}
                id='image'
            />

            <Button
                className={classes.button}
                variant='secondary'
                onClick={() => handleOpen('scroll')}
                icon={<ExpandIcon style={{ transform: 'rotate(135deg)' }} />}
            >
                {'Open Scroll w/Limits'}
            </Button>

            <Modal
                className={[styles['test-scrollable-modal'], 'custom-scroll-wrapper tiny-thumb'].join(' ')}
                scroll='paper'
                open={state.scroll}
                onClose={() => handleClose('scroll')}
                title='Modal with CSS limits: max-width: 900px, height: 50vh, tiny scroll for content'
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. END"
                id='scroll'
            />
        </div>
    )
}
