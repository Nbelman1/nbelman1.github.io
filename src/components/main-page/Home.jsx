const Home = () => {
    return (
        <>
            <section>
                <h2 className="centered">About Me</h2>

                <h3 className="centered">The bio</h3>
                <ul>
                    <li>Dad of two cats and an Iggy</li>
                    <li>Recreational runner</li>
                    <li>Hobbyist hiker</li>
                    <li>Metal music enjoyer</li>
                </ul>
                
                <div className="centered">
                    <img 
                        src='/images/profile-pic.JPEG' 
                        alt='The site author smiling in front of a trail map'
                        className="profile-pic"
                    />
                </div>

                <h3 className="centered">The stack</h3>
                <ul>
                    <li>Frontend: JavaScript (ES6+), React, HTML5, CSS3</li>
                    <li>Backend: Java, SQL</li>
                    <li>Tools: Git/GitHub, npm, Vite</li>
                </ul>

                <div className="centered">
                    <img 
                        src='/images/petsTriFold.png'
                        alt='Two cute cats and an adorable dog'
                        className="landscape-pic"
                    />
                </div>

                <h3 className="centered">The objectives</h3>
                <ul>
                    <li>Clarify the software development path I want to pursue</li>
                    <li>Explore video game engines and interactive systems as a potential specialization</li>
                    <li>Secure a developer role contributing to meaningful, real-world projects</li>
                    <li>Build strong fundamentals while helping grow a positive engineering culture</li>
                </ul>


            </section>
        </>
    );
};

export default Home;
