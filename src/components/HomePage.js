import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const templates = [
  { id: 1, title: "Interactive Learning", description: "Learn through interactive exercises" },
  { id: 2, title: "AI Exercises", description: "Practice AI concepts" },
  { id: 3, title: "ML Tutorials", description: "Machine Learning basics" },
  { id: 4, title: "Deep Learning Basics", description: "Neural network fundamentals" },
  { id: 5, title: "Natural Language Processing", description: "NLP concepts and applications" },
  { id: 6, title: "AI in Education", description: "AI tools in education" },
  { id: 7, title: "Ethics in AI", description: "Ethical considerations in AI" },
  { id: 8, title: "Data Visualization", description: "Visualize your data effectively" },
  { id: 9, title: "AI and Robotics", description: "Exploring AI in Robotics" },
  { id: 10, title: "AI Basics", description: "Introduction to AI concepts" },
  { id: 11, title: "Future of AI", description: "Exploring future trends in AI" },
];

const gradients = [
  "linear-gradient(to right, #e7489f,#aa54f3",
  "linear-gradient(to right,#06b6d0, #13b8a6)",
  "linear-gradient(to right,#f86f19, #ef4542)",
  "linear-gradient(to right,#3d80f5, #6266f1)",
  "linear-gradient(to right,#f76e6e, #e94b4b)",
  "linear-gradient(to right,#f9cb14, #e2ab0c)",
  "linear-gradient(to right,#c181f7, #ec4797)",
  "linear-gradient(to right, #7f8bf7,#5d86f6)",
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/form"); // Navigate to the FormPage
  };

  useEffect(() => {
    const filtered = templates.filter(template =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTemplates(filtered);
  }, [searchTerm]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <nav className="my-4">
        <div className="container">
          <h1 className="text-center mb-4">Educational AI Repository</h1>
          <div className="text-center">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control mb-3 w-50 mx-auto"
            />
            {user ? (
              <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <Button variant="primary" onClick={handleLogin}>Login with Google</Button>
            )}
          </div>
        </div>
      </nav>

      <main className="container my-5">
        <div className="row g-4">
          {filteredTemplates.map((template, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <div
                key={template.id}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <div
                  style={{
                    background: gradient,
                    padding: "20px",
                    borderRadius: "10px",
                    color: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                    width: "100%", // Ensures consistent card width
                    height: "250px", // Set a fixed height for all cards
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onClick={handleNavigate}
                >
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="mb-4">{template.description}</p>
                  <div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
