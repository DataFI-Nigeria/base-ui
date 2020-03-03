import React, {useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardBody,
    Col,
    Row,
    Card,
    FormGroup,
    Label,
    Input,
    Form
} from 'reactstrap';
import MatButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import 'react-widgets/dist/css/react-widgets.css';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//import moment from 'moment';
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';  
import {url} from 'axios/url';

//Dtate Picker package
Moment.locale('en');
momentLocalizer();

const useStyles = makeStyles(theme => ({
    root2: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      margin:theme.spacing(7),
      bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 12,
            
        },
        pos: {
          fontSize: 11,
        },
      cardContent:{
          padding: 2,
      },
      cardroot:{
          margin:theme.spacing(1),
          height: 250 + 'px !important' ,
      }
      
      },
      alertmsge:{
          marginTop: theme.spacing(2),
      },
      rootaccordia: {
          width: '100%',
      },
      accordiaheading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
      },
      allergiesroot: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > *': {
          margin: theme.spacing(0.5),
          },
      },
      
      checkboxroot: {
          display: 'flex',
      },
      formControl: {
          margin: theme.spacing(3),
      },
      
      root: {
          '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
          },
          
      },
  
      formroot: {
          '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
          },
      },
  
      heading: {
          fontSize: theme.typography.pxToRem(15),
      },
      secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
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
      inforoot: {
          width: '95%',
          margin: 20,
          backgroundColor: '#eee',
      },
      })); 
    const cardStyle = {
        borbderColor: '#fff',
        marginBottom: 10,
    };


