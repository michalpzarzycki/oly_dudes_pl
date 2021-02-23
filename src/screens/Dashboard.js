import Bar from '../components/charts/Bar'
import Line from '../components/charts/Line'
import GoalGraph from '../components/GoalGraph'
import InfoBar from '../components/InfoBar'
import styles from './Dashboard.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    borderColor: "black"
  },
}));

function Dashboard() {
  const classes = useStyles();

    return (
      <div className={styles.mainDiv}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <InfoBar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <GoalGraph goalTitle="Snatch" achieved="85"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <GoalGraph  goalTitle="Clean&Jerk" achieved="50"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <GoalGraph  goalTitle="Back squat" achieved="35"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <GoalGraph  goalTitle="Front squat" achieved="35"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Line />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Bar />
          </Paper>
        </Grid>
       
      </Grid>
    </div>
    )
}

export default Dashboard
