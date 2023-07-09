import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableHeader() {

    return (
      <div className='table-header'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "7%", backgroundColor:"white"}} align="center"></TableCell>
                            <TableCell style={{width: "5%", fontWeight: "700"}} align="center">#</TableCell>
                            <TableCell style={{width: "25%", fontWeight: "700"}} align="center">Job Title</TableCell>
                            <TableCell style={{width: "20%", fontWeight: "700"}} align="center">Company</TableCell>
                            <TableCell style={{width: "20%", fontWeight: "700"}} align="center">Location</TableCell>
                            <TableCell style={{width: "13%", fontWeight: "700"}} align="center">Link</TableCell>
                            <TableCell style={{width: "10%", fontWeight: "700", backgroundColor:"white"}} align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
      </div>
      );
}

export default TableHeader;