# Travel Assistant Chatbot  
## Description  
This is a web-based travel assistant chatbot that helps users plan their trips by suggesting destinations, finding flights and accommodations, and providing travel tips. The project folder is named `travel_assistant`, and it includes a frontend built with React and a backend powered by Flask and OpenAI's GPT-3.5.  
## Features  
- Recommends travel destinations based on user preferences.  
- Searches for flight and hotel deals using public travel APIs.  
- Provides personalized travel tips and local insights.  
- Displays a typing indicator for a more interactive experience.  
- Styled chat interface with user and bot avatars.  
## Requirements  
### Frontend  
- Node.js  
- Required Libraries:  
    - React  
    - Axios  
    - React Router  
### Backend  
- Python 3.x  
- Required Libraries:  
    - Flask  
    - Flask-CORS  
    - OpenAI  
    - python-dotenv  
    - requests  
## Setup & Usage  
### 1. Clone the Repository:  
```bash
git clone https://github.com/joyyy-99/travel_assistant.git
cd travel_assistant
```
### 2. Frontend Setup (React)  
```bash
cd frontend
npm install 
npm install axios
npm start
```
- React app will be running at `http://localhost:3000`  
### 3. Backend Setup (Flask)  
Open a new terminal and navigate to the backend:  
```bash
cd ../backend
python -m venv venv
.\venv\Scripts\activate # On Windows
source venv/bin/activate # On MacOS/Linux
pip install -r requirements.txt
pip install flask-cors
pip install openai==0.28 
pip install python-dotenv
flask --app app run
```
- Flask server will be running at `http://localhost:5000`  
## Environment Variables  
Create a `.env` file in the `backend` directory with the following:  
```env
OPENAI_API_KEY=your_openai_api_key_here
```
## Planned Deployment  
This project is ready for deployment but is not live yet. Planned platforms:  
- **Frontend**: Vercel  
- **Backend**: Render  
## Repository Structure  
```
travel_assistant/
│
├── backend/
│ ├── app.py # Flask backend with OpenAI integration
│ └── .env # Environment variables (not pushed to GitHub)
│
└── frontend/
    ├── public/
    │ └── bot_avatar.webp # Favicon and bot avatar
    │
    ├── src/
    │ ├── assets/ # Avatar images and other assets
    │ ├── App.js # Main React component (Chat Interface)
    │ ├── App.css # Styling for Chat Interface
    │ ├── index.js # ReactDOM Render
    │ └── index.css # Global styles
    │
    └── package.json # Frontend dependencies
```
## Acknowledgments  
- OpenAI for GPT-3.5 conversational AI.  
- React and Flask for seamless frontend and backend integration.
