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
    FaPencilAlt
} from 'react-icons/fa';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import AddVitalsPage from 'components/Vitals/AddVitalsPage';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
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
    const toggle = () => setModal(!modal);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Pulse(bpm)</TableCell>
                        <TableCell align="center">Respiratory(bpm)</TableCell>
                        <TableCell align="center">Temperature(c)</TableCell>
                        <TableCell align="center">Blood Pressure</TableCell>
                        <TableCell align="center">Weight(kg)</TableCell>
                        <TableCell align="center">Height(cm)</TableCell>
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
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit Vitals">
                                        <IconButton aria-label="Collect Sample">
                                            <FaPencilAlt size={20} onClick={toggle}/>
                                        </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                    <Modal isOpen={modal} toggle={toggle}  size='lg'>
                        <ModalHeader toggle={toggle}>Edit Patient Vitals</ModalHeader>
                        <ModalBody>
                            <AddVitalsPage />
                        </ModalBody>
                    </Modal>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
