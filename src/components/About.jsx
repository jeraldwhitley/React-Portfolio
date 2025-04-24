import profilePic from '../assets/profile.jpg';
import "../App.css"
export default function About() {
  return (
    <section className= "section-container">
      <h2>About Me</h2>
      <img className= "about-photo" src={profilePic} alt="Picture of Jerald Whitley, Jr." />
      <p>Hello! My name is Jerald. I’m an aspiring web developer passionate about building fast, accessible, and beautiful web applications.</p>
    </section>
  );
}
