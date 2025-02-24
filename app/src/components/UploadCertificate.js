import React, { useState } from "react";
import axios from "axios";

const UploadCertificate = () => {
    const [studentName, setStudentName] = useState("");
    const [eventName, setEventName] = useState("");
    const [category, setCategory] = useState("sports");
    const [certificate, setCertificate] = useState(null);
    const [message, setMessage] = useState("");

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
        } catch (error) {
            setMessage("Upload failed: " + error.message);
        }
    };
    

    return (
        <div>
            <h2>Upload Certificate</h2>
            <form onSubmit={handleUpload}>
                <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
                <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="sports">Sports</option>
                    <option value="culturals">Culturals</option>
                    <option value="academics">Academics</option>
                </select>
                <input type="file" accept=".jpg, .jpeg, .png, .pdf" onChange={(e) => setCertificate(e.target.files[0])} required />
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default UploadCertificate;
