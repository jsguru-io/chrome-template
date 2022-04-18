import {createTheme} from "@mui/material/styles";
import {green, grey, purple} from "@mui/material/colors";
import "@fontsource/poppins";


const pctheme = createTheme({
    typography: {

        fontFamily: 'Poppins',
        button: {
            textTransform: 'none'
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#06AAA1',
            light: green["300"],
            dark: green["500"]
        },
        secondary: {
            main: grey["900"]
        },
        warning: {
            main: grey[800]
        },
        info: {
            main: grey[50]
        }
    },
},);

export default pctheme;
