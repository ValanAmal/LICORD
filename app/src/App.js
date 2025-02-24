import { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { sendOTP, verifyOTP } from "./service";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import Dashboard from "./components/home";
import RankBoard from "./components/Rank";
import Calendar from "./components/Calendar";
import ProtectedRoute from "./ProtectedRoute";
import UploadCertificate from "./components/UploadCertificate";
import Upload from "./components/upload";

const LicetAnimation = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    setFadeOut(true);
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <div className={`container ${fadeOut ? "fade-out" : "fade-in"}`}>
      <a href="https://licet.ac.in/"><img src={logo} alt="Licet" className="logo" /></a>
      <div className="text-content">
        <h1 className="licet">LICET's</h1>
        <Link
          to="/home"
          onClick={(e) => handleNavigation(e, "/home")}
          className="licord"
        >
          Li-cord
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LicetAnimation />} />
        <Route path="/home" element={<NevaJoLogin/>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/Rank" element={<ProtectedRoute><RankBoard /></ProtectedRoute>} />
        <Route path="/Calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/UploadCertificate" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

const NevaJoLogin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const navigate = useNavigate();
  
  const handleLoginSuccess = () => {
    console.log("Login successful!");
    navigate("/dashboard");
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@licet\.ac\.in$/;

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setMessage("");


    if (!emailPattern.test(email)) {
      setMessage("Enter a valid LICET email ID.");
      return;
    }

    if (!username.trim()) {
      setMessage("Username is required.");
      return;
    }

    setLoading(true);
    try {
      const data = await sendOTP(email);
      if (data.success) {
        setShowOtpSection(true);
        setMessage("OTP sent to your email.");
      } else {
        setMessage("Failed to send OTP: " + data.error);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setMessage("");
  
    if (!otp.trim()) {
      setMessage("Enter the OTP.");
      return;
    }
  
    setLoading(true);
    try {
      const data = await verifyOTP(email, otp);
      if (data.success) {
        sessionStorage.setItem("isVerified", "true"); 
        handleLoginSuccess(); 
        navigate("/dashboard");
      } else {
        setMessage("Invalid OTP, please try again.");
      }
    } catch (error) {
      setMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
    {fadeIn && (
    <div >
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="title">LICORD</div>
      <div className="left-text">
        THIS IS A PAGE
        <br />
        FOR THE STUDENTS
        <br />
        BY THE STUDENTS
        <br />
        OF THE STUDENTS
      </div>
      <div className="login-container">
        <h2 className="">WELCOME</h2>
        {message && <p className="error-message">{message}</p>}
        
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={handleSendOTP}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Get OTP"}
          </button>

          {showOtpSection && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={handleVerifyOTP}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )}
        
      </div>
    </div>
      )}</div>
  );
};

export default App;
