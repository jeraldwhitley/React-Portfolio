import "./css/Portfolio.css"

const projects = [
    {
      title: 'Weather Dashboard',
      image: '/images/WeatherDashboard.jpg',
      live: '',
      github: 'https://github.com/jeraldwhitley/WeatherDashboard'
    },
    {
        title: 'Aqua Buddy',
        image: '/images/AquaBuddy.jpg',
        live: '',
        github: 'https://github.com/bans-07/Aqua-Buddy'
    },

    
  ];
  
  export default function Portfolio() {
    return (
      <section className= "portfolio-section">
        <h2>Portfolio</h2>
        <div className="project-grid">
          {projects.map((p, index) => (
            <div className= "project-card" key={index}>
              <img src={p.image} alt={p.title} className= "project-img" />
              <h3>{p.title}</h3>
              <a href={p.live} target="_blank">Live</a> | 
              <a href={p.github} target="_blank">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  