import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Project from './components/Project';
import Activities from "./components/Activities";
import Certificate from "./components/Certificates";
import Profile from './components/Profile';

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile/>
      <Experience/>
      <br />
      <Project/>
      <br />
      <Certificate/>
      br
      <Activities/>
    </>
  );
}
