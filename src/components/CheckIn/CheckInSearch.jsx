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
    FaUserCheck
} from 'react-icons/fa';
import {
    MdDashboard, MdCancel
} from 'react-icons/md';

import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import CheckInModal from 'components/CheckIn/CheckInModal';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardBottom: {
        marginBottom: 20
    },
    Select: {
        height:45,
        width: 250,
    },
    button: {

    },
    root: {
        '& > *': {

        },
    },
    InputLabel: {
        display: 'none',
    },
    labelWidth: {
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

export default function PatientPage(props) {
    const classes = useStyles();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Patient ID</TableCell>
                        <TableCell align="center">Patient Name</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Age</TableCell>
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
                                <Tooltip title="Patient Dashboard">
                                    <Link to="/data-table1">
                                        <IconButton aria-label="Collect Sample">
                                            <MdDashboard size={20}/>
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="check in Patient">
                                    <IconButton aria-label="Collect Sample">
                                        < FaUserCheck size={20} onClick={toggle}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Closed Checked In Patient">
                                    <IconButton aria-label="Closed Checked In Patient">
                                        < MdCancel size={20} onClick={toggle}/>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow> 
                    ))}
                    <Modal isOpen={modal} toggle={toggle} size="lg">
                        <ModalHeader toggle={toggle}>Check In Patient</ModalHeader>
                        <ModalBody>
                            <CheckInModal  />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Check In</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
