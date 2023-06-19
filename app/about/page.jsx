import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <section className="relative text-white">
                <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100" alt="" />
                <div className='absolute top-1/3 left-1/4 w-1/2 text-center'><h2 className='font-bold text-[40px]'>OUR MISSION</h2>
                    Enabling financial inclusion for the next billion Indians
                    & making their Zindagi Set. Building a platform that enables you to sell
                    financial products & earn up to Rs. 1 lakh every month.
                    <p className='font-bold mt-5'>EARN BETTER. LIVE BETTER.</p></div>
            </section>

            <section>
                <h2 className='text-center font-bold text-[40px]'>How we evolved over the years</h2>
                <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=1920&q=100" alt="" />
            </section>

            <section className=''>
                <h3 className='text-2xl'>Got Featured</h3>
                <div className="flex justify-evenly">
                    <img className='lg:max-w-[220px] md:max-w-[120px]' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75" alt="" />
                    <img className='lg:max-w-[220px] md:max-w-[120px]' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75" alt="" />
                    <img className='lg:max-w-[220px] md:max-w-[120px]' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=640&q=75" alt="" />
                    <img className='lg:max-w-[220px] md:max-w-[120px]' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=640&q=75" alt="" />
                    <img className='lg:max-w-[220px] md:max-w-[120px]' src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=640&q=75" alt="" />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;