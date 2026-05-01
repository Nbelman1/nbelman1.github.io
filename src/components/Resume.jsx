import resume from "../assets/SWD-Resume-Noah-Belman.pdf";

const Resume = () => {
  return (
    <>
      <section>
        <h1 className="centered">Resume</h1>

        <a
          href={resume}
          download="Resume-Noah-Belman.pdf"
          className="centered resume"
        >
          Download PDF
        </a>

        <h2 className="centered">Education</h2>
        <div>
          <ul>
            <li>
              <strong>LaunchCode</strong> - Software Development Bootcamp (2025
              - 2026)
            </li>
            <li>
              <strong>University of Pittsburgh</strong> - BSBA, Marketing
            </li>
          </ul>
        </div>

        <div>
          <h2 className="centered">Experience Summary</h2>

          <ul>

            <li>
              <strong>Reactive Roots</strong> - Full-Stack Capstone Project
              <ul>
                <li>
                  Browser-based RPG game engine with real-time state management and persistent player progress, built with React, Spring Boot, and MySQL
                </li>
                <li>
                  REST API connects a live frontend to a relational database, with route-based rendering and guard logic guiding the player experience
                </li>
              </ul>
            </li>

            <li>
              <strong>CarFinder</strong> - LaunchCode Unit 1 Project
              <ul>
                <li>
                  Interactive web app delivering personalized car recommendations through a dynamic preference quiz and data-driven UI
                </li>
              </ul>
            </li>

            <li>
              <strong>Administrative Assistant</strong> - PennReach (2025 -
              current)
              <ul>
                <li>Support technology adoption and analyze data to improve internal processes in a healthcare-adjacent environment</li>
              </ul>
            </li>

            <li>
              <strong>Business Administrator</strong> - Ardmore Toyota (2024 -
              2025)
              <ul>
                <li>
                  Managed sensitive customer and financial data across multiple systems with cross-functional and vendor collaboration
                </li>
              </ul>
            </li>

          </ul>

        </div>

        <div>
          <h2 className="centered">Tech Stack</h2>
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript, Java, HTML, CSS
            </li>
            <li>
              <strong>Frameworks:</strong> React, Spring Boot
            </li>
            <li>
              <strong>Tools:</strong> Git/GitHub, npm, Postman, MySQL
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Resume;
