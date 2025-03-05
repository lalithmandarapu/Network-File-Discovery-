# Network File Discovery 

This project is designed to allow computers connected to the same network to discover each other and share a list of files they have. All computers register themselves with a central server, which maintains a record of each computer and its files. Additionally, the system logs all actions such as computer registration, file updates, and deletions for forensic and auditing purposes.

Project Type: Full Stack (Backend - Node.js, Database - MongoDB, Frontend - React.js)

Main Purpose of the Project:
- To allow computers on the same network to know what files other computers have.
- To provide a web interface to view these computers and their files.
- To maintain forensic logs for cyber forensics, ensuring every action is tracked.

---

Features:
- Computer Discovery on Same Network
- File Listing per Computer
- Forensic Logs for all actions
- Real-time updates using Socket.IO (optional)
- Admin Dashboard to view computers and logs

---

Technologies Used:
- Backend: Node.js with Express.js
- Database: MongoDB using Mongoose
- Frontend: React.js
- Real-time Communication: Socket.IO (optional)
- Cyber Forensics: Logs stored in MongoDB for auditing

---

Folder Structure:
backend/
- models/
    Computer.js (Schema for computer data)
    ForensicLog.js (Schema for forensic logs)
- routes/
    computerRoutes.js (Routes for computer management)
    logRoutes.js (Routes for log management)
- controllers/
    computerController.js (Business logic for computers)
    logController.js (Business logic for logs)
- db.js (MongoDB connection file)
- server.js (Main entry point for backend server)

frontend/
- src/
    components/
        ComputerList.js (Component to list computers and their files)
        ForensicLogs.js (Component to list forensic logs)
    App.js (Main React component)
    index.js (React application entry point)

---

How to Run the Project:

Step 1 - Start MongoDB:
Ensure MongoDB service is running locally.
You can use MongoDB Compass to create a database called networkFilesDB.

Step 2 - Start Backend Server:
cd backend
npm install
node server.js
The backend will run at: http://localhost:3000

Step 3 - Start Frontend Server:
cd frontend
npm install
npm start
The frontend will run at: http://localhost:3001

---

MongoDB Connection URL:
mongodb://127.0.0.1:27017/networkFilesDB

This connection string connects to:
- Host: localhost (127.0.0.1)
- Port: 27017
- Database: networkFilesDB

---

Database Collections:

computers:
This collection stores all computers registered on the network, along with their IP address and file list.

forensiclogs:
This collection stores logs of all actions (register, update, delete), including timestamps, computer name, IP address, and action type.

---

Sample Data Examples:

Computer Document:
{
    "name": "Computer1",
    "ipAddress": "192.168.1.10",
    "files": ["file1.txt", "file2.pdf"],
    "lastUpdated": "2025-02-24T10:30:00Z"
}

Forensic Log Document:
{
    "action": "File Update",
    "fileName": "file2.pdf",
    "computerName": "Computer1",
    "ipAddress": "192.168.1.10",
    "timestamp": "2025-02-24T10:35:00Z"
}

---

API Endpoints:

Computer Management:
GET /api/computers - Fetch list of all computers
POST /api/computers/register - Register a computer or update its file list

Forensic Log Management:
GET /api/logs - Fetch list of all forensic logs

---

Cyber Forensics Features:
- Every action (computer registration, file update, file deletion) is logged in the forensiclogs collection.
- Logs include:
    Action Type (Register, Update, Delete)
    Computer Name
    IP Address
    Timestamp
    File Name (if applicable)

---

Key Purpose of MongoDB in this Project:
- To store the list of computers connected to the network.
- To store the list of files each computer is sharing.
- To store forensic logs for every action, allowing audit trails for forensic analysis.
- MongoDB allows easy querying, updating, and deleting of records, making it suitable for this project.

---

Future Enhancements (Optional):
- Add user authentication for secure access.
- Add file download or preview options.
- Add search and filtering to forensic logs.
- Add alerts for suspicious activity (e.g., file deletion logs).

---

Contact:
For any issues, suggestions, or feature requests, please raise an issue in the GitHub repository.

