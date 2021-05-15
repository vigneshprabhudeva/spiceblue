import {useStore,useDispatch,useSelector} from 'react-redux'
import { BiEditAlt,BiCheck,BiPlusCircle} from "react-icons/bi";
import Avatar from 'react-avatar'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
function ShowTask(){
	const taskstore=useSelector(state=>state.task);
	console.log(taskstore)
	return(<div>
		

		<div id="show"><table><tr><th>{taskstore.avatar}</th><td>{taskstore.task}<br/><p id="date">{taskstore.date}</p></td></tr></table><Link to="/taskedit"><button title="edit this task" id="edit_button"><BiEditAlt /></button></Link><Link to="/addtask"><button title="create new task" id="create_button"><BiPlusCircle/></button></Link><button title="create new task" id="tick_button"><BiCheck/></button></div>

		</div>)
}
export default ShowTask