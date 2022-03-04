import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/images/icons/Logo.svg'
import {Container} from '@mui/material';
import theme from '../../theme'

export default function LogoCard() {
    return (
        <Container maxWidth={'xs'}
                   sx={{ display: 'flex',
                       backgroundColor: theme.palette.background.default,
                       border: 'none'}}>
            <img src={Logo} alt="logo" width={150} height={150}  />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h3">
                        UNION
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Frame your social space
                    </Typography>
                </CardContent>
            </Box>
        </Container>
    );
}
