import Page from 'components/Page';
import React from 'react';
import {
  Card,
  Col,
  Form,
  Row,
  Alert,
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { TiWarningOutline } from "react-icons/ti";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    GiMedicines
} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import SearchTestOrder from 'components/Laboratory/SearchForm/SearchTestOrder';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
    width:200,
  },
  body1: {
    fontWeight: 500,
  },

}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1598', 'Alex Williams', 234567677, 3),
  createData('1234', 'Ahmed Musa', +23456666443, 9),
  createData('5555', 'Isaac Johnson',+2345567765, 6 ),
];

const PendingPrescription = (props) => {
 
    const classes = useStyles();
  return (
    <Page title="Pending Prescription" >     
        <Row>        
        <Col xl={12} lg={12} md={12}>
          <Alert color="primary">
                <TiWarningOutline 
                    size="30"
                    className=" text-dark"/>  { '  '} 
                    Note : Only  Patients can be search here
            </Alert>
          </Col>
        </Row>

              <Row>          
                <Col sm="12">
                  <Card body>
                    <Form>
                      <SearchTestOrder />
                    </Form>          
                      <br/>
                      <TableContainer component={Paper}>                
                        <Table className={classes.table} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                            <TableCell>Patient ID</TableCell>
                            <TableCell align="center">Patient Name</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">
                                        
                                        <Typography variant="caption" className="text-primary"   display="block"  gutterBottom>
                                            <GiMedicines/>
                                            <Link to="/view-prescription"> View Prescription</Link>
                                        </Typography>                                    
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>       
                  </Card>
                </Col>
                
              </Row>
       
</Page>

  
  );
};

export default PendingPrescription;
