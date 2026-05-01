const ContactMe = () => {
    return (
        <>
            <h2 className="centered">Let's connect</h2>
                
            <div className="centered-row">
                <a href='mailto: nbelman1@gmail.com'>
                    <img className='email-logo'
                        src='/images/emailLogo.png' 
                        alt='Email logo'
                    />
                </a>

                <a href='https://www.linkedin.com/in/noahbelman/' target="_blank">
                    <img className='linkedin-logo'
                        src='/images/linkedInLogo.png' 
                        alt='LinkedIn logo'
                    />
                </a>
            </div>

            <div className="centered">
                <p>
                    <strong>Email</strong>: nbelman1@gmail.com
                </p>

                <p>I'm actively looking for junior software development roles in the Philadelphia area. Whether you're a recruiter, a fellow developer, or just curious about my work, feel free to reach out.</p>
            </div>
                    
                
        </>
    );
};

export default ContactMe;
