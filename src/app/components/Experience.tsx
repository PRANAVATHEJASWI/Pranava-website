import React from 'react';
import '../styles/Experience.css';
export default function Experience() {
  return (
    <>
<h1 style={{ paddingLeft: '7%' }} className="experience" id="experience">Experience</h1>
<hr style={{ marginLeft: '7%', width: '86%', color: 'white' }} />
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-5">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Company: DigitalShark</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Intern (10/02/2025 - 10/04/2025)</h6>
              <p className="card-text">
                Developed multiple Qt applications, including a CSV-to-SQL converter and company-specific projects. Gained hands-on experience in C++, Qt (Widgets & QML), and SQL.
              </p>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Company: Mysuru Consulting Group (MCG)</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Intern (08/04/2024 - 31/07/2024)</h6>
              <p className="card-text">
                Developed a text classification AI model for categorizing input data effectively Built a real-time TO-DO list application integrated with Firebase for cloudbased data storage and synchronization
              </p>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Organization: Vidyavardhaka College of Engineering</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Role: Peer Trainer (DSA)</h6>
              <p className="card-text">
                Duration: 36 hours (2026 batch training program) Conducted a structured DSA training program for undergraduate students Delivered sessions on Programming Fundamentals, OOP concepts, and both Basic and Advanced Data Structures & Algorithms              
               </p>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
