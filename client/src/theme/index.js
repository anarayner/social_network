import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main : '#314773'
        },
        secondary: {
            main : '#072448'
        },
        background: {
            default: '#F0EFF5'
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
