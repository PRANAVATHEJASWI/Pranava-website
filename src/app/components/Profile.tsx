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
