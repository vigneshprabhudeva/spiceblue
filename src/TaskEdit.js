import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {useStore,useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { BiTrash } from "react-icons/bi";
import { useHistory } from "react-router-dom";
function TaskEdit({submit,setcount}){
	 let history = useHistory();
	let [Task,setTask]=useState("")
	let [date,setDate]=useState("")
	let [time,settime]=useState("")
	let [user,setuser]=useState("")
	const taskstore=useSelector(state=>state.task);
	const dispatch=useDispatch()
	useEffect(()=>{
		setTask(taskstore.task)
		setDate(taskstore.date)
		settime(taskstore.time)
		setuser(taskstore.user)

	},[])
	console.log(Task)
	console.log(taskstore.date)
	function changeTask(event){
		console.log(event.target.value)
		setTask(event.target.value)
	}
	function changeDate(event){
		
		setDate(event.target.value)
	}
	function changeTime(event){
		
		settime(event.target.value)
	}
	function changeUser(event){
		
		setuser(event.target.value)
	}
	function del(){
		setcount(0)
		var result = window.confirm("Want to delete?");
        if (result) {
        	dispatch({type:"delete",task:[]})
		dispatch({type:"delete",count:0})
		console.log(taskstore)
		history.push("/");
   
             }

		
	}

	
	return(<div>
		<form onSubmit={submit}>
		<label id="task_label">Task Description</label>

		<input type="text" name="task" value={Task} id="taskid" placeholder="Enter the task Description" onChange={changeTask}/><br/><br/>
		<div id="date_time">
		<label>Date</label><label id="time_labe" >Time</label><br/><br/>
		<input type="date" value={date} onChange={changeDate}  name="date" id="date_input"/><input type="time" name="time" onChange={changeTime} id="time_input" value={time} placeholder="time"/><br/><br/>
		<label>Assign user</label><br/><br/>
		</div>
		<select id="selectid" name="user" value={user} onChange={changeUser}>
		<option disabled selected value> -- select an option -- </option>
		<option>userOne</option>
		<option>userTwo</option>
		<option>userThree</option>
		</select>
		<button type="submit" id="save_button">edit</button><Link to="/showTask"><button type="button" id="cancel_button">cancel</button></Link><button type="button" id="del_button" onClick={del}><BiTrash/></button>
		</form>


		</div>)
}
export default TaskEdit