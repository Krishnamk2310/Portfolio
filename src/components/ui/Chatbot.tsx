import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Securely access your API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);
//import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Generative AI model
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! I am an AI assistant. Ask me anything about Markandey\'s resume.', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Your resume data, which will be used as context for the AI
  const resumeData = {
    name: 'Markandey Krishna Mishra',
    email: 'krishnamk2310@gmail.com',
    linkedin: 'linkedin.com/in/krishnamk2310',
    location: 'Lucknow',
    education: [
      { institution: 'VIT Bhopal', degree: 'B.Tech Computer Science and Engineering', year: '2022-2026', cgpa: '8.4' },
      { institution: 'Vibgyor High International', degree: 'XII', year: '2020-2021', percentage: '90%' },
      { institution: 'Vibgyor High International', degree: 'X', year: '2018-2019', percentage: '94%' }
    ],
    skills: {
      languages: ['Java', 'JavaScript', 'Node.js', 'HTML', 'CSS'],
      frameworks: ['React.js', 'MongoDB', 'Express-NodeJS', 'Tailwind CSS'],
      libraries: ['Bootstrap', 'Redux Toolkit'],
      tools: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA'],
      other: ['Code Reviews', 'Team Collaboration', 'Effective Communication']
    },
    projects: [
      {
        name: 'Roamly AI Travel Planner',
        description: 'Developed an AI-based travel planner that generates personalized itineraries using Gemini AI, based on destination, budget, duration, and number of travelers. Fetches detailed travel data and integrates Google Maps and Firebase for authentication.',
        techStack: ['React', 'Vite', 'Gemini AI', 'Firebase', 'Google APIs', 'Tailwind CSS']
      },
      {
        name: 'Netflix Clone',
        description: 'Built a Netflix clone web application using React.js featuring sign-in/sign-up authentication with Firebase. Integrated TMDb API to fetch real-time movie data, including trailers and watchlists.',
        techStack: ['React.js', 'Firebase (Authentication & Firestore)', 'TMDb API', 'CSS', 'HTML']
      }
    ],
    experience: [
      {
        company: 'Hindustan Aeronautics Limited (HAL)',
        title: 'Summer Trainee',
        year: '2025',
        description: 'Underwent industrial training with exposure to aircraft and engine assembly processes. Collaborated with engineers to understand aerospace manufacturing workflows, safety protocols, and quality control.'
      }
    ]
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // This is the prompt you will send to Gemini.
      // It instructs the AI on how to behave and provides it with the resume data as context.
      const prompt = `You are a helpful chatbot on Markandey Krishna Mishra's personal portfolio website. Your goal is to answer questions about him based ONLY on the following resume information. Be friendly, concise, and professional. If a question is outside the scope of this resume, politely decline to answer.

      Resume Information: ${JSON.stringify(resumeData)}

      Question: "${inputValue}"

      Answer:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const botMessage = { text: text, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error communicating with Gemini API:", error);
      const errorMessage = { text: 'Sorry, I\'m having trouble connecting. Please try again later.', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '20px', right: '20px', background: '#007BFF', color: 'white',
          borderRadius: '50%', width: '60px', height: '60px', border: 'none', cursor: 'pointer',
          fontSize: '24px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1000
        }}
      >
        💬
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '100px', right: '20px', width: '350px', height: '500px',
          border: '1px solid #ccc', borderRadius: '10px', background: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', zIndex: 1000
        }}>
          <div style={{ background: '#007BFF', color: 'white', padding: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
            <h4>AI Assistant</h4>
          </div>

          <div style={{ flex: 1, padding: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                margin: '5px 0'
              }}>
                <span style={{
                  background: msg.sender === 'user' ? '#007BFF' : '#EAEAEA',
                  color: msg.sender === 'user' ? 'white' : 'black',
                  padding: '10px 15px', borderRadius: '18px',
                  maxWidth: '250px', display: 'inline-block', textAlign: 'left'
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start' }}>
                <span style={{ background: '#EAEAEA', color: 'black', padding: '10px 15px', borderRadius: '18px' }}>
                  ...
                </span>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ccc' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <button onClick={handleSendMessage} style={{
              background: '#007BFF', color: 'white', border: 'none', padding: '10px 15px',
              marginLeft: '10px', borderRadius: '5px', cursor: isLoading ? 'not-allowed' : 'pointer'
            }} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;