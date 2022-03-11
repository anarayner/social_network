import {Grid} from '@mui/material';
import TopBar from '../components/login/TopBar';
import LogoCard from '../components/login/Logo';
import AuthFormWrapper from '../components/login/AuthFormWrapper';
import LoginForm from '../components/login/LoginForm'
const LoginPage = () => {

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
                    sx={{display:{ xs: 'none', md: 'flex' }}}
                >
                    <LogoCard />
                </Grid>
            </Grid>
                 <AuthFormWrapper >
                     <LoginForm/>
                 </AuthFormWrapper>
            </Grid>

        </Grid>
    </>
    );
};

export default LoginPage;
