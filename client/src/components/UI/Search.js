import React from 'react';
import {alpha, InputBase} from '@mui/material';
import {styled} from '@mui/system';
import theme from '../../theme';


const SearchComponent = styled('div',{})({
    display: 'flex',
    textAlign: 'center',
    color: 'white',
    height: 40,
    borderRadius: 10,
    marginLeft: theme.spacing(3),
    backgroundColor: alpha('#3e4457', 0.15),
    '&:hover': {
        backgroundColor: alpha('#3e4457', 0.25),
    },

});

const SearchIconWrapper = styled('div', {})({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Search = () => {
    return (
        <SearchComponent>
            <SearchIconWrapper>
                <Search sx={{color: '#2a2727'}}/>
            </SearchIconWrapper>
            <InputBase
                placeholder="Search…"
                sx={{color: '#2a2727'}}
            />
        </SearchComponent>
    );
};

export default Search;
