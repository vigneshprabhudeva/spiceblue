import TaskForm from './TaskForm'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {useState,useEffect} from 'react'
import {useStore,useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import ShowTask from './ShowTask'
import TaskEdit from './TaskEdit'
import Avatar from 'react-avatar'
import { BiPlusMedical } from "react-icons/bi";
function Task(){
	let [task,settask]=useState([])
	let [count,setcount]=useState(0)
	const dispatch=useDispatch()
	const store=useStore()
	const taskstore=useSelector(state=>state.task);
	const taskcount=useSelector(state=>state.count);
	 let history = useHistory();
	

	function submit(e){
		setcount(1)

		e.preventDefault()
		let ob={task:e.target.task.value,date:e.target.date.value,time:e.target.time.value,user:e.target.user.value,avatar:<Avatar size="50"  src="https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg"  />}
		let arr=task.concat(ob)
		settask(arr)
		
		dispatch({type:"save",task:ob})
		console.log(store.getState())

		history.push("/ShowTask");



	}

	return(<div id="addtask">
		<span>TASK({count})</span>
		<Link to="/addtask"><button id="addtask_button"><BiPlusMedical/></button></Link>
		

		<Switch>
          <Route path="/addtask">
            <TaskForm submit={submit}/>
          </Route>
          <Route path="/taskedit">
            <TaskEdit submit={submit} setcount={setcount}/>
          </Route>

           <Route path="/ShowTask">
            <ShowTask/>
          </Route>
         
        </Switch>
        

		</div>
		
		
		)
}
export default Task