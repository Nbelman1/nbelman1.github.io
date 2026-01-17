const Resume = () => {
    return (
        <>
            <section>
                <h1>Resume</h1>

                {/* TODO: button to download resume */}

                <h2>Education</h2>
                <div>
                    <ul>
                        <li>
                            <strong>LaunchCode</strong> - Software Development Bootcamp (2025 - 2026)
                        </li>
                        <li>
                            <strong>University of Pittsburgh</strong> - BSBA, Marketing (2016)
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <strong>CarFinder</strong> - LaunchCode Unit 1 Final Project
                            <ul>
                                <li>Built a data-driven app that turns user input into personalized car recommendations with dynamic, interactive UI</li>
                                <li>Designed reusable quiz and results components with maintainable modals to deliver educational content seamlessly </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Administrative Assistant</strong> - PennReach (2025 - current)
                            <ul>
                                <li>Analyzed data to optimize internal processes</li>
                                <li>Supported technology adoption across departments</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Business Administrator</strong> - Ardmore Toyota (2024 - 2025)
                            <ul>
                                <li>Kept multiple systems in sync while managing sensitive customer and financial data</li>
                                <li>Solved complex data and system issues by collaborating across teams and external partners</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Skills & Tech Stack</h2>
                    <ul>
                        <li>JavaScript (ES6+), React, HTML5, CSS3</li>
                        <li>Java, SQL</li>
                        <li>Git / GitHub, npm, Vite</li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default Resume;
