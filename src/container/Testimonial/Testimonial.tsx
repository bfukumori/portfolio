import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './Testimonial.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../libs/client';

interface Brand {
  imgUrl: string;
  name: string;
}

interface Testimonial {
  name: string;
  company: string;
  imageUrl: string;
  feedback: string;
}

const Testimonial = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonial = testimonials[currentIndex];

  function handleClick(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length ? (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonial.imageUrl).url()} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonial.name}</h4>
                <h5 className='p-text'>{testimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      ) : null}
      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.name}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
