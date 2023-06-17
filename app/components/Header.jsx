import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className="w-16 h-16" src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg" alt="logo" />
            </div>
            <div className="links">    <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='#'>Partner With Us</Link>
                <Link href='#'>Blog</Link>
                <button className="btn" href='#'>Download ZET</button>

            </div>
        </header>
    );
};

export default Header;