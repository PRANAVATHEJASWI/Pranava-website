import React from 'react'
import '../styles/Experience.css';

export default function Activities() {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold mb-4 " id='activities' style={{color: 'white', paddingLeft: '7%'}}>Extracurricular Activities</h2>
      <hr style={{ marginLeft: '7%', width: '86%', color: 'white' }} />
      <ul className="list-disc list-inside space-y-2" style={{color: 'white', paddingLeft: '7%'}}>
        <li>Served as Junior Under Officer in NCC, DBC College (2020–21)</li>
        <li>Social Media Head in ACM, VVCE</li>
        <li>Conducted two workshops and served as a resource person at VVCE on web technology</li>
        <li>Volunteered for Infothon 1: 12-hour National Level Hackathon</li>
        <li>Co-ordinator of Infothon 2.0 & 3.0: 24-hour National Level Hackathons</li>
        <li>Volunteered for Infothon 4.0: 24-hour National Level Hackathon</li>
        <li>Participated in multiple Hackathons and Ideathons</li>
        <li>Organized more than 30 events in college, NCC, and other platforms</li>
        <li>Completed Tabla Junior certification</li>
      </ul>
    </div>
  );
}
