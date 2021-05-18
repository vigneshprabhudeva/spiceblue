let initialState={task:[],profile:[],editTask:[],editId:[],count:"0",formDate:"",userAccepted:[]}
function FormReducer(state =initialState,action){
	console.log(action)
	console.log(initialState)

	switch(action.type){
		case 'save':
		  console.log("save")
		return{...state,task:action.task}
		

		case 'profile':
		  console.log("profile")
		return{...state,profile:action.profile}

		case 'edit':
		  console.log("edit")
		return{...state,editTask:action.editTask}

		case 'editId':
		  console.log("editId")
		return{...state,editId:action.editId}

		case 'count':
		  console.log("count")
		return{...state,count:action.count}

		case 'count/increase':
		  console.log("count")
		return{...state,count:state.count+1}

		case 'count/decrease':
		  console.log("count")
		return{...state,count:state.count-1}

		case 'formDate':
		  console.log("formDate")
		return{...state,count:action.formDate}

		case 'userAccepted':
		  console.log("formDate")
		return{...state,userAccepted:action.userAccepted}

		


	
		


		default:
		return state

	}
}
export default FormReducer