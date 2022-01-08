# Web-Crawler-Project-CC

Ghid instalare + configurare setup:

Pentru mongodb:
	->GUI: https://www.mongodb.com/try/download/compass
	->instalation guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
	
Pentru backend:
	->sudo apt-get install npm
	->!! in proiect !!   npm install
	
	
Utilizare din postman:
	-> pentru SignUp:
	
	POST http://localhost:8080/api/auth/signup
	Headers: [{"key":"Content-Type","value":"application/json"]
	Body:
	{
		"username": "Gabi cel viteaz",
		"email": "calutu@alb.com",
		"password": "AnaAreMere",
		"roles": ["admin", "user"]
	}
	
	---------------- -------------- --------------
	
	Response:
	{
		message: "User was registered successfully!"
	}
						SAU
	{
		message: "Failed! Username is already in use!"
	}
	
	>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<
	
	-> pentru SignIn:
	
	POST http://localhost:8080/api/auth/signin
	Headers: [{"key":"Content-Type","value":"application/json"]
	Body:
	{
		"username": "Gabi cel viteaz",
		"password": "AnaAreMere"
	}
	
	---------------- -------------- --------------
	
	Response:
	{
		"id": "5ffd26854ae5145e91004c90",
		"username": "Gabi cel viteaz",
		"email": "calutu@alb.com",
		"roles": [
		    "ROLE_USER",
		    "ROLE_ADMIN"
		],
		"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmQyNjg1NGFlNTE0NWU5MTAwNGM5MCIsImlhdCI6MTYxMDg4ODY5MywiZXhwIjoxNjEwOTc1MDkzfQ.p0MrvaN9ASzkG_gMA3my32KmZO6elL8gJXP78tYp2uU"
	}
