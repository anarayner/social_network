import {Grid} from '@mui/material';
import LoginForm from '../components/LoginForm';
import TopBar from '../components/TopBar';
import LogoCard from '../components/Logo';
import AuthFormWrapper from '../components/AuthFormWrapper';
import {observer} from 'mobx-react-lite';

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
                >
                    <LogoCard/>
                </Grid>
            </Grid>
                 <AuthFormWrapper>
                     <LoginForm/>
                 </AuthFormWrapper>
            </Grid>

        </Grid>
    </>
    );
};

export default observer(LoginPage);
