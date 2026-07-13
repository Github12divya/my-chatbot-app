================================================================
  FASTAPI + MYSQL BACKEND — SETUP GUIDE
  For connecting to your React + Dialogflow Frontend
================================================================

FOLDER STRUCTURE (after extracting):
--------------------------------------
your-react-project/
├── src/                   ← your existing React code
├── public/
├── package.json
└── backend/               ← extract this folder here
    ├── main.py
    ├── auth.py
    ├── chat.py
    ├── database.py
    ├── models.py
    ├── middleware.py
    ├── requirements.txt
    ├── setup_database.sql
    ├── react_api.js        ← copy this to your React src/ folder
    └── .env

================================================================
STEP 1 — SETUP DATABASE
================================================================
1. Open MySQL Workbench (or MySQL terminal)
2. Open the file: setup_database.sql
3. Run it — this creates your database and tables automatically

================================================================
STEP 2 — CONFIGURE YOUR .env FILE
================================================================
Open backend/.env and fill in your MySQL password:

  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE   ← change this
  DB_NAME=chatbot_db
  JWT_SECRET=supersecretkey123

================================================================
STEP 3 — INSTALL PYTHON PACKAGES
================================================================
Open VS Code terminal, go inside the backend folder:

  cd backend
  pip install -r requirements.txt

================================================================
STEP 4 — RUN THE BACKEND
================================================================
Still inside backend folder:

  uvicorn main:app --reload

Backend is now live at: http://localhost:8000
View API docs at:       http://localhost:8000/docs

================================================================
STEP 5 — CONNECT REACT FRONTEND
================================================================
1. Copy react_api.js into your React project at: src/api.js
2. Install axios in your React project:
   npm install axios
3. Use it in your components (see examples inside react_api.js)

================================================================
STEP 6 — RUN BOTH TOGETHER IN VS CODE
================================================================
Open 2 terminals in VS Code (click + button in terminal panel):

  Terminal 1 (React):
    npm start
    → runs at http://localhost:3000

  Terminal 2 (Backend):
    cd backend
    uvicorn main:app --reload
    → runs at http://localhost:8000

================================================================
API ENDPOINTS QUICK REFERENCE
================================================================
  POST  /auth/register    → Register new user
  POST  /auth/login       → Login, returns JWT token
  POST  /chat/save        → Save a chat message (requires login)
  GET   /chat/history     → Get all chat history (requires login)

================================================================
NEED HELP?
================================================================
Test all your API routes visually at: http://localhost:8000/docs
This page is provided free by FastAPI — no extra setup needed!

================================================================
