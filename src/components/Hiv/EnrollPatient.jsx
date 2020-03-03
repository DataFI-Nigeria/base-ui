import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardContent,   
}
from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Title from 'components/Title/CardTitle';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import Page from 'components/Page';


const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  }, 
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardBottom: {
    marginBottom: 20
  },
  Select: {
    height:45,
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
  },
  
  
}));
const useStyles2 = makeStyles(theme => ({
    inforoot: {
      width: '100%',
      marging: theme.spacing(5),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 500,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      fontWeight: 500,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));


export default function EnrollPatient() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Page title="Enroll Patient" >
        
    <div className={classes2.inforoot} >
  
            <ExpansionPanel defaultExpanded style={{ backgroundColor: '#F5F5F5'}}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                   
                <div className={classes2.column}>
                    <Typography className={classes.heading}>
                        Name: Alex Willaims Adeoye
                        <br/>
                        Gender: Female
                    </Typography>
                </div>
                <div className={classes2.column}>
                    <Typography className={classes2.heading}>
                        DOB: June, 14 1990 (20 years)
                        <br/>
                        Phone Number : +234567890
                    </Typography>
                </div>
                <div className={classes2.column}>
                    <Typography className={classes2.heading}>
                        Email: Alext@gmail.com
                        
                    </Typography>
                </div>
                </ExpansionPanelSummary>
               
            </ExpansionPanel>
            </div>
            <br/>
           
       <form className={classes.form} Validate>

       <Card className={classes.cardBottom}>  
            <CardContent>
                <Title >Enrollment Detail</Title>   
               
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            autoComplete="fnaidme"
                            name="id"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="Unique ID"
                            autoFocus
                            size="small"
                            helperText="Unique ID"
                        />
                        </Grid>
                        
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={12} sm={4}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date Of Registration/transfer In"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={{marginTop: -10 }}
                                />      
                        </Grid>
                        </MuiPickersUtilsProvider>
                      
                        <Grid item xs={12} sm={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date Confirm HIV Test"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={{marginTop: -10}}
                                />      

                        </MuiPickersUtilsProvider>
                      
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                    Care Entry Point 

                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                onChange={handleChange('age')}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'careentry',
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>UDUTH</option>
                                <option value={20}>AUTH</option>
                              
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                Source Of Referral
                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'referral',                                 
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Direct</option>
                                <option value={20}>Google</option>
                                
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                    Enrollment Setting
                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'hiv_status',
                                  
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Positive</option>
                                <option value={20}>Negative</option>
                                
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* For Date of Birth */}
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                   HIV Status at Registration

                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                onChange={handleChange('age')}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'hiv_sttaus',
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Positive </option>
                                <option value={20}>Negative</option>
                              
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                Pregnancy
                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'pregnancy',                                 
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Postive</option>
                                <option value={20}>Negative</option>
                                
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                    Enrollment Setting
                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'hiv_status',
                                  
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Positive</option>
                                <option value={20}>Negative</option>
                                
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* For Date of Birth */}
                       
                        <Grid item xs={12} sm={8}>                       
                            <FormControlLabel                            
                                control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    value="checkedI"                               
                                />
                                }
                                label="Male"
                            />
                            <FormControlLabel                            
                                control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    value="checkedI"                               
                                />
                                }
                                label="Female"
                            />
                            <FormControlLabel                            
                                control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    value="checkedI"                               
                                />
                                }
                                label="Transgender(Female to Male)"
                            />
                            <FormControlLabel                            
                                control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    value="checkedI"                               
                                />
                                }
                                label="Transgender(Female to Male)"
                            />
                        
                        </Grid>
                        {/* End of Date of Birth */}
                        <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                    KP Target Group
                                </InputLabel>
                                <Select
                                native
                                value={state.age}
                                labelWidth={labelWidth}
                                inputProps={{
                                    name: 'kp_target',
                                  
                                }}
                                className={classes.Select}
                                >
                                <option value="" />
                                <option value={10}>Positive</option>
                                <option value={20}>Negative</option>
                                
                                </Select>
                            </FormControl>
                        </Grid>

                        <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<CancelIcon />}
                    >
                        Cancel
                    </Button>
                    
                </Grid>
                
               
            </CardContent>

       </Card>
       </form>
    
</Page>
  );
}