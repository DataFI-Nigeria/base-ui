import Page from 'components/Page';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,

    Form,

    Alert
} from 'reactstrap';
import {
    Card,
    CardContent,
}
    from '@material-ui/core';
import { TiWarningOutline } from "react-icons/ti";

import { makeStyles } from '@material-ui/core/styles';
import SearchInput from 'components/SearchBox/SearchInput';
import Title from 'components/Title/CardTitle';
import CheckInSearch from './CheckInSearch';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

}));

const PatientPage = () => {
    const classes = useStyles();
    return (
        <Page title="Check In" >
            <Alert color="primary">
                <TiWarningOutline
                    size="30"
                    className=" text-dark"/>  { '  '}
                Note : All Available Patients in the system can be search here
            </Alert>
            <Card className={classes.cardBottom}>
                <CardContent>
                    <Title>
                        <Link to="/checkin-search">
                            <Button
                                variant="contained"
                                color="primary" className=" float-right mr-1">
                                Checked In Patients
                            </Button>
                        </Link>
                    <br />
                    </Title>
                    <br/>
                    {/* Search Form Input Field */}
                    <Form>
                        <SearchInput />
                    </Form>
                    <br/>
                    <CheckInSearch />
                </CardContent>
            </Card>
        </Page>
    );
};

export default PatientPage;
