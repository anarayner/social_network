import React from 'react';
import {Button, Card} from '@mui/material';
import theme from '../theme';

const CreatePost = () => {
    return (
        <Card sx={{
            backgroundColor: '#fff',
            ml: 3, mt: 1, mr:3, pl: 2,
            borderRadius: 2,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    borderRadius: 10,
                    width: '80%',
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
