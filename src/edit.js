useEffect(()=>{
	 	console.log("hi")
	 	const userOb={
                email : 'smithcheryl@yahoo.com',
                password : '12345678'
              }
		axios.post('https://stage.api.sloovi.com/login',userOb)
		.then((res)=>{
			localStorage.setItem("token",res.data.results.token)
			})

	 },[])
	 axios.get('https://stage.api.sloovi.com/user', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
		.then((res)=>{
			setProfile(res.data.results)


		
			
			
			

		})
	

	function submit(e){
		
		
		let Body ={
                assigned_user:"user1", 
                task_date:"2021-05-24",
                task_time:1621056600,
                is_completed:0,
		        time_zone:43200,
                task_msg: "jij"
               }


		axios.post('https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598',Body, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
			


		 })
		.then((res)=>{
			console.log(res.data)
			dispatch({type:"profile",profile:res.data.results})


			
			

		})

		console.log(profile)

		
		
		



		setcount(1)

		e.preventDefault()
		let ob={task:e.target.task.value,date:e.target.date.value,time:e.target.time.value,user:e.target.user.value,avatar:<Avatar size="50"  src="https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg"  />}
		let arr=task.concat(ob)
		settask(arr)
		
		dispatch({type:"save",task:ob})
		

		history.push("/ShowTask");



	}

