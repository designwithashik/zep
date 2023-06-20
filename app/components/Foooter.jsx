
const Footer = () => {
    return (
        <div className="bg-[#007aff]  text-white py-14">
            <div className="container-section">
            <div className="logo"><img src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg" alt="" /></div>
            <hr className="text-white" />
            <div className="grid grid-cols-4 mb-5">
                <div>
                    <h2>COMPANY</h2>
                    <p>About Us</p>
                    <p>Partner with us</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h2>LEGAL</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <h2>CONTACT</h2>
                    <p>hi@zetapp.in</p>
                    <p>+91-7417274072</p>
                </div>
                <div>
                    <h2>SOCIAL</h2>
                    <div className="logos">
                        <p>Insta</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                </div>
                </div>
            <img className="w-full absolute" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100" alt="" />
            
        </div>

    );
};

export default Footer;