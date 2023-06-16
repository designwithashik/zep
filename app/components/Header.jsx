import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div>
                <div className="logo"><img src="" alt="" />Logo</div>
            </div>
            <div className="links">    <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='#'>Partner With Us</Link>
                <Link href='#'>Blog</Link>
                <Link href='#'>Download ZET</Link>

            </div>
        </header>
    );
};

export default Header;