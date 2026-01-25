import carFinderDemo from '../assets/carfinder-demo.png';

const Projects = () => {
    return (
        <>
            <h2 className='centered'>Projects</h2>
                <h3 className='centered'>CarFinder</h3>
                <p className='centered'><em>LaunchCode Unit 1 Final Project</em></p>
                
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
                    <img className='landscape-pic'
                        src={carFinderDemo}
                        alt='A user interacting with CarFinder web app'
                    />
                </div>

                    <ul>
                        <li>Built an interactive web app that educates users and delivers personalized car recommendations based on a preference quiz</li>
                        <li>Designed and implemented dynamic quiz logic and reusable components to efficiently capture input and drive recommendations</li>
                        <li>Crafted a personalized results experience using interactive modals and data-driven UI rendering to highlight relevant vehicle features</li>
                    </ul>
                <h3 className='centered'>Coming soon </h3>
                <p className='centered'><em>Exploring interactive systems</em></p>
        </>
    );
};

export default Projects;
