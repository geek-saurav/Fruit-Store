import React from 'react';
import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";

const ServicesData = [
  {
    id: 1,
    image: Fruits1,
    title: "Custom Fruit Baskets",
    subtitle: "Personalized fruit baskets tailored for gifts, events, or special occasions, featuring a selection of premium fruits.",
    asoDelay: "300"
  },
  {
    id: 2,
    image: Fruits2,
    title: "Smoothie and Juice Bar",
    subtitle: "Freshly made smoothies and juices on-site, offering nutritious and delicious blends for customers on the go.",
    asoDelay: "500"
  },
  {
    id: 3,
    image: Fruits3,
    title: "Fresh Produce Delivery",
    subtitle: "Convenient home delivery of fresh fruits and seasonal produce for easy access to healthy options.",
    asoDelay: "700"
  }
];

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* Header Section */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-dark'>Fresh and <span className='text-primary'>Tasty Fruits</span></h1>
          <p data-aos="fade-up" data-aos-delay="300" className='text-sm opacity-50'>
            We provide a wide selection of seasonal fruits, handpicked for peak freshness and flavor. 
            Our fruits are carefully sourced from local farms to ensure they’re bursting with taste and nutrients.
          </p>
      </div>
      {/* Card Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {ServicesData.map(({ id, image, title, subtitle, asoDelay }) => (
          <div key={id} data-aos="fade-up" data-aos-delay={asoDelay} className='p-4 text-center space-y-6'>
            <img src={image} alt={title} className='max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2' />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary'>{title}</h1>
              <p className='text-dark'>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;