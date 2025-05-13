// components/Navbar.tsx
'use client';
import Link from 'next/link';
import '../styles/navbar.css';  // Import the CSS file
import { useState } from 'react';

export default function Navbar() {
  return (
    <>
    <nav className={`navbar`}>
        <div className="nav-links space-x-4">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="#experience" className="hover:text-cyan-400 transition">Experience</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#Certificate" className="hover:text-cyan-400 transition">Certification/Short Courses</Link>
          <Link href="#activities" className="hover:text-cyan-400 transition">activities</Link>
        </div>
    </nav>
    </>
  );
}
