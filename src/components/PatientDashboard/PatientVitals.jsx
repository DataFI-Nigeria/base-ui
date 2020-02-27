import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      

    },
    chips: {
        fontSize: 11,
        marginRight: 30
      },
    
    
  },
}));
const chips = {
    marginLeft: 0
};

export default function PatientVitals(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <Card className={classes.cardroot} style={props.height} >
                    <CardContent>
                        <Typography className={classes.title} color="primary" gutterBottom>
                        Recent Vital Signs
                        </Typography>
                            <Grid container spacing={12}>
                                <Grid item xs='6'>
                                    <Typography  color="textPrimary" gutterBottom>
                                        Pulse : <Chip variant="outlined" size="small"  label="56pm" style={chips}/></Typography>
                                    
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography  color="textPrimary" gutterBottom> 
                                            Weight: <Chip variant="outlined" size="small" style={chips} label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography color="textPrimary" gutterBottom>
                                            RR : <Chip variant="outlined" size="small" style={chips} label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography color="textPrimary" gutterBottom>
                                            Height: <Chip variant="outlined" size="small" style={chips} label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography  color="textPrimary" gutterBottom>
                                            Tempreature: <Chip variant="outlined" size="small" style={chips}  label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography color="textPrimary" gutterBottom>
                                            BMI: <Chip variant="outlined" size="small" style={chips} label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography  color="textPrimary" gutterBottom>
                                            Blood Presure : <Chip variant="outlined" size="small" style={chips}  label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='6'>
                                    <Typography  color="textPrimary gutterBottom">
                                            BMI Sstatus: <Chip variant="outlined" size="small" style={chips}  label="56pm" />
                                    </Typography>
                                </Grid>
                                <Grid item xs='23'>
                                    <Typography className={classes.chips} color="textPrimary" gutterBottom>
                                            Paulse : <Chip variant="outlined" size="small"   style={chips} label="56pm" />
                                    </Typography>
                                </Grid>
                                
                            </Grid>                               
                    </CardContent>                      
            </Card>                     
    </div>
  );
}