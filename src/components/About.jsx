import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const SeviceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div  options={{
          max: 45,
          scale: 1,
          speed: 450
        }} 
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex-wrap justify-evenly items-center " >
          <img src={icon}  alt={title} className={'w-16 h-16 object-contain items-center m-auto justify-center'}/> <br/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}











const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'} >
        I'm Anwar, and I'm on a mission to weave digital dreams into reality. As a full-stack web developer, I'm fluent in the language of JavaScript and wield the MERN stack (MongoDB, Express.js, React.js, Node.js) like a virtuoso.

        Imagine React.js as a brush creating elegant front-end masterpieces, while Node.js and Express.js construct the robust foundation. MongoDB provides the palette for data artistry.

        But I'm not just about building; I'm about creating captivating digital experiences. It's about turning your vision into a tangible, user-centric journey.

        Collaboration is where the magic happens. Your ideas and my MERN proficiency will converge to craft web solutions that stand out.

        Let's work together to bring your Ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (<SeviceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')