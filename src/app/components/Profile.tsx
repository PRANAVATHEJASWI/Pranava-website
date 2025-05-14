'use client';
‎next.config.ts
+4
-1
Original file line number	Diff line number	Diff line change
@@ -1,7 +1,10 @@
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // ✅ Add this
  allowedDevOrigins: ['http://192.168.56.1', 'http://localhost:3000'],
};

export default nextConfig;
‎package-lock.json
+192
-2


Some generated files are not rendered by default. Learn more about customizing how changed files appear on GitHub.
‎package.json
+9
-6


Original file line number	Diff line number	Diff line change
@@ -9,19 +9,22 @@
    "lint": "next lint"
  },
  "dependencies": {
    "bootstrap": "^5.3.6",
    "next": "15.3.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.2"
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4.1.5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "@eslint/eslintrc": "^3"
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.5",
    "typescript": "^5"
  }
}
‎postcss.config.mjs
+7
-5
Original file line number	Diff line number	Diff line change
@@ -1,5 +1,7 @@
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Correct Tailwind PostCSS plugin
    autoprefixer: {},
  },
}
‎public/Pranava_pic.jpg
17.6 KB



‎public/email.png
41.9 KB



‎public/file.svg
-1
This file was deleted.
‎public/globe.svg
-1
This file was deleted.
‎public/next.svg
-1
This file was deleted.
‎public/profilepic.jpg
59.8 KB



‎public/vercel.svg
-1
This file was deleted.
‎public/window.svg
-1
This file was deleted.
‎src/app/components/Activities.tsx
+22
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,22 @@
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
‎src/app/components/Certificates.tsx
+31
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,31 @@
import React from 'react';
import '../styles/Experience.css';
export default function Certificate() {
  return (
    <>
<h1 style={{ paddingLeft: '7%', color: 'white' }} className="Certificate" id="Certificate">Certificates</h1>
<hr style={{ marginLeft: '7%', width: '86%', color: 'white' }} />
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-7">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Google cloud platform Data Engineer path</h5>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Google cloud platform Data Analyst path</h5>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
‎src/app/components/Experience.tsx
+50
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,50 @@
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
‎src/app/components/Navbar.tsx
+21
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,21 @@
// components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../styles/Profile.css'; // You can style with a separate CSS/SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Profile = () => {
  return (
    <div className="home" id="home">
      <div className="center fade-in">
      <div className="image-container">
        <Image
          className="profile"
          src="/profilepic.jpg"
          alt="Profile picture"
          width={247}
          height={247}
          style={{ borderRadius: '10cm' }}
        />
      </div>

        <div className="details">
        <h2 className="fade-in" style={{ paddingTop: '1cm', color: 'white' }}>
          <span style={{ color: '#ffc107', fontSize: '0.5cm' }}>I am</span>{' '}
          Pranava Thejaswi N M
        </h2>
        <h6 className="fade-in" style={{ fontWeight: 400, color: 'white', fontSize: '0.3cm'}}>
          Student
        </h6>
        <h5 className="fade-in" style={{ fontWeight: 400, color: 'white', fontSize: '0.4cm' }}>
          Department of Information Science Engineering
        </h5>
        <h5 className="fade-in" style={{ fontWeight: 400, color: 'white', fontSize: '0.4cm' }}>
          Vidyavardhaka College of Engineering, Mysuru
        </h5>
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '0.3cm', alignItems: 'center' }}>
          <Image src="/email.png" alt="Email icon" width={25} height={25} />
          <p style={{ color: 'white' }}>Email : pranavathejaswi8@gmail.com</p>
        </div>
        </div>
        <div className="Media">
          <Link href="https://www.instagram.com/pranava_thejaswi_n_m/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100083137009512" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://www.linkedin.com/in/pranava-thejaswi-neraniki-mathad-77a12924a/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="https://github.com/PRANAVATHEJASWI" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Profile;
