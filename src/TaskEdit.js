import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {useStore,useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { BiTrash } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import axios from 'axios'
function TaskEdit({update,setcount}){
	const [selectedDate, handleDateChange] = useState(new Date());
	localStorage.setItem("formDate",selectedDate.getTime())
	 let history = useHistory();
	let [Task,setTask]=useState("")
	let [date,setDate]=useState("")
	let [time,settime]=useState("")
	let [user,setuser]=useState("")
	
	const editTask=useSelector(state=>state.editTask);
	const profile=useSelector(state=>state.profile);
	const userAccepted=useSelector(state=>state.userAccepted);
	console.log(editTask.task_time)
	const dispatch=useDispatch()
	useEffect(()=>{
		setTask(editTask.task_msg)
		setDate(editTask.task_date)
		settime(editTask.task_time)
		setuser(editTask.assigned_user)
		console.log(editTask)

	},[])
	
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
		var result = window.confirm("Want to delete?");
        if (result) {
        axios.delete('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/'+localStorage.getItem("UserId"), { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		 })
		.then((res)=>{
			console.log(res.data)
			if (res.data.message=="Deleted successfully") {
				dispatch({type:"count/decrease"})

				axios.get('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		         })
		        .then((res)=>{
		     	console.log(res.data)
			    dispatch({type:"save",task:res.data.results})
		        })
			}
		})
      
		 }
            history.push("/ShowTask");
    }
console.log(user)
	
	return(<div>
		<form onSubmit={update}>
		<label id="task_label">Task Description</label>

		<input type="text" name="task" value={Task} id="taskid" placeholder="Enter the task Description" onChange={changeTask}/><br/><br/>
		<div id="date_time">
		<label>Date</label><label id="time_labe" >Time</label><br/><br/>
		<input type="date" value={date} onChange={changeDate}  name="date" id="date_input"/><MuiPickersUtilsProvider utils={DateFnsUtils}>
        
        <TimePicker id="time_pick" name="time"value={selectedDate} onChange={handleDateChange} />
    
        </MuiPickersUtilsProvider><br/><br/>
		<label>Assign user</label><br/><br/>
		</div>

		<select id="selectid" name="user" value={user}  onChange={changeUser}>
		<option disabled selected value> -- select an option -- </option>
		{userAccepted.map(function(val){console.log(val.id)
			return<option value={val.id}>{val.name} </option>


		})}
		
		</select>
		<button type="submit" id="save_button">edit</button><Link to="/showTask"><button type="button" id="cancel_button">cancel</button></Link><button type="button" id="del_button" onClick={del}><BiTrash/></button>
		</form>


		</div>)
}
export default TaskEdit