import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {
    CssBaseline,
} from '@mui/material'
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import 'fontsource-roboto'
import './options.css'
import {green, purple} from "@mui/material/colors";

type FormState = 'ready' | 'saving'
const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});
const App: React.FC<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru Template</div>
                <div>
                    This is option screen!!
                </div>
                <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru 2022</div>
            </CssBaseline>
        </ThemeProvider>
    )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App/>, root)
