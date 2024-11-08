import { Paper, Grid, Typography, Link } from '@mui/material';
import { useContext, useEffect } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ActiveUserContext from '../../../contexts/ActiveUserContext';
import LoginForm from '../../molecules/LoginForm/LoginForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  };
  const navigate = useNavigate();
  const { login } = useContext(ActiveUserContext);

  useEffect(() => {
    login();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      login()
        .then(() => {
            navigate('/');
        })
        .catch(() => {
          alert('login Error');
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    enableReinitialize: true,
    isInitialValid: false,
  })

  // New Oauth2.0 login done on the Identity Server
  return (
    <></>
  )

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
        </Grid>

        <LoginForm formik={formik} />

        <Typography>
          <Link href='#'>Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          Do you have an account ? <Link href='#'>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
  
export default Login;
