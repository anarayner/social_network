import React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import theme from '../../theme';

const UserMessage = ({props}) => {
    return (
        <Box display="flex" justifyContent="flex-start">
            <Paper
                sx={{backgroundColor: theme.palette.background.default, boxShadow: 'none', mb:2}} >
                <Typography  sx={{backgroundColor: theme.palette.common.white,
                    p:1, maxWidth: 300, borderRadius: 1
                }}>{props}
                </Typography>
            </Paper>
        </Box>
    );
};

export default UserMessage;
