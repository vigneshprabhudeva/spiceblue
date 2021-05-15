import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
function TaskForm({submit}){
	return(<div id="taskfrom">
		<form onSubmit={submit}>
		<label id="task_label">Task Description</label><br/><br/>

		<input type="text" name="task" id="taskid"/><br/><br/>
		<div id="date_time">
		<label>Date</label><label id="time_labe">Time</label><br/><br/>
		<input type="date" name="date" id="date_input"/><input type="time" name="time" id="time_input" placeholder="time"/><br/><br/>
		<label id="user_label">Assign user</label><br/><br/>
		</div>
		<select id="selectid" name="user">
		<option disabled selected value> -- select an option -- </option>
		<option>userOne</option>
		<option>userTwo</option>
		<option>userThree</option>
		</select><br/><br/>
		<button type="submit" id="save_button">save</button><Link to="/"><button type="button" id="cancel_button">cancel</button></Link>
		</form>
		</div>)
}
export default TaskForm