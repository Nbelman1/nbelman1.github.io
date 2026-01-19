import carFinderDemo from '../assets/carfinder-demo.png';

const Projects = () => {
    return (
        <>
            <ul>
                <li><a href='https://nbelman1.github.io/unit1-final-project-carFinder/#/'>CarFinder</a> — LaunchCode Unit 1 Final Project</li>
                
                <img 
                    src={carFinderDemo}
                    alt='A user interacting with CarFinder web app'
                    style={{ width: '500px', height: 'auto'}}
                />

                    <ul>
                        <li>Built an interactive web app that educates users and delivers personalized car recommendations based on a preference quiz</li>
                        <li>Designed and implemented dynamic quiz logic and reusable components to efficiently capture input and drive recommendations</li>
                        <li>Crafted a personalized results experience using interactive modals and data-driven UI rendering to highlight relevant vehicle features</li>
                        <li>View GitHub repo <a href='https://github.com/Nbelman1/unit1-final-project-carFinder'>here</a></li>
                    </ul>
                <li><strong>Coming soon — exploring interactive systems</strong></li>
            </ul>
        </>
    );
};

export default Projects;
