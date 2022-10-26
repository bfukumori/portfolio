import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { client, urlFor } from '../../libs/client';
import { AppWrap, MotionWrap } from '../../wrapper';

interface About {
  title: string;
  description: string;
  imgUrl: string;
}

const About = () => {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Good Apps</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
