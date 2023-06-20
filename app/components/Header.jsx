import Link from "next/link";

const Header = () => {
    return (
        <header className="header  mb-24">
            <div>
                <img className="w-[90px] h-auto" src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg" alt="logo" />
            </div>
            <div className="links text-[18px] flex gap-5 py-[16px] font-[500]">    <Link href='/'>Home</Link>
                <Link href='/about'>About Us</Link>
                <Link href='#'>Partner With Us</Link>
                <Link href='#'>Blog</Link>
                <button className="btn-header" href='#'>Download ZET</button>

            </div>
        </header>
    );
};

export default Header;