import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Create } from "@material-ui/icons";
import Axios from 'axios';

import {useParams} from "react-router-dom";

Axios.defaults.baseUrl="https://ams-api.herokuapp.com/api/"

export default function DialogForm(props) {

	const [name,setName] = useState("");

	const [max,setMax] = useState("");
	const [desc,setDesc] = useState("");
	const [deadline,setDeadline] = useState("");

	let { course } = useParams();
	

	async function handleSubmit(){
		
		const res= await Axios.post("https://ams-api.herokuapp.com/api/assign/create_assignment?key=6d2044ad57972d5230f586a829893ba5",{
			CourseID: course,
            AssignmentName: name,
            AssignmentDescription: desc,
            AssignmentDueDate: deadline,
            AssignmentMaxScore: max,
		});
		
	}
	
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="form-dialog-title"
			fullWidth={true}
		>
			<DialogTitle id="form-dialog-title">ASSIGN WORK</DialogTitle>
			<DialogContent>
				<form>
						<TextField
							margin="dense"
							id="name"
							label="Assignment name"
							type="text"
							fullWidth
							onChange={(e)=>{setName(e.target.value)}}
						/>
						<TextField
							margin="dense"
							id="desc"
							label="Assignment description"
							type="text"
							fullWidth
							onChange={(e)=>{setDesc(e.target.value)}}
						/>
						<TextField
							margin="dense"
							id="deadline"
							label="Deadline"
							type="date"
							fullWidth
							focused 
							style={{marginTop:"30px"}}
							onChange={(e)=>{setDeadline(e.target.value)}}
						/>
							<TextField
							margin="dense"
							id="max"
							label="Max score"
							type="text"
							fullWidth
							onChange={(e)=>{setMax(e.target.value)}}
						/>
					
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleSubmit} color="primary">
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
}
