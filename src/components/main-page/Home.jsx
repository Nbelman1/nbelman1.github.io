const Home = () => {
    return (
        <>
            <section>
                <h2>About Me</h2>

                <img 
                    src='/images/profile-pic.JPEG' 
                    alt='The site author smiling in front of a trail map'
                    style={{ width: '200px', height: 'auto'}}
                />

                <h3>The bio</h3>
                <ul>
                    <li>Dad of two cats and an Iggy</li>
                    <li>Recreational runner</li>
                    <li>Hobbyist hiker</li>
                    <li>Metal music enjoyer</li>
                </ul>
                
                <img 
                    src='/images/chloe.JPEG'
                    alt='A gray tabby cat wearing a birthday hat'
                    style={{ width: '200px', height: 'auto'}}
                />

                <h3>The stack</h3>
                <ul>
                    <li>Frontend: JavaScript (ES6+), React, HTML5, CSS3</li>
                    <li>Backend: Java, SQL</li>
                    <li>Tools: Git/GitHub, npm, Vite</li>
                </ul>

                <img
                    src='images/stella.JPEG'
                    alt='A calico cat in a cat tree looking at the camera'
                    style={{ width: '200px', height: 'auto'}}
                />

                <h3>The objectives</h3>
                <ul>
                    <li>Clarify the software development path I want to pursue</li>
                    <li>Explore video game engines and interactive systems as a potential specialization</li>
                    <li>Secure a developer role contributing to meaningful, real-world projects</li>
                    <li>Build strong fundamentals while helping grow a positive engineering culture</li>
                </ul>

                <img 
                    src='images/luigi.JPEG'
                    alt='An excited Italian greyhound with his tongue out'
                    style={{ width: '200px', height: 'auto'}}
                />

            </section>
        </>
    );
};

export default Home;
