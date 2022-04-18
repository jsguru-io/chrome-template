import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {CssBaseline, ThemeProvider, Typography} from "@mui/material";
import "./new_tab.css";
import pcTheme from "../styles/pctheme";

const App: React.FC<{}> = () => {
    useEffect(() => {
        chrome.runtime.sendMessage({"key": "value"}, (response) => {
                console.log('Response from background: ' + response);
            }
        );
        chrome.storage.sync.set({"key1": "Object2"}, () => {
            console.log('New object in SYNC storage');
        });

        chrome.storage.local.set({}, () => {
            console.log('New object in LOCAL storage');
        });
    });
    return (
        <ThemeProvider theme={pcTheme}>
            <CssBaseline>
                <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru Template</div>
                <div onClick={() => {
                    chrome.runtime.sendMessage({"key": "value"}, (response) => {
                            console.log('Response from background: ' + response);
                        }
                    );
                }}>
                    This is new tab screen!!
                </div>
                <div style={{backgroundColor: 'indigo', color: 'white', width: '100%'}}>JSGuru 2022</div>
            </CssBaseline>
        </ThemeProvider>
    );
};

const root = document.createElement("div");
root.setAttribute("style", "height:100vh; overflow-y:auto;");
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
