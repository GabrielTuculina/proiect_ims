# Web-Crawler-Project-CC

Ghid instalare + configurare setup:

Pentru mongodb:
	->GUI: https://www.mongodb.com/try/download/compass
	->instalation guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
	
Pentru backend:
	->sudo apt-get install npm
	->!! in proiect !!   npm install
	
	
Utilizare din postman:
	-> pentru "get user history":
	
	POST http://localhost:3002/db/test/getCrawl
	Headers: [{"key":"Content-Type","value":"application/json"}, 
			{"key":"x-access-token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmQyNjg1NGFlNTE0NWU5MTAwNGM5MCIsImlhdCI6MTYxMDg4ODY5MywiZXhwIjoxNjEwOTc1MDkzfQ.p0MrvaN9ASzkG_gMA3my32KmZO6elL8gJXP78tYp2uU"}]
	Body:
	{
		"user_id": "5ffd26854ae5145e91004c90"
	}
	
	---------------- -------------- --------------
	
	Response:
	[
		{
		    "word": "pilates",
		    "link_start": "www.google.com",
		    "results": [
		        "test1",
		        "test2",
		        "link_test"
		    ]
		}
	]
	
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	
	-> pentru "get user crawls to history":
	
	POST http://localhost:3002/db/test/addCrawl
	Headers: [{"key":"Content-Type","value":"application/json"}, 
			{"key":"x-access-token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmQyNjg1NGFlNTE0NWU5MTAwNGM5MCIsImlhdCI6MTYxMDg4ODY5MywiZXhwIjoxNjEwOTc1MDkzfQ.p0MrvaN9ASzkG_gMA3my32KmZO6elL8gJXP78tYp2uU"}]
	Body:
	{
		"user_id": "5ffd26854ae5145e91004c90",
		"word": "pilates",
		"link_start": "www.google.com",
		"results": ["test1", "test2", "link_test"]
	}
	
	---------------- -------------- --------------
	
	Response:
	{
		"message": "Crawl registered successfully!"
	}
