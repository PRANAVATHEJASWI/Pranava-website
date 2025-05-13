import React from 'react';
import '../styles/Experience.css';
export default function Project() {
  return (
    <>
<h1 style={{ paddingLeft: '7%' }} className="experience" id="projects">Projects</h1>
<hr style={{ marginLeft: '7%', width: '86%', color: 'white' }} />
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-5">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Proctoring System with AI-Driven Automated Exam Management</h5>
              <p className="card-text">
                Built a Flask-based automated exam platform with real-time face/eye
                tracking, object detection (YOLO), and audio transcription (Whisper).
                Integrated Firebase for cloud data storage and AI for response evaluation.
                Tech Stack: Flask, OpenCV, MediaPipe, YOLO, Dlib, Whisper, Firebase,
                Generative AI, Flask-Mail              
                </p>
              <a href="#" className="card-link">link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Official Website Infothon (24 hrs national level Hackathon):</h5>
              <p className="card-text">
                Designed and deployed official website of Infothon 2.0 which is a 24
                hours National Level Hackathon.
                Tech stack : HTML,CSS,Bootstrap,Javascript, .xyz domain registration
                and Gitpages for deployment.              </p>
                <a href="https://infothon.vvce.ac.in" className="link" target="_blank" rel="noopener noreferrer">link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Swap and share (Prototype)</h5>
              <p className="card-text">
                Created a web application prototype
                facilitating the reuse of unnecessary items by connecting donors with
                those in need.
               </p>
                <a href="https://swapnshare.streamlit.app" className="link" target="_blank" rel="noopener noreferrer">link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Text Classifier</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Peer Trainer (DSA)</h6>
              <p className="card-text">
                Designed an AI model to classify text into positive or
                negative sentiments and visualize the results.
                Tech Stack: Hugging Face, Streamlit, Firebase.</p>
                <a href="https://text-classifier-team-3.streamlit.app" className="link" target="_blank" rel="noopener noreferrer">link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">TO-DO list</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Peer Trainer (DSA)</h6>
              <p className="card-text">
                Developed a TO-DO list application integrated with Firebase
                for real-time data management.               </p>
                <a href="https://to-do--list.streamlit.app" className="link" target="_blank" rel="noopener noreferrer">link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Density based traffic light system</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Peer Trainer (DSA)</h6>
              <p className="card-text">
                    This project uses ultrasonic sensors
                    and an Arduino microcontroller to automatically adjust signal timings
                    based on real-time traffic density, thereby optimizing traffic flow, reducing
                    waiting times, and minimizing accidents.
                    Tech stack : Embedded C , IoT,aurdino mega with ultrasonic sensors
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
