# RPGManagerApp
## Name : Ema Radojcic
## GNo : G00343805

## Project Description
This project is a MEAN stack GMIT project that allows a user to add, edit, delete and show values from a MongoDB database.
This porject allows users to create player for a RPG type game and save the player information to the database.

## Prerequisites 
User must first install node.js and install angular CLI to test
npm install -g @angular/cli

Before serving, you must also install angular animations
npm install @angular/animations@latest --save

The following also must be installed in the terminal 
npm install mongoose
npm install cors

Then, you can serve the project by running ng serve

## User Guide
### Login Component 
The opening page is a login component where the user is able to create a user name and password which will be saved to the DB.
The Login component will then check the user values against the what is in the database and if it returns successfully then it will send the user to the read component. 
<br>
<a href="https://imgflip.com/gif/3i2pxs"><img src="https://i.imgflip.com/3i2pxs.gif" title="made at imgflip.com"/></a>
<br>
### Create Player
To create a player, the user must go to the creative component and add in the user details. If any of the fields are left blank then they will glow red or if you enter values less than 100 then an alert will prompt the user to enter a value lower than 100. The form will not submit until these conditions are met.
<br>
<a href="https://imgflip.com/gif/3i2qa5"><img src="https://i.imgflip.com/3i2qa5.gif" title="made at imgflip.com"/></a>
<br>
### Read
To see all the player in the DB the user can go to the read component and a list of all player names will show. Once the drop down is clicked,  all the revalent user information will be shown such as the name, guild, level, mana and dex levels.

### Edit
To edit players the user must go to the read component and drop down the user details. On pressing the edit button, they will be taken to a page where they can change the values of the player accordingly.
<br>
<a href="https://imgflip.com/gif/3i2qdb"><img src="https://i.imgflip.com/3i2qdb.gif" title="made at imgflip.com"/></a>

### Delete
To delete players user must go to the read component and drop down the user details. On pressing the delete button, the db will delete the user.
<br>
<a href="https://imgflip.com/gif/3i2qih"><img src="https://i.imgflip.com/3i2qih.gif" title="made at imgflip.com"/></a>

### Search
<br>
There is a search bar on top of the read component. As the user types, all the user names that contain the characters within the search bar are shown.<br>
<a href="https://imgflip.com/gif/3i2qse"><img src="https://i.imgflip.com/3i2qse.gif" title="made at imgflip.com"/></a>
