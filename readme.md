DevPoint 

What DevPoint is about
	- creating a platform where engineers can go to to create stylish portfolios and profiles
	- employers can choose to search engineers and observe projects/bios of each unique user
	- creat a profile! It's easy as 1,2,3!

Register
	- register as a user in order to gain access to DevPoint
		- create your own unique username and password 
		- ** you can also reset your current password if your security has been breached ** 

Login
	- login with your username and password to gain access to the user dashboard

Dashboard
	- Sidenav and body contains access to each area of the dashboard
		About Me
			- User will be able to update their personal information, Github, LinkdIN, email, facebook, and stackoverflow account. They can also include a bio of their achievements or goals. 
			- A picture can be uploaded as a profile picture thus giving face to the user for recognization
		Portfolio 
			- User is able to add projects from their own personal portfolio so that they can showcase them on their DevPoint profile
		Inbox
			- User is able to recieve messages sent by employers or friends with job offers or a simple hello.

Client Side Template
	- All updated information from the User's dashboard will be displayed onto the client side template.
		- All click-able icons will display a direct route to the user's github, LinkdIN, facebook, and other websites
		- top-right nav bar contains tabs to access the AboutMe, Portfolio, and Contact pages on the client-side view
			About Me
				- contains the biography of the user and picture in accordance to the template selected
			Portfolio
				- contains each project uploaded by the user	
					- modals will display when each project is clicked on and will show a general summary of the project and links to view/test the project live
			Contact
				- Employers will be able to contact user through this tab and request for further information or provide a job proposal
All information is stored in a backend database using MYSQL to consturct the DB please utltize the scheme.sql and seeds.sql along with sequelize.

Future aspirations for the project: 
	- user would be able to pick and choose multiple profile templates 
		-upon choosing templates all information would automatically update based off of submitted information		
	- employers would be able to search for specific types of developers or engineers simply by specifying search criteria 
	- employers would be able to access each project uploaded by the user and a modal would display the project, a brief description, and a live example (if applicable) to give employers clear insight of each project


Front End 
1. Bootstrap
2. Datatables
3. AJAX
4. Javascript/Jquery


APIs Being Used 
1. Datatables API

Node Modules
1. body-parser
2. express
3. handlebars
4. mysql
5. sequelize
6. bcrypt
7. client-sessions
8. datables
9. morgan
10.passport
11. serve-favicon



