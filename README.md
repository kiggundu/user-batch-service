message schema

```
{
	"endpoint": {
		"url": "https://guesty-user-service.herokuapp.com/user",
		"verb": "PUT"
	},
	"payload":[
		{
			"path": "14",
			"body": { "age": 30 }
		}
	]
}
```
NB the endpoint will have the path appended e.g.
"https://guesty-user-service.herokuapp.com/user/14"



