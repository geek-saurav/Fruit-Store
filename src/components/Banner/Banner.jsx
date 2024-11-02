import React from "react";
import bannerImg from "../../assets/website/banner.jpg"; // Verify the path
import playstoreImg from "../../assets/website/play_store.png"; // Verify the path
import appstoreImg from "../../assets/website/app_store.png"; // Verify the path

const bannerStyle = {
  backgroundImage: `url(${bannerImg})`, // Corrected syntax for background image
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Banner = () => {
  return (
    <div className="container my-14">
      <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
        <div className='space-y-6 max-w-xl mx-auto p-4'>
          <h1 data-aos="fade-up" className='text-2xl text-center sm:text-4xl font-semibold'>Download Now</h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className='text-center sm:px-20'
          >
            Enjoy fresh fruit delivery with our app! Track orders, 
            discover seasonal picks, and get exclusive discounts.
            Download now for farm-fresh convenience at your door!
          </p>
          {/* Image links */}
          <div data-aos="fade-up" data-aos-delay="500" className='flex justify-center items-center gap-4'>
            <a href="#">
              <img src={playstoreImg} alt="Download on Play Store" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
            </a>
            <a href="#">
              <img src={appstoreImg} alt="Download on App Store" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
