import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {useState} from 'react'
import {useStore,useDispatch,useSelector} from 'react-redux'



function TaskForm({submit}){
	const profile=useSelector(state=>state.profile);
	console.log(profile)
	const [selectedDate, handleDateChange] = useState(new Date());
	console.log(selectedDate)
	return(<div id="taskfrom">


		<form onSubmit={submit}>
		<label id="task_label">Task Description</label><br/><br/>
		<input type="text" name="task" id="taskid"/><br/><br/>
		<div id="date_time">
		<label>Date</label><label id="time_labe">Time</label><br/><br/>
		<input type="date" name="date" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" id="date_input"/>
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker id="time_pick" name="time"value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider><br/><br/>
		<label id="user_label">Assign user</label><br/><br/>
		</div>
		<select id="selectid" name="user" Reqired>
		<option value={profile.id}>{profile.name}</option>
		</select><br/><br/>
		<button type="submit" id="save_button">save</button><Link to="/"><button type="button" id="cancel_button">cancel</button></Link>
		</form>
		
		
		</div>)
}
export default TaskForm