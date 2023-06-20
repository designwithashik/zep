'use client'
import 'swiper/css';


import SectionTitle from "./components/SectionTitle";
import ImageSlider from "./components/ImageSlider";
import ProductCard from "./components/ProductCard";
import { Fade, Slide } from 'react-awesome-reveal';





const products = [
  { id: '1', bgColor: '#edffec',mainTitle: 'CREDIT CARDS', description: '100% Contactless Application Process with Instant Approval From Top Banks.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75' },
  { id: '2', bgColor: '#fff1ca',mainTitle: 'LOANS', description: '100% online process. Instant offers. Affordable Rate of Interest on loans.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75' },
  {
    id: '3', bgColor: '#ffeee7',mainTitle: 'BUY NOW PAY LATER', description: 'Short-term financing that allows consumers to make purchases and pay for them over time.', image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75'
  },
  {
    id: '4', bgColor: '#fff5e7',mainTitle: 'SAVING ACCOUNTS', description: 'ZET offers range of savings account that suits your personal needs for the banking.',
    image: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75'
  }
]

const clipImage ={    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)'
}


const HomePage = () => {
  

  return (
    <>
      <div className="container-section">
      <section className="flex mt-[96px] items-center relative bg-[rgba(21,132,250,0.35)] lg:h-[368px]">
      <div className="p-14  w-2/3">
          <h2 className="text-[38px] font-bold w-full">Become a Financial Advisor and <span className="text-[#264EFF]">Earn Rs.1 Lakh/Month</span></h2>
          <p className="text-xl mb-7 ">No investment required</p>
          <img className="h-[50px]" src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt="" />
        </div>
      
          
        
        <div className="right-5 -top-16 absolute hidden max-w-[410px] lg:block w-1/3">
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75" alt="" />
        </div>
      </section>
      
      <section className=" ">
        <SectionTitle mainTitle={'Top Brands on ZET'} subTitle={'We are trusted by best brands in the country'} />
        <ImageSlider/>
      </section>
      </div>

      <section className=' bg-[#dee3fd39] py-16'>
        <div className="container-section ">
          <SectionTitle mainTitle={'Products on ZET'} subTitle={'We are trusted by best brand in the country'} />
         
          
          <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 mt-28">
        {products.map(product=><Fade ><ProductCard product={product}/></Fade>)}
        </div>
        
        </div>
        
      </section>
      <section>
        <div className="bg-blue-700 px-12 py-24" style={clipImage}>
        
          <div className="bg-blue-500 container-section  " style={clipImage}>
            <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75" alt="" className="mix-blend-luminosity p-24" />
            
          
          </div>
        </div>
      </section>
      <section className="md:flex container-section gap-5 items-center">
        <div className="text-center">
          <h2 className='text-xl font-bold'>Why <span className='text-blue-700'>Choose Use</span></h2>
          <p>Why we are loved by our customers</p>
          <img className="md:block hidden" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=384&q=75" alt="" />
        </div>
        <div className=" grid lg:grid-cols-4 gap-7">

          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg" alt="" />
            <p className='font-bold text-lg'>Zero Investment</p>
            <p>Build your business without any investment</p>
          </Fade>
          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg" alt="" />
            <p className='font-bold text-lg'>Quick Payout</p>
            <p>Direct Payout in your bank account in short time</p>
          </Fade>
          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg" alt="" />
            <p className='font-bold text-lg'>Limitless Earnings</p>
            <p>Direct Payout in your bank account in short time</p>
          </Fade>
          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg" alt="" />
            <p className='font-bold text-lg'>Training & Upskilling</p>
            <p>Get trained by finance and sales experts</p>
          </Fade>
          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg" alt="" />
            <p className='font-bold text-lg'>Customer Support</p>
            <p>Access tools and content to build relationship</p>
          </Fade>
          <Fade className='mx-auto'>
            <img src="https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg" alt="" />
            <p className='font-bold text-lg'>Financial Products</p>
            <p>Trustworthy & high-rated products & categories</p>
          </Fade>
        </div>
      </section>
      <div className="bg-[#0a2540] px-12 py-24 text-white" style={clipImage}>
          <SectionTitle mainTitle={'Start Earning in 3 Easy Steps'} subTitle={'We have create the app the make your earning easy'}/>
      </div>
      <section>

      </section>
    
    </>
  );
};

export default HomePage;