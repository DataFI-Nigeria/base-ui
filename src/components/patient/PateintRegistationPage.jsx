import Page from 'components/Page';
import React, { useState } from 'react';
import MatButton from '@material-ui/core/Button';
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Alert,
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import {  Card,CardContent, }
from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { IoMdFingerPrint } from "react-icons/io";
import { FaFileImport } from "react-icons/fa";
import {FaPlusSquare} from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
// import { withRouter } from 'react-router-dom';

import axios from 'axios';
import 'react-widgets/dist/css/react-widgets.css';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import Title from 'components/Title/CardTitle';
// import CountryStates from './CountryStates';

Moment.locale('en');
momentLocalizer();

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


const PatientRegistration = (props) => {
    const classes = useStyles();
    const [patient, setPatient] = useState({ 
        hospitalNumber:'',
        firstName: '',
        lastName: '', 
        email:'',
        dateRegistration: '',
        facilityId: '1',
        dob:'',
        dobEstimated:'',
        educationId:'',
        genderId:'',
        maritalStatusId:'',
        occupationId:'',
        alternatePhoneNumber:'',
        address1:'',
        city:'',
        countryId:'',
        landmark:'',
        provinceId:'',
        zipCode:'',
        stateId:'',
        street:'',
    });  
    
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "http://10.167.4.185:8080/api/patients";
  
    const savePatient = (e) => {
        //console.log(patient);
      setShowLoading(true);
      e.preventDefault();
      const data = { 
            hospitalNumber: patient.hospitalNumber,           
            dateRegistration: "01:11:2020",
            facilityId: '1',
           
            "person": {
                firstName: patient.firstName,
                lastName:  patient.lastName, 
                email:patient.email,
                dob:patient.dob,
                maritalStatusId:patient.maritalStatusId,
                occupationId:patient.occupationId,
                genderId:patient.genderId,
                educationId:patient.educationId,           
            "personContact": {
                address1:patient.address1,
                city:'1',
                countryId:'1',
                zipCode:patient.zipCode,
                stateId:'1',
                street:patient.street,
                provinceId: 1
            },
            "personRelatives": [
            {
                dobEstimated:patient.dobEstimated,
                alternatePhoneNumber:patient.alternatePhoneNumber,               
                landmark:patient.landmark,
                provinceId:patient.provinceId,
                
            }
        ],
        "titleId":1
        }
    };
        console.log(data);
      axios.post(apiUrl, data)
        .then((result) => {
            
          setShowLoading(false);
          props.history.push('/show/' + result.data._id)
        }).catch((error) => setShowLoading(false));
    };
  
    const onChange = (e) => {
      e.persist();
      
      setPatient({...patient, [e.target.name]: e.target.value});
    } 

  return (
    <Page title="Patient Regsitration" >
        
        <Alert color="primary">
        All Information with Asterisks(*) are compulsory 
      </Alert>
    <Form onSubmit={savePatient}>
         {/* First  row form entry  for Demographics*/}
        <Row>
        <Col xl={12} lg={12} md={12}>
        <Card className={classes.cardBottom}>  
            <CardContent>
                <Title >Basic Information <br/>
                    
                        <MatButton
                            variant="contained"
                            color="primary" className=" float-right mr-1"
                            startIcon={<FaFileImport />}>
                            Import image
                        </MatButton>
                        <MatButton
                            variant="contained"
                            color="primary" className=" float-right mr-1"  startIcon={<IoMdFingerPrint />}>
                            Finger print
                        </MatButton> 
                        <br/> 
                </Title>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="hospitalNumber">Patient Id</Label>
                                <Input type="text" name="hospitalNumber" id="hospitalNumber" placeholder="Patient ID " value={patient.hospitalNumber} onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            
                            <Col md={4}>
                            <FormGroup>
                                <Label for="middleName">Date Of Registration</Label>
                                
                                <DateTimePicker time={false} name="dateRegistration"  id="dateRegistration"   />
                            </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="firstName">Fist Name</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={patient.firstName} onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            
                            <Col md={4}>
                            <FormGroup>
                                <Label for="middleName">Other Name(s)</Label>
                                <Input type="text" name="otherNames" id="otherNames" placeholder="Middle Name" value={patient.otherNames} onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="lastName">Last Name </Label>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={patient.lastName} onChange={onChange}/>
                            </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="maritalStatus">Gender</Label>
                                    <Input type="select" name="genderId" id="genderId" value={patient.genderId}  onChange={onChange}>
                                        <option value="1">Female</option>
                                        <option value="2">Male</option>
                                        
                                    </Input>
                                </FormGroup>  
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="occupation">Ocuupation</Label>
                                <Input type="select" name="occupationId" id="occupationId" value={patient.occupationId}  onChange={onChange}>
                                    <option value="1">Students</option>
                                    <option value="2">Business</option>
                                    <option value="3">Government</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="qualification">Hightest Qualification</Label>
                                <Input type="select" name="educationId" onChange={onChange}>
                                    <option value="1">PHD</option>
                                    <option value="2">MSC</option>
                                    <option value="3">BSC</option>
                                    <option value="4">HND</option>
                                    <option value="5">NCE</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            
                        </Row>
                        
                        <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="maritalStatus">Marital Status</Label>
                                <Input type="select" name="maritalStatusId" id="maritalStatusId" value={patient.maritalStatusId} onChange={onChange}>
                                    <option value="1">Signle</option>
                                    <option value="2">Married</option>
                                    <option value="3">Divorce</option>
                                </Input>
                            </FormGroup>  
                            </Col>
                            <Col md={4}>
                            <FormGroup >
                                <Label>Date OF Birth</Label>
                                <DateTimePicker time={false} name="dob"  dropUp  />

                            </FormGroup>
                            </Col>
                            <Col md={4} >
                                {/* Estimate Date of birth in a row  */}
                                <Row form>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="phoneNumber">Year</Label>
                                            <Input type="text" name="year" id="year" placeholder="Year" value={patient.Estimate}  onChange={onChange}/>
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="phoneNumber">Months</Label>
                                            <Input type="text" name="months" id="months" placeholder="Months" value={patient.EstimateMonths}  onChange={onChange}/>
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="phoneNumber">Days</Label>
                                            <Input type="text" name="days" id="days" placeholder="Days" value={patient.EstimateDays}  onChange={onChange}/>
                                        </FormGroup>
                                        </Col>
                                </Row>
                            </Col>           
                            <Col md={4}>
                            <FormGroup check>
                                <Label></Label>
                                <Input type="checkbox" />Estimates Date of  Birth
                               
                            </FormGroup>
                            </Col>
                        </Row>
                        
                   
                </CardContent>

            </Card>
            </Col>
        </Row>
        {/* Second row form entry  for contact details*/}
        <Row>
        <Col xl={12} lg={12} md={12}>
            <Card className={classes.cardBottom}>  
                                         
                <CardContent>
                <Title >Contact Details <br/></Title>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input type="text" name="mobilePhoneNumber" id="mobilePhoneNumber" placeholder="Phone Number" value={patient.mobilePhoneNumber}  onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="altPhoneNumber">Alt. Phone Number</Label>
                                <Input type="text" name="alternatePhoneNumber" id="alternatePhoneNumber" placeholder="Alternative Number" value={patient.alternatePhoneNumber}  onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="emailAddress">Email Address</Label>
                                <Input type="email" name="email" id="email" placeholder="Email Address" value={patient.email}  onChange={onChange}/>
                            </FormGroup>
                            </Col>
                        </Row>


                </CardContent>
            </Card>
            </Col>
        </Row>

    {/* Third  row form entry  for Contact Address*/}
    <Row>
        <Col xl={12} lg={12} md={12}>
        <Card className={classes.cardBottom}>  
                                         
            <CardContent>
            <Title > Address <br/></Title>
                
                        <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="country">Country</Label>
                                        <Input type="select" name="countryId" id="countryId" value={patient.countryId}  onChange={onChange}>
                                            <option value="1">Africa</option>
                                            <option value="2">Asia</option>
                                            <option value="3">America</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="stressAddress">Street Address</Label>
                                    <Input type="text" name="street" id="street" placeholder="Stress Address" value={patient.street} onChange={onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input type="text" name="city" id="city" placeholder="City" value={patient.city}  onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            
                           
                        </Row>
                        
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="lga">Province/District/LGA </Label>
                                <Input type="select" name="provinceId" id="provinceId" value={patient.provinceId}  onChange={onChange}>
                                    <option value="1">Ogun</option>
                                    <option value="2">Business</option>
                                    <option value="3">Government</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="landMark">Land Mark</Label>
                                <Input type="text" name="landmark" id="landmark" placeholder="Land Mark" value={patient.landmark}  onChange={onChange}/>
                            </FormGroup>
                            </Col>
                            
                        </Row>
                </CardContent>
            </Card>
            </Col>
        </Row>
         {/* fourth  row form entry  for Relatives*/}
         <Row>
            <Col xl={12} lg={12} md={12}>
            <Card className={classes.cardBottom}>                                          
                <CardContent>
                    <Title > 
                        Relatives 
                        <MatButton
                            variant="contained"
                            color="primary" className=" float-right mr-1"  startIcon={<FaPlusSquare />}>
                            Add Relative 
                        </MatButton> 
                   
                    </Title>
                    <br/>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="firstName">Fist Name</Label>
                                    <Input type="text" name="relativeFirstName" id="relativeFirstName" value={patient.relativeFirstName}  placeholder="First Name" onChange={onChange}/>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="middleName">Middle Name</Label>
                                    <Input type="text" name="relativeMiddleName" id="relativeMiddleName" placeholder="Middle Name"  value={patient.relativeMiddleName} onChange={onChange}/>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="lastName">Last Name </Label>
                                    <Input type="text" name="relativeLastName" id="relativeLastName" placeholder="Last Name" value={patient.relativeLastName} onChange={onChange}/>
                                </FormGroup>
                                </Col>
                            </Row>
                            
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="phoneRelative">Phone No.</Label>
                                    <Input type="text" name="phoneRelative" id="phoneRelative" placeholder="Relative Phone No." value={patient.phoneRelative} onChange={onChange}/>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="relativeEmail">Email Address</Label>
                                    <Input type="text" name="relativeEmail" id="relativeEmail" placeholder="Relative Email Address" onChange={onChange}/>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="relativeAddress">Physical Address</Label>
                                    <Input type="text" name="relativeAddress" id="relativeAddress" placeholder="Relative Physical Address" onChange={onChange}/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            
                            {/* <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                            >
                                Save
                            </Button>
                            <Button
                                    
                                    className={classes.button}
                                    startIcon={<CancelIcon />}
                                >
                                Cancel
                            </Button>   */}
                             <MatButton  
                                type="submit" 
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                             >
                                Save
                            </MatButton>

                            <MatButton
                                    
                                    className={classes.button}
                                    startIcon={<CancelIcon />}
                                >
                                Cancel
                            </MatButton>  

                            {showLoading && 
                                <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                                </Spinner> 
                            }      
                    </CardContent>
                </Card>
                </Col>
            </Row>
    </Form>
</Page>
  );
};

export default PatientRegistration;
