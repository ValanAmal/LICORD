import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./upload.css";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [studentName, setStudentName] = useState('');
  const [eventName, setEventName] = useState('');
  const [category, setCategory] = useState('sports');
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get("http://localhost/student_ranking_api/get_certificates.php");
      console.log("Fetched files:", response.data);
      console.log("Type of files:", typeof response.data);
      console.log("Is array:", Array.isArray(response.data));
      
      
      setFiles(response.data);
    } catch (error) {
      setMessage("Failed to fetch certificates: " + error.message);
    }
  };
  
  

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length) {
      addFile(droppedFiles[0]);
    }
  };

  const addFile = (file) => {
    setFiles([...files, { name: file.name, size: `${file.size} bytes` }]);
    setCertificate(file);
  };

  const handleDelete = async (id) => {
    console.log("Deleting certificate with id:", id); 
    if (!id) {
      setMessage("Invalid certificate ID");
      return;
    }
    try {
      await axios.delete(`http://localhost/student_ranking_api/delete_certificate.php?id=${id}`);
      console.log('Fetched files:', files);
      console.log('Type of files:', typeof files);
      console.log('Is array:', Array.isArray(files));

      setFiles(files.filter((file) => file.id !== id));
      setMessage("Certificate deleted successfully");
    } catch (error) {
      setMessage("Failed to delete certificate: " + error.message);
    }
  };
  

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("student_name", studentName);
    formData.append("event_name", eventName);
    formData.append("category", category);
    formData.append("certificate", certificate);

    try {
      const response = await axios.post(
        "http://localhost/student_ranking_api/upload_certificate.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage(response.data.message);
      fetchCertificates();
    } catch (error) {
      setMessage("Upload failed: " + error.message);
    }
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <p className="name">SARATH</p>
          <p className="role">CSE</p>
        </div>
        <nav className='form1'>
          <button><a href="./home">🏠 Home</a></button>
          <button>👤 Profile</button>
          <button>📈 Achievements</button>
          <button>⚙️ Settings</button>
          <button>💬 Help & Support</button>
        </nav>
        <button className="logout">Log Out</button>
      </aside>
      <main className="content">
        <header>
          <button className="button-rounded">&larr; Back</button>
          <h2>My Certificates</h2>
          <button className="button-rounded">Share</button>
        </header>
        <form className="com" onSubmit={handleUpload}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="sports">Sports</option>
            <option value="culturals">Culturals</option>
            <option value="academics">Academics</option>
          </select>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={(e) => addFile(e.target.files[0])}
            required
          />
          <button type="submit">Upload</button>
        </form>
        <p>{message}</p>
        <div className="attached-files">
          <header>
            <h3>Attached Files</h3>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </header>
          <table className="file-table">
            <thead>
              <tr>
                <th>File Names</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {filteredFiles.map((file) => {
                console.log(file); // Check what's inside file
                    return (
                      <tr key={file.id}>
                       <td>{file.name}</td>
                         <td>{file.size}</td>
                        <td>
                            <button className="edit">Edit</button>
                            <button
                              className="delete"
                              onClick={() => handleDelete(file.id)} // Make sure this is "id"
                            >
                              Delete
                           </button>
                             </td>
                               </tr>
                              );
             })}

            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Upload;
