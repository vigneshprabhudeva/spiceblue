let initialState={task:[],profile:[],editTask:[],editId:[],count:"0"}
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

		


	
		


		default:
		return state

	}
}
export default FormReducer