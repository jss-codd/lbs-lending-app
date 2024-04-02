import React, { useEffect, useState } from 'react'
// import './LBSSnackBar.css'
import useErrorState from '../utils/errorContext'

const LBSSnackBar = ({ timeout }: any) => {
    const { errorState, errorDispatch } = useErrorState()
    const {
        toggleSnackbar, snackbarMessage, snackbarBtnText, snackbarBtnFunc
    } = errorState

    const [toggleSnack, setToggleSnack] = useState(false)

    let TIMER: any
    const handleTimeout = () => {
        TIMER = setTimeout(() => {
            errorDispatch({ type: 'closeSnackBar' })
            setToggleSnack(false)
        }, timeout)
    }

    useEffect(() => {
        setToggleSnack(toggleSnackbar)
        if (toggleSnackbar) handleTimeout()
        return () => clearTimeout(TIMER)
    }, [toggleSnackbar, TIMER])


    return (
        <>
            {toggleSnack &&
                <div className='snackbar_container'>
                    <p className='snackbar_message'>
                        {snackbarMessage}
                    </p>
                    <button
                        className='snackbar_button'
                        onClick={snackbarBtnFunc}
                    >
                        {snackbarBtnText}
                    </button>
                </div>
            }
        </>
    )
}

export default LBSSnackBar