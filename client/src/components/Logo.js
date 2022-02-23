import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Logo from '../assets/images/icons/Logo.svg'
import {Container} from '@mui/material';


export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <Container maxWidth={'xs'} sx={{ display: 'flex', backgroundColor: '#E5E5E5', border: 'none'}}>
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
