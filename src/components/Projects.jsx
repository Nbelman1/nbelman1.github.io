import carFinderDemo from '../assets/carfinder-demo.png';
import reactiveRootsDemo from '../assets/reactive-roots-create-account.png';

const Projects = () => {
    return (
        <>
            <section>

                <h2 className='centered'>Projects</h2>

                    <h3 className='centered'>Reactive Roots</h3>
                    <p className='centered'><em>LaunchCode Capstone Project</em></p>
                    
                    <div className='centered-row'>
                        <a href='https://reactive-roots.vercel.app/' target="_blank">
                            <img className='globe-logo'
                                src='/images/wwwLogo.png' 
                                alt='World wide web globe'
                            />
                        </a>

                        <a href='https://github.com/Nbelman1/final-project-u2-reactive-roots' target="_blank">
                            <img className='github-logo'
                                src='/images/gitHubLogo.png' 
                                alt='GitHub logo'
                            />
                        </a>

                    </div>

                    <div className='centered'>
                        <a href='https://reactive-roots.vercel.app/' target="_blank">
                            <img className='landscape-pic'
                                src={reactiveRootsDemo}
                                alt='Reactive Roots create account screen'
                            />
                        </a>
                    </div>

                        <ul>
                            <li>
                                Built a browser-based RPG game engine with real-time state management, timer logic, and persistent player progress across sessions
                            </li>
                            <li>
                                Designed and implemented core game mechanics using React and Spring Boot, connecting a live frontend to a REST API backed by a MySQL database
                            </li>
                            <li>
                                Crafted an immersive player experience with route-based rendering and guard logic to guide users through gameplay interactions
                            </li>
                        </ul>
                <br />

                    <h3 className='centered'>CarFinder</h3>
                    <p className='centered'><em>LaunchCode Unit 1 Project</em></p>
                    
                    <div className='centered-row'>
                        <a href='https://nbelman1.github.io/unit1-final-project-carFinder/' target="_blank">
                            <img className='globe-logo'
                                src='/images/wwwLogo.png' 
                                alt='World wide web globe'
                            />
                        </a>

                        <a href='https://github.com/Nbelman1/unit1-final-project-carFinder' target="_blank">
                            <img className='github-logo'
                                src='/images/gitHubLogo.png' 
                                alt='GitHub logo'
                            />
                        </a>
                    </div>

                    <div className='centered'>
                        <a href='https://nbelman1.github.io/unit1-final-project-carFinder/' target="_blank">
                            <img className='landscape-pic'
                                src={carFinderDemo}
                                alt='A user interacting with CarFinder web app'
                            />
                        </a>
                    </div>

                    <ul>
                        <li>Built an interactive web app that educates users and delivers personalized car recommendations based on a preference quiz</li>
                        <li>Designed and implemented dynamic quiz logic and reusable components to efficiently capture input and drive recommendations</li>
                        <li>Crafted a personalized results experience using interactive modals and data-driven UI rendering to highlight relevant vehicle features</li>
                    </ul>
                    <br />

            </section>

        </>
    );
};

export default Projects;
