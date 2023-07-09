import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';

function Job(props) {
    const [modalShow, setModalShow] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
    }

    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
                <TableRow
                    key={props.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell style={{width: "7%"}} align="center"><Checkbox /></TableCell>
                    <TableCell style={{width: "5%"}} align="center" component="th" scope="row">{props.id + 1}</TableCell>
                    <TableCell style={{width: "25%"}} align="center">{props.title}</TableCell>
                    <TableCell style={{width: "20%"}} align="center">{props.company}</TableCell>
                    <TableCell style={{width: "20%"}} align="center">{props.location}</TableCell>
                    <TableCell style={{width: "13%"}} align="center">{props.link}</TableCell>
                    <TableCell style={{width: "10%"}} align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>
                            <EditModal 
                                onClick={editClick}
                                changeId={props.id}
                                changeTitle={props.title}
                                changeCompany={props.company}
                                changeLocation={props.location}
                                changeLink={props.link}
                                onEdit={props.saveEdit}
                            />
                        </Button>
                        <Button><DeleteForeverIcon onClick={deleteClick} /></Button>
                    </ButtonGroup>
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Job;