import TaskForm from './TaskForm'
import axios from 'axios'
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
	let [userId,setuserId]=useState(0)
	let [Profile,setProfile]=useState()
	const dispatch=useDispatch()
	const taskstore=useSelector(state=>state.task);
	const profile=useSelector(state=>state.profile);
	const editId=useSelector(state=>state.editId);
	const count=useSelector(state=>state.count);
	 let history = useHistory();

	 useEffect(()=>{    
	 /*at the time of loading the page 
	 toke,profile,tasks and count of task are taken and stored in redux store*/                                             
	 	const userOb={
                email : 'smithcheryl@yahoo.com',
                password : '12345678'
              }
	 	axios.post('https://stage.api.sloovi.com/login',userOb)
		.then((res)=>{
			localStorage.setItem("token",res.data.results.token)
			})

		axios.get('https://stage.api.sloovi.com/user', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
		.then((res)=>{
			dispatch({type:"profile",profile:res.data.results})
		})

		axios.get('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		 })
		.then((res)=>{
			console.log(res.data)
			dispatch({type:"save",task:res.data.results})
			dispatch({type:"count",count:res.data.results.length})
		})

	 },[])
	 

	function submit(e){
		/*dta from the Taskform component are collected
		and storing it to the backend with post request
		*/

		e.preventDefault()
		var d = new Date();
        var seconds = (d.getTime(e.target.time.value))/1000;
       let Body ={
                assigned_user:e.target.user.value, 
                task_date:e.target.date.value,   
                task_time:Math.floor(seconds),
                is_completed:0,
		        time_zone:43200,
                task_msg:e.target.task.value
               }
         axios.post('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598',Body, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		 })
		.then((res)=>{
			console.log(res.data.message)
			if (res.data.message=="Added successfully") {        /*if task is added succesfully,increase the count and refetch task from backend*/
				dispatch({type:"count/increase"})
				axios.get('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		 })
		.then((res)=>{
			console.log(res.data)
			dispatch({type:"save",task:res.data.results})
		})
				history.push("/ShowTask");

			}else{
				alert("submit failed")
			}
		})
}

	function edit(id){
		/*if edit button is pressd at the ShowTask component id of that particular task is taken here
		and that single task is fetched from the backend,then stires in redux store
		then redirect to TaskEdit component*/
		localStorage.setItem("UserId",id)
		
		console.log(editId)

		axios.get('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/'+id, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		 })
		.then((res)=>{
			console.log(res.data)
			dispatch({type:"edit",editTask:res.data.results})
			history.push("/taskedit");
		})
	}


    function update(e){
    	/* in the TaskEdit component if the edit button is clicked
    	task is edited with a put request */
		e.preventDefault()
		var d = new Date();
        var seconds = (d.getTime(e.target.time.value))/1000;
		let Body ={
                assigned_user:e.target.user.value, 
                task_date:e.target.date.value,   
                task_time:Math.floor(seconds),
                is_completed:0,
		        time_zone:43200,
                task_msg:e.target.task.value
               }
               console.log(Body)
               axios.put('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/'+localStorage.getItem("UserId"),Body, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		        })
		        .then((res)=>{
			     console.log(res.data)
			     if (res.data.message=="Updated successfully") {
			     	/*if the edit is succesfull
			     	refetch all task again and restore in redux store
			     	and redirect to ShowTask component*/



				axios.get('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
		         })
		        .then((res)=>{
		     	console.log(res.data)
			    dispatch({type:"save",task:res.data.results})
		        })





				history.push("/ShowTask");

			}
		}).catch((err)=>{
			console.log(err)
		})
		


	}

	return(<div id="addtask">
		<span>TASK({count})</span>
		<Link to="/addtask"><button id="addtask_button"><BiPlusMedical/></button></Link>
		

		<Switch>
          <Route path="/addtask">
            <TaskForm submit={submit}/>
          </Route>

          <Route path="/taskedit">
            <TaskEdit update={update} />
          </Route>

           <Route path="/ShowTask">
           <ShowTask edit={edit}/>
          </Route>  
        </Switch>
        </div>
		
		
		)
}
export default Task