import Link from "next/link";
import SectionTitle from "./components/SectionTitle";
import ImageSlider from "./components/ImageSlider";
import ProductCard from "./components/ProductCard";


const products = [
  { id: '1', mainTitle: 'CREDIT CARDS', description: '100% Contactless Application Process with Instant Approval From Top Banks.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75' },
  { id: '2', mainTitle: 'LOANS', description: '100% online process. Instant offers. Affordable Rate of Interest on loans.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75' },
  {
    id: '3', mainTitle: 'BUY NOW PAY LATER', description: 'Short-term financing that allows consumers to make purchases and pay for them over time.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75'
  },
  {
    id: '4', mainTitle: 'SAVING ACCOUNTS', description: 'ZET offers range of savings account that suits your personal needs for the banking.',
    image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75'
  }
]
const HomePage = () => {
  return (
    <>
      <div className="container-section">
      <section className="flex items-center relative bg-[rgba(21,132,250,0.35)] lg:h-[368px]">
      <div className="p-14  w-2/3">
          <h2 className="text-[38px] font-bold w-full">Become a Financial Advisor and <span className="text-[#264EFF]">Earn Rs.1 Lakh/Month</span></h2>
          <p className="text-xl mb-7 ">No investment required</p>
          <img className="h-[50px]" src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt="" />
        </div>
      
          
        
        <div className="right-5 -top-16 absolute hidden max-w-[410px] lg:block w-1/3">
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75" alt="" />
        </div>
      </section>
      
      <section className="my-28 ">
        <SectionTitle mainTitle={'Top Brands on ZET'} subTitle={'We are trusted by best brands in the country'} />
        <ImageSlider/>
      </section>
      </div>

      <section>
        <SectionTitle mainTitle={'Products on ZET'} subTitle={'We are trusted by best brand in the country'} />
        <div className="grid grid-cols-2">
        {products.map(product=><ProductCard product={product}/>)}
        </div>
      </section>
      <section>
        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75" alt="" />
      </section>
      <section className="lg:flex">
        <div className="w-1/3">
          <h2>Why Choose Use</h2>
          <p>Why we are loved by our customers</p>
          <img className="lg:block hidden" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=384&q=75" alt="" />
        </div>
        <div className="w-2/3 grid grid-cols-4">
          <div className="">
            <img src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg" alt="" />
            <p>Training & Upskilling</p>
            <p>Get trained by finance and sales experts</p>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default HomePage;