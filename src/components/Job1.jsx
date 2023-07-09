import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Job(props) {
    const [modalShow, setModalShow] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
    }

    return (
        <div className="job">
            <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
                <div className="job-top">
                    <Checkbox size="small"/>
                </div>
                <div className="job-content">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.title}
                        </Typography>
                    <Typography variant="h5" component="div">
                        {props.company}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.location}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className="job-bottom">
                <Button variant="outlined" href={props.link}> Link </Button>
                <div className="job-bottom-icons">
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
                </div>
            </CardActions>
        </Card>              
        </div>
    );
}

export default Job;