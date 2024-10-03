import React from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; // Make sure to import the CSS
import '../../components/button/Button'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import python from '../../assets/python.png'

const Timeline = () => {
  return (
    <div>
      <div className='w-full items-center flex justify-center mt-10'>
        <Link to='/csse'>
          <Button text={"Explore CSSE"} />
        </Link>
      </div>
      <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
        <VerticalTimelineElement
          date="30 September 2024"
          icon={<span className="timeline-icon"><img src={python} alt='' className='h-10 w-10'></img></span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Quiz(Python & Aptitude)</h3>
          <p>Test your Python programming skills in our exciting Python Quiz organized by the tech society!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="20 October 2024"
          icon={<span className="timeline-icon">🕵️‍♂️</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Codebugger</h3>
          <p>"Showcase your debugging skills and solve challenging code errors in our thrilling Codebugger event!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="20 November 2024"
          icon={<span className="timeline-icon">💃</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Technocratos</h3>
          <p>"Join us for Technocratos, an electrifying event filled with dancing, singing, and an array of exciting performances!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="16 December 2024"
          icon={<span className="timeline-icon">📲</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Framefiesta / Multimedia Presentation</h3>
          <p>"Unleash your creativity with stunning visuals at Framefiesta, the ultimate multimedia presentation competition!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="19 January 2025"
          icon={<span className="timeline-icon">🎙️</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Expert Talk</h3>
          <p>"Gain insights from industry leaders at our Expert Talk event, hosted by us"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="18 February 2025"
          icon={<span className="timeline-icon">🎮</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Tech Meme War/ Gaming competition</h3>
          <p>"Gear up for the ultimate showdown of creativity and skill in our Tech Meme War and Gaming Competition!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="9 March 2025"
          icon={<span className="timeline-icon">👩‍💻</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Blind Coding / Code The Canva</h3>
          <p>"Challenge your coding instincts in our thrilling Blind Coding / Code The Canva event, where precision meets creativity!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="8 April 2025"
          icon={<span className="timeline-icon">🏆</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Idea-thon / Code-Sprint & Prize Distribution</h3>
          <p>"Unleash innovation in our Idea-thon and Code-Sprint, followed by an exciting Prize Distribution ceremony!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12 May 2025"
          icon={<span className="timeline-icon">👨‍💼</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Formal Event</h3>
          <p>"Join us for an elegant evening of networking, recognition, and learnings at our formal events!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="15 June 2025"
          icon={<span className="timeline-icon">🧑‍💻</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• ByteBurst</h3>
          <p>"Showcase your skills in our Web Development Competition, where creativity meets coding!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="20 July 2025"
          icon={<span className="timeline-icon">🤖</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Programming Workshop</h3>
          <p>"Enhance your coding skills at our Programming Workshop, designed for all levels of enthusiasts!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="26 August 2025"
          icon={<span className="timeline-icon">♟️</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Battle Of Minds(Chess)</h3>
          <p>"Engage in strategic showdowns at the Battle of Minds Chess competition, where every move counts!"</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
