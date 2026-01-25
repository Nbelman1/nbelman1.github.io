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

                <ul>
                    <li>
                        <strong>Email</strong>: nbelman1@gmail.com
                    </li>
                    <li>
                        <strong>LinkedIn</strong>: @noahbelman
                    </li>
                </ul>
        </>
    );
};

export default ContactMe;
