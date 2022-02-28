import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main : '#5855D6'
        },
        secondary: {
            main : '#333269'
        },
        background: {
            default: '#E5E5E5'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    }
})

export default theme;
