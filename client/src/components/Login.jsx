import {
    Box, Button, Card,
    CssBaseline, Divider,
    Grid, Link,
    TextField,
    Typography
} from '@mui/material';



const Login = () => {
    return (
               <Card sx={{
                   maxWidth: { xs: 400, lg: 550 },
                   margin: { xs: 2.5, md: 10 },
                   '& > *': {
                       flexGrow: 1,
                       flexBasis: '50%'
                   },
                   backgroundColor: 'white',
                   borderRadius: 4,
                   }}>
                   <CssBaseline />
                   <Box
                       sx={{
                           margin: 6,
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center'}}>
                       <Typography
                           component="h1"
                           variant="h5"
                           sx={{mt: 3}} >
                           Sign in
                       </Typography>
                       <Box component="form"
                            noValidate
                            sx={{ mt: 2 }}>
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               label="Email Address"
                               name="email"
                               autoFocus
                           />
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               name="password"
                               label="Password"
                               type="password"
                               id="password"
                           />

                           <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                               sx={{ mt: 3, mb: 2}}
                               style={{ height: 50}}
                           >
                               Sign In
                           </Button>

                           <Grid item xs={12} sx={{ mt: 2, mb: 1}}
                           >
                               <Divider />
                           </Grid>
                           <Grid item xs={12} >
                               <Grid item container direction="column" alignItems="center" xs={12}>
                                   <Typography
                                       variant="subtitle1"
                                       sx={{ textDecoration: 'none' }}
                                   >
                                       Don&apos;t have an account?
                                   </Typography>
                               </Grid>
                           </Grid>
                       </Box>
                   </Box>
                  </Card>
    );
};

export default Login;

