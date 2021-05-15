let initialState={task:[],count:"0"}
function FormReducer(state =initialState,action){
	console.log(action)

	switch(action.type){
		case 'save':
		  console.log("save")
		return{...state,task:action.task}
		case 'delete':
		  console.log("delete")
		return{...state,task:action.task}

		console.log("delete")
		return{...state,count:action.count}
	
		


		default:
		return state

	}
}
export default FormReducer