export default function Medication(props) {
    const apicountries = url+"encounters/pharmacy/drugs";
    const [drugOrder, setdrugOrder] = React.useState([]);
     //Get countries     
      React.useEffect(() => {
        async function getCharacters() {
          const response = await fetch(apicountries);
          const body = await response.json();
          setdrugOrder(body.map(({ genericName, id }) => ({ label: genericName, value: id })));
           //console.log(body);
        }
        getCharacters();
       
      }, []);
    const classes = useStyles(); 
    //POST METHOD TO SAVE THE RECORD
    const {getpatient} =props.getpatientdetails ;
    const PatientID = getpatient.row.patientId;
    const visitId = getpatient.row.id;
   //console.log(getpatient);
   const [medis, setmedis] = useState([]);
//    const [relative, setRelative] = useState([{}]);
  
    //Save Assign Clinician 
    const [medi, setmedi] = useState({ 
            dosage_frequency: '', 
            patientId: PatientID, 
            visitId:visitId,
            dosage_strength: '',
            serviceName: '',
            generic_name : '',
            duration :  '',
            duration_unit: '',
            comment:'',
            start_date : new Date()

        }); 
 

    //    console.log(clinician);
    const [showLoading, setShowLoading] = useState(false);  
    const apiUrl = url+"encounters/GENERAL_SERVICE/DRUG_ORDER_FORM/"+PatientID;  
    const savemedi = (e) => { 
        console.log('the button is click');
    e.preventDefault();  

    const data = {
            formData :medi,
            patientId: PatientID, 
            visitId:visitId,
            consultation_notes: medi.consultation_notes,
            formName: 'DRUG_ORDER_FORM',
            serviceName: 'GENERAL_SERVICE',

    }; 
    console.log(data);
    axios.post(apiUrl, data)
        .then((result) => {          
            setShowLoading(false);
            props.history.push('/checkedin-patients')
            toast.success(" Successful!");
        }).catch((error) => {
            console.log(error);
        setShowLoading(false)
        setmedi(false);

        }
        ); 
    };

    const onChange = (e) => {
    e.persist();     
    setmedi({...medi, [e.target.name]: e.target.value});
    } 

  
    const addDrugs= value => {
        const allmedis = [...medis,  value ];
        setmedi(allmedis);
        console.log(medi);
      };
      
      const removeDrug = index => {
        const allMedis = [...medis];
        allMedis.splice(index, 1);
        setmedis(allMedis);
      };
    const handleAddDrugs = e => {
        e.preventDefault();
        if (!medi) return;
        addDrugs(medi);
        setmedi({start_date:"", duration_unit:"", comment:"",
            duration:"", dosage_strength:"",drug_order:"", generic_name:"", dosage_frequency:""});
      };

      function getRelationshipName(id) {
        return drugOrder.find(x => x.id === id).name;
    }
  return (
          <Row>
                <Col lg={5} >
                  <Card  style={cardStyle} className=" p-3">
                    <CardBody>
                        <Typography className={classes.title} color="primary" gutterBottom>
                                        Drug Order
                        </Typography>
                         <div>
                                        <Form className={classes.formroot}  onSubmit={savemedi}>

                                        <Col md={12}>
                                            <FormGroup>
                                            <Label for="hospitalNumber">Drug Generic Name</Label>
                                                <Input type="select" name="drug_order" id="drug_order" 
                                                    value={medi.drug_order}
                                                    onChange={onChange}>
                                                    
                                                        {drugOrder.map(({ label, value }) => (
                                                            <option key={value} value={value}>
                                                            {label}
                                                            </option>
                                                        ))}
                                                    </Input>
                                            </FormGroup>  
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                            <Label for="hospitalNumber">Dosage Strength</Label>
                                                <Input type="text" name="duration_unit" id="duration_unit" placeholder="Dosage Strength" 
                                                    value={medi.duration_unit}
                                                    onChange={onChange}
                                                />
                                            </FormGroup>  
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                            <Label for="hospitalNumber">Dosage Frequency</Label>
                                                <Input type="text" name="dosage_frequency" id="dosage.fequency" placeholder="Dosage Frequency" 
                                                    value={medi.dosageFrequency}
                                                    onChange={onChange}
                                                />
                                            </FormGroup>  
                                        </Col>
                                        <Col md={12}>
                                            <Label for="middleName">Start Date</Label>
                                
                                            <DateTimePicker time={false} name="start_date"  id="start_date"   value={medi.start}   onChange={value1 => setmedi({...medi, dateRegistration: value1})}
                                                defaultValue={new Date()} max={new Date()}
                                                />
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                            <Label for="hospitalNumber">Duration</Label>
                                                <Input type="text" name="duration" id="duration" placeholder="Duration" 
                                                value={medi.duration}
                                                onChange={onChange}
                                                />
                                            </FormGroup>  
                                         </Col>
                                        <Col md={12}>
                                                <FormGroup>
                                                <Label for="hospitalNumber">Duration Unit</Label>
                                                <Input type="select" name="duration_unit" id="duration_unit"  value={medi.duration_unit}
                                                        onChange={onChange}>
                                                    <option value="1">Days</option>
                                                    <option value="2">Weeks</option>
                                                    <option value="3">Months</option>
                                                </Input>
                                                </FormGroup>  
                                        </Col>
                                         <Col md={12}>
                                                <FormGroup>
                                                <Label for="hospitalNumber">Enter Instruction</Label>
                                                    <Input type="text" name="comment" id="comment" placeholder="Enter Instruction" 
                                                        value={medi.comment}
                                                        onChange={onChange}
                                                    />
                                                </FormGroup>  
                                         </Col>
                                            {showLoading && 
                    
                                                <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                                </Spinner> 
                                            } 
                                             <br/>

                                             <MatButton  
                                                type="submit" 
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={handleAddDrugs}
                                            >
                                                Save
                                            </MatButton>

                                               </Form >
                                        </div>

                                      
                                   
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={7} >
                    <Row>
                        <Col lg={12} >
                            <Card  style={cardStyle} >
                                <CardBody>
                                    <Typography className={classes.title} color="primary" gutterBottom>
                                            Previous Order
                                    </Typography>                   
                                </CardBody>
                            </Card>
                        </Col>
                        <br/>
                        <br/>
                        <Col lg={12} >
                            <Card  style={cardStyle} >
                                <CardBody>
                                    <Typography className={classes.title} color="primary" gutterBottom>
                                    <Col md={12}>
                                        <div className={classes.demo}>
                                            <List>
                                            {medis.map((medi, index) => (
                                            <RelativeList
                                            key={index}
                                            index={index}
                                            medi={medi}
                                            removeDrug={removeDrug}
                                            drugTypeName={getRelationshipName(medi.drug_order)}
                                            />
                                            ))}
                                            </List>
                                    </div>
                                    </Col>
                                    </Typography>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                  
                </Col>
               
              </Row>
         
  );
}

function RelativeList ({ medi, index, removeDrug, drug_order }) {

    return (
        <ListItem>
                  <ListItemText
                    primary={ <React.Fragment>
                        {drug_order}, {medi.firstName} {medi.otherNames} {medi.lastName}</React.Fragment> }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                         
                          color="textPrimary"
                        >
                        {medi.mobilePhoneNumber} {medi.email} <br></br>
                        </Typography>
                        {medi.address}
                      </React.Fragment>
                    }
                  />
                  
                  <ListItemSecondaryAction  onClick={() => removeDrug(index)}>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                
                
    );
  } 

