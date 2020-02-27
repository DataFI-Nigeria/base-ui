import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import {
    MdCheckCircle,
} from 'react-icons/md';
import {
    IoMdEye
} from 'react-icons/io';
import {
    MdAddBox
} from 'react-icons/md';
import {
    FaUserCheck
} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import AddVitalsPage from 'components/Vitals/AddVitalsPage';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.

    },
    cardBottom: {
        marginBottom: 20
    },
    Select: {
        height:45,
        width: 350,
    },

    input: {
        display: 'none',
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1598', 159, 6.0, 24, 4.0),
    createData('1234', 237, 9.0, 37, 4.3),
    createData('5555', 262, 16.0, 24, 6.0),
];

export default function DataTableList(props) {
    const classes = useStyles();

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Patient ID</TableCell>
                        <TableCell align="center">Patient Name</TableCell>
                        <TableCell align="center">Vital Signs</TableCell>
                        <TableCell align="center">Clinician</TableCell>
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
                            <TableCell align="center">
                                <Tooltip title="View Patient">
                                    <Link to="/view-vitals">
                                        <IconButton aria-label="Collect Sample">
                                            <MdCheckCircle size={20}/>
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="View Patient">
                                <Link to="/patient-registration">
                                    <IconButton aria-label="Collect Sample">
                                        <MdCheckCircle size={20}/>
                                    </IconButton>
                                </Link>
                            </Tooltip>
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="View Patient Vitals">
                                    <Link to="/view-vitals">
                                        <IconButton aria-label="Collect Sample">
                                            <IoMdEye size={20}/>
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Add Vitals">
                                        <IconButton aria-label="Collect Sample">
                                            <MdAddBox size={20} onClick={toggle}/>
                                        </IconButton>
                                </Tooltip>
                                <Tooltip title="Assign Clinician">
                                        <IconButton aria-label="Collect Sample">
                                            <FaUserCheck size={20} onClick={toggle2}/>
                                        </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                    <Modal isOpen={modal} toggle={toggle} size='lg'>
                        <ModalHeader toggle={toggle}>Add New Vitals</ModalHeader>
                        <ModalBody>
                           <AddVitalsPage />
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={modal2} toggle={toggle2}>
                        <ModalHeader toggle={toggle2}>Assign Clinician</ModalHeader>
                        <ModalBody>
                                Assign Clinician
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle2}>Assign</Button>{' '}
                            <Button color="secondary" onClick={toggle2}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
