import {Box, Grid} from '@mui/material';
import Login from '../components/Login';
import TopBar from '../components/TopBar';
import Logo from '../../src/assets/images/icons/Logo.svg'
import MediaControlCard from '../components/Logo';

const AuthPage = () => {
    return (
    <>
        <Grid container direction='column' justifyContent='center' >
         <TopBar />
            <Grid container direction={{xs: 'column', md: 'row'} }
            >
            <Grid item xs={6}  display='flex'>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop={4}
                >

                    <MediaControlCard/>

                </Grid>
            </Grid>
            <Grid item xs={6}  display='flex' >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '90vh' }}

                >
                    <Grid item xs={8} md={3}>
                        <Login/>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>

        </Grid>
    </>
    );
};

export default AuthPage;
