import React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import theme from '../../theme';

const UserMessage = ({props}) => {
    return (
        <Box display="flex" justifyContent="flex-end">
            <Paper
                sx={{backgroundColor: theme.palette.background.default, boxShadow: 'none',maxWidth: 350 }} >
                <Typography  sx={{backgroundColor: theme.palette.primary.main , color: theme.palette.common.white,
                    p:1,  borderRadius: 1, maxWidth: 350,

                }}>{props}
                </Typography>
            </Paper>
        </Box>
    );
};

export default UserMessage;
