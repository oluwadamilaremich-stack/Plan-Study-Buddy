# Plan Study Buddy (Devs Use)

A comprehensive study planning and session tracking application built with React, Vite, and Firebase. Features an AI-powered assistant to help you with your studies.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

This project requires several API keys to function correctly. **The `.env` file is ignored by Git for security.** 

Create a file named `.env` in the root directory and add the following variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

VITE_GROQ_API_KEY=your_groq_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### Running the App

```bash
npm run dev
```

## Features

- **AI Study Assistant:** Get help with topics using Groq and Gemini AI.
- **Study Sessions:** Track your study time and take notes.
- **Subject Management:** Organize your study plan by subjects and topics.
- **Firebase Integration:** Secure authentication and data storage.

## License

MIT
