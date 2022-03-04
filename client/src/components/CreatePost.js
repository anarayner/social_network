import React from 'react';
import {Button, Card, TextField} from '@mui/material';
import theme from '../theme';

const CreatePost = () => {
    return (
        <Card sx={{
            backgroundColor: '#fff',
            mt: 1,
            borderRadius: 2,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    borderRadius: 10,
                    width: 200,
                    backgroundColor: theme.palette.grey['300'],
                    ml: 2,
                    boxShadow: 'none'
            }}
                style={{ height: 40}}
            >
                hello
            </Button>

        </Card>
    );
};

export default CreatePost;
