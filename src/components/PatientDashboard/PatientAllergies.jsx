import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PatientAlert(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
            <Card className={classes.cardroot} style={props.height}>
                    <CardContent>
                        <Typography className={classes.title} color="primary" gutterBottom>
                            Allergies
                        </Typography>
                            <Grid container spacing={12}>
                                <Grid item xs='12'>
                                    <Typography className={classes.pos} color="textSecondary" >
                                            
                                            <Button variant="outlined" disabled>
                                                No Allergies
                                            </Button> 
                                    </Typography>
                                </Grid>
                                
                            </Grid>                               
                    </CardContent>                      
            </Card>
    </div>
  );
}