import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { sanityClient } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  console.log('====================================');
  console.log(abouts);
  console.log('====================================');
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    sanityClient.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">About <span>Myself</span></h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          {/* <img src={urlFor(about.imgUrl).url()} alt={about.title} /> */}
          {/* <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> */}
          <p className="p-text" style={{ marginTop: 10 }}>{abouts[0]?.description}</p>
          <p className="p-text" style={{ marginTop: 10 }}>{abouts[1]?.description}</p>
          <p className="p-text" style={{ marginTop: 10 }}>{abouts[2]?.description}</p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
