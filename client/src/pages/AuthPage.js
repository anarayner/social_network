import {Grid} from '@mui/material';
import LoginForm from '../components/LoginForm';
import TopBar from '../components/TopBar';
import LogoCard from '../components/Logo';
import RegistrationForm from '../components/RegistrationForm';

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
                    <LogoCard/>
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
                        <RegistrationForm/>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>

        </Grid>
    </>
    );
};

export default AuthPage;
