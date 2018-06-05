message schema

{
	endpoint: {
		url: "https://guesty-user-service.herokuapp.com/user/{userId}"
		verb: "PUT"
	},
	payload:[
		{
			path: "14",
			body: { age: 30 }
		}
	]
}