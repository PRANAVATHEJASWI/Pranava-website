import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Project from './components/Project';
import Activities from "./components/Activities";
import Certificate from "./components/Certificates";

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
