# TASKIFY
![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/5e7ab201-ac99-4096-8f64-83557f661738)
![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/ec61088b-8750-414b-a992-7315aa10e121)
![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/dad510ee-89fe-4036-8a16-772e6460c442)
![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/263760c5-beae-43fc-9fb1-80c9992543dd)

## About 
Taskify is a MERN application that helps organizations manage tasks and distribute them among employees. It also has a real-time commenting system below each task. This allows team members to collaborate and communicate effectively on tasks, which can lead to increased productivity and efficiency.
## Frontend Structure
![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/48493944-cb8a-4b3b-9d46-c44c5ae2ed1c)
- All API are located in the Api folder

## Backend Structure

![image](https://github.com/warriorBunny013/TASKIFY-MERN/assets/97738453/04621e31-f121-4a9c-bf81-0254abef20be)
- MVC(Model-view-Controller) architecture followed

# Techonology used:
- NodeJS
- ExpressJS
- MongoDB Atlas
- ReactJS
- Redux 
(check out taskify previous version implemented with redux and local storage:https://taskify-simpler-way-to-manage-tasks.vercel.app)
- MaterialUI
- Tailwindcss
- Realtime Cloud Firestore for storing chats
- firebase authentication
- Vercel for frontend deployment and Render for backend deployment

# Features
- Simple landing page, Authentication with firebase(Registration,login,logout)
- Overview page: Displays Total tasks created , In progress Tasks and completed tasks.
- Tasks management page: Displays the tasks created previous (fetched from mongodb atlas)
- Create new tasks, Update tasks, Delete tasks, Mark as done functionalities
- With Commenting functionalities below each tasks(implemented with Firestore cloud).

# Local Setup
- Git clone the repository.
- Open two terminals
## Backend setup
- cd backend
- yarn (to install all the dependencies)
- yarn start

## Frontend setup
-cd frontend
-yarn
-yarn start

# challenges faced:
- Faced problem in deploying the backend api as the MongoDB atlas was not able to connect.
- To overcome this issue:Firstly I set up a node engine in my package.json
-  I changed the location of both my database and Render(deploy). 
-  Then changed the IP address to allow worldwide(0.0.0.0).

