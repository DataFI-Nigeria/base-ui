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
import Title from 'components/Title/CardTitle';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


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
        width: 350,
    },
    button: {
        margin: theme.spacing(1),
    },

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
            <form className={classes.form} Validate>
                <Card className={classes.cardBottom}>
                    <CardContent>
                        <Title >New Vitals Signs
                        </Title>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="date"
                                    name="date"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="visitdate"
                                    label="Date of Visit"
                                    autoFocus
                                    size="small"
                                    helperText="provide Date of Visit"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="pulse"
                                    name="pulse"
                                    variant="outlined"
                                    fullWidth
                                    id="pulse"
                                    label="Pulse(bpm)"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="respiration"
                                    name="respiration"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="respiration(bpm)"
                                    label="Respiratory Rate"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="temperature"
                                    name="temperature"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="temperature"
                                    label="Temperature(c)"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="bloodpressure"
                                    name="bloodpressure"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="bpressure"
                                    label="Blood Pressure(mmHg)"
                                    size="small"
                                    helperText="Diatolic"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="bloodpressure"
                                    name="bloodpressure"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="bloodpressure"
                                    label="Blood Pressure(mmHg)"
                                    size="small"
                                    helperText="Sytolic"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="weight"
                                    name="weight"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="weight"
                                    label="Wight(kg)"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="height"
                                    name="height"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="height"
                                    label="Height(cm)"
                                    size="small"
                                />
                            </Grid>
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
                    </CardContent>
                </Card>
            </form>
    );
}