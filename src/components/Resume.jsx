
  
export default function Resume() {
    return (
      <section className="section-container">
        <h2>Resume</h2>
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 Download My Resume
        </a>
  
        <h3>Proficiencies:</h3>
        <ul className="proficiencies-list">
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL & NoSQL</li>
          <li>REST APIs</li>
        </ul>
      </section>
    );
  }
  