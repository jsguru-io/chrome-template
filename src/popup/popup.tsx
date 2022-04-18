import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import './popup.css'


const App: React.FC<{}> = () => {
    return (
        <>
            <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru Template</div>
            <div>
                This is context popup Page
            </div>
            <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru 2022</div>
        </>
    )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App/>, root)
