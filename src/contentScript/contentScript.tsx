import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {Card} from '@mui/material'
import {getStoredOptions, LocalStorageOptions} from '../utils/storage'
import {Messages} from '../utils/messages'
import './contentScript.css'

//This script call on every request from all pages
const App: React.FC<{}> = () => {
    const [options, setOptions] = useState<LocalStorageOptions | null>(null)
    const [isActive, setIsActive] = useState<boolean>(false)


    useEffect(() => {
        getStoredOptions().then((options) => {
            setOptions(options)
            setIsActive(options.hasAutoOverlay)
        })
    }, [])

    const handleMessages = (msg: Messages) => {
        if (msg === Messages.TOGGLE_OVERLAY) {
            setIsActive(!isActive)
        }
    }

    useEffect(() => {
        chrome.runtime.onMessage.addListener(handleMessages)
        return () => {
            // clean up event listener, bug fix from: https://www.udemy.com/course/chrome-extension/learn/#questions/14694484/
            chrome.runtime.onMessage.removeListener(handleMessages)
        }
    }, [isActive])

    if (!options) {
        return null
    }

    return (
        <>
            {isActive && (
                <Card className="overlayCard">
                   
                </Card>
            )}
        </>
    )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App/>, root)
