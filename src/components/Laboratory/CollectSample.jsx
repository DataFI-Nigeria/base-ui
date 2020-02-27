import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Row,
  FormGroup,
  Button,
  Input
} from 'reactstrap';
import { MdSave, MdTransferWithinAStation} from 'react-icons/md';
import { FaVials } from 'react-icons/fa';
import {TiArrowBack} from 'react-icons/ti';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import "react-datepicker/dist/react-datepicker.css";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DateMaterial from 'components/DateTime/Date'
import Page from 'components/Page';



const useStyles = makeStyles(theme => ({
    table: {
      minWidth: 650,
    },
    button: {
      margin: theme.spacing(1),
      width:200,
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
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Blood', 'Blood', 6.0, 24, 4.0),
    createData('HIV', 'Urine', 9.0, 37, 4.3),
    createData('TB', 'Blood', 16.0, 24, 6.0),
  ];

  

export default function CollectSample(){
    const classes = useStyles();
    const classes2 = useStyles2();

  return (
    <Page title="Collect Sample">
        <Row >
          <Col>
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
            <Card className="mb-12">
              <CardHeader className="text-primary">Test Order  --  03846657558
              <Link to="/test-order">
                <Button color="primary" className=" float-right mr-1" >
                        <TiArrowBack/>Go Back
                </Button>
                </Link>
              </CardHeader>
              <CardBody>
                    
                      <br/>
                        <Row>
                          <Col>
                            <Card body>
                              <TableContainer component={Paper}>                
                                    <Table className={classes.table} aria-label="caption table">
                                    <TableHead style={{fontWeight: "bolder" }}>
                                        <TableRow>
                                        <TableCell align="center">Test</TableCell>
                                        <TableCell align="center">Sample Type</TableCell>
                                        <TableCell align="center">Date Requested</TableCell>
                                        <TableCell align="center">Collected</TableCell>
                                        <TableCell align="center">Refered</TableCell>
                                        <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.calories}</TableCell>
                                            <TableCell align="center">12/34/2019</TableCell>
                                            <TableCell align="center">  
                                              <IoIosCheckmarkCircle className="text-primary"/>
                                            </TableCell>
                                            <TableCell align="center">
                                              <IoIosCheckmarkCircle />
                                            </TableCell>
                                            <TableCell align="center">
                                              <Tooltip title="Collect Sample">
                                                  <IconButton aria-label="Collect Sample">
                                                    <FaVials size='25'/>
                                                  </IconButton>
                                              </Tooltip>
                                              <Tooltip title="Refer">
                                                  <IconButton aria-label="Refer">
                                                    <MdTransferWithinAStation size="25"/>
                                                  </IconButton>
                                              </Tooltip>
                                            </TableCell>
                                            
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                          </Col>
                        </Row>
                            <Form>
                            <Row form >
                                <Col md={4} style={{ marginTop: '33px'}}>
                                        <Input
                                            type="search"
                                            placeholder="Lab. Number "
                                            className="cr-search-form__input "
                                        />                                
                                </Col>
                                <Col md={4}>
                                    <FormGroup>

                                        <DateMaterial />
                                    </FormGroup>
                                </Col>
                                
                                <Col md={2} style={{ marginTop: '33px'}}>
                                <FormGroup>
                                    <Button color="primary" className=" float-right mr-1" >
                                            <MdSave/>  Save
                                    </Button>
                                </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
    </Page>
  )
}

