import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import { signInWithEmailAndPassword } from '../firebase/email-signin'
import { signInWithGmailPopup } from '../firebase/google-signin'
import { signInWithFacebookPopup } from '../firebase/facebook-signin'
import { useDispatch } from 'react-redux'
import { signInRequest, signInSuccess, singInFailure } from '../actions'
import { useFormValidation } from '../hooks/useFormValidation'
import loginValidate from '../validate/loginValidate'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',

  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: "5px"
  },
}));


  const mockedFirebaseLogin = () => {
    return new Promise((resolve, reject) => {
      let isLoggedIn = true;
      return isLoggedIn ? resolve("MICHAL ZARZYCKI") : reject("ERROR MESSAGE");
    })
  }
function Login({}) {
    const {handleSubmit, handleChange, errors, values} = useFormValidation(signInUser, loginValidate)
    const dispatch = useDispatch();
    const classes = useStyles();

    function signInUser() {
      //dispatch request
      dispatch(signInRequest())
      mockedFirebaseLogin().then(data => {
        dispatch(signInSuccess(data))
      }).catch(err => {
        dispatch(singInFailure(err))
      })
    }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              error={errors.mail}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors.pass}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={classes.submit}
              onClick={signInWithGmailPopup}
            >
              SIGN IN WITH GOOGLE
              </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<FacebookIcon />}
              className={classes.submit}
              onClick={signInWithFacebookPopup}
            >
              SIGN IN WITH FACEBOOK
              </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

  



export default Login;
