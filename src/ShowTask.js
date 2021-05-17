import {useStore,useDispatch,useSelector} from 'react-redux'
import { BiEditAlt,BiCheck,BiPlusCircle} from "react-icons/bi";
import Avatar from 'react-avatar'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";

import axios from 'axios'

function ShowTask({edit}){
	let history = useHistory();
	useEffect(()=>{

	})
	const taskstore=useSelector(state=>state.task);
	console.log(taskstore)
	function done(){
		history.push("/");

	}
	
	return(<div>
	           {taskstore.map(function(val,index){
	           	return<div id="show"><table><tr><th><Avatar size="50"  src={val.user_icon}  /></th><td>{val.task_msg}<br/><p id="date">{val.task_date}</p></td></tr></table><button title="edit this task" id="edit_button" onClick={()=>{edit(val.id)}}><BiEditAlt /></button><Link to="/addtask"><button title="create new task" id="create_button"><BiPlusCircle/></button></Link><button onClick={done} title="done" id="tick_button"><BiCheck/></button></div>
	           })}

		
		

		

		</div>)
}
export default ShowTask