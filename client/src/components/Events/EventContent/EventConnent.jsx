import React from 'react';
import './EventContent.css';
import debate1 from '../../../assets/events/debate1.jpg'
import debate2 from '../../../assets/events/debate2.jpg'
import GD1 from '../../../assets/events/GD1.jpg'
import GD2 from '../../../assets/events/GD2.jpg'
import python1 from '../../../assets/events/python1.jpg'
import python2 from '../../../assets/events/python2.jpg'
import techno1 from '../../../assets/events/techno1.png'
import techno2 from '../../../assets/events/techno2.jpg'
import byteburst1 from '../../../assets/events/byteburst1.jpg'
import byteburst2 from '../../../assets/events/byteburst2.jpg'
import frame1 from '../../../assets/events/framefiesta1.jpg'
// import frame2 from '../../../assets/events/framefiesta2.jpg'
import technicalPre1 from '../../../assets/events/technicalPre1.jpg'
// import technicalPre1 from '../../../assets/events/technicalPre1.jpg'
// extempore
// codebugger
import webwonders1 from '../../../assets/gallery1.jpg'
import webwonders2 from '../../../assets/gallery5.jpg'
import creative1 from '../../../assets/gallery3.jpg'
// import creative2 from '../../../assets/gallery3.jpg'


const events = [
  {
    title: 'Debate - Competition',
    description: 'A Debate Competition is an intellectual event where participants engage in structured arguments on a given topic. It fosters critical thinking, public speaking, and persuasive skills as individuals or teams present their viewpoints while countering opposing arguments.Participants are judged based on clarity, content, reasoning, rebuttal strength, and overall delivery. The topics can range from current affairs and technology to ethics and social issues.',
    defaultImage: debate1,
    hoverImage: debate2
  },
  {
    title: 'Technical Presentation',
    description: 'The Technical Presentation Competition is an exciting event where students showcase their skills, innovations, and projects in front of an audience. It provides a platform for budding technologists to present their work, ranging from software applications and AI models to hardware prototypes and research projects. Participants deliver structured presentations, explaining their project idea, development process, technologies used, challenges faced, and real-world applications. They may also demonstrate their projects live to highlight their functionality.',
    defaultImage: technicalPre1,
    hoverImage: technicalPre1
  },
  {
    title: 'Creative Writing',
    description: 'The Creative Writing Competition is an event that encourages participants to express their thoughts, emotions, and imagination through the power of words. It provides a platform for students to showcase their storytelling, poetic, and narrative skills in various forms such as short stories, poetry, essays, and fictional pieces.',
    defaultImage: creative1,
    hoverImage: ''
  },
  {
    title: 'Extempore',
    description: 'The Extempore Competition is a dynamic and spontaneous speaking event where participants deliver an impromptu presentation on a topic given at the time of the event. This competition challenges students to think quickly, structure their thoughts effectively, and articulate their ideas confidently within a short preparation time.',
    defaultImage: '',
    hoverImage: ''  
  },
  {
    title: 'Web Wonders',
    description: 'Web Wonders is an exciting competition designed for students to showcase and enhance their web development skills. This event provides a platform for participants to design, develop, and deploy creative and functional web applications within a given time frame. Participants can compete individually or in teams to build responsive, interactive, and innovative websites based on a given theme or problem statement. They are judged on design aesthetics, functionality, user experience, code quality, and overall creativity.',
    defaultImage: webwonders1,
    hoverImage: webwonders2  
  },
  {
    title: 'Group Discussion',
    description: 'The Group Discussion (GD) Competition is an interactive event where participants engage in a structured discussion on a given topic. It tests their communication skills, critical thinking, teamwork, and ability to present logical arguments in a collaborative setting.',
    defaultImage: GD1,
    hoverImage: GD2  
  },
  {
    title: 'Python Programming Classes',
    description: 'The Python Programming Classes are designed to help students learn, explore, and master one of the most powerful and versatile programming languages—Python. These sessions cover everything from basic syntax and logic building to advanced concepts like data structures, object-oriented programming, web development, automation, and AI/ML.',
    defaultImage: python1,
    hoverImage: python2  
  },
  {
    title: 'CodeBugger',
    description: 'CodeBugger is an exciting debugging competition where participants put their problem-solving and analytical skills to the test by identifying and fixing errors in given pieces of code. This event challenges students to think logically, analyze code structures, and debug efficiently within a time limit.',
    defaultImage: '',
    hoverImage: ''  
  },
  {
    title: 'FrameFiesta',
    description: 'FrameFiesta is a captivating photography competition that provides students the opportunity to showcase their photographic skills, creativity, and artistic vision. This event invites participants to capture stunning images, highlighting the beauty in everyday life, nature, or a chosen theme.',
    defaultImage: frame1,
    hoverImage: ''  
  },
  {
    title: 'ByteBurst',
    description: 'ByteBurst Hackathon is a web development-focused event where participants collaborate to create innovative websites or web applications within a set time frame. The hackathon encourages developers to apply their skills in front-end and back-end technologies to build functional, creative solutions addressing specific themes or challenges. It’s a great opportunity to learn, network, and showcase web development expertise.',
    defaultImage: byteburst1,
    hoverImage: byteburst2  
  },
  {
    title: 'Technokratos-The Grand Event',
    description: 'The Grand Fest is an exciting multi-event extravaganza where students can showcase their diverse talents and creativity. The event features a range of activities, including solo and group dance competitions, singing performances, and a glamorous fashion show. Participants can also take the stage for an open mic session to perform poetry, comedy, or music. The art and craft exhibition allows students to display their artistic creations, while the classic game of musical chairs adds fun to the day. A drama performance also highlights the theatrical skills of participants. The Grand Fest is a perfect opportunity to celebrate creativity and foster teamwork.',
    defaultImage: techno1,
    hoverImage: techno2  
  },
];

const Boxes = () => {
  return (
    <div className='head'>
      <div className='container'>
        {events.map((event, index) => (
          <div className='w-full m-0 pt-0 pb-4 pr-0 pl-0 flex flex-col gap-6' key={index}>
            <div className={`box flex flex-col p-4 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <div className='w-full sm:w-[50%] text-center items-center flex flex-col justify-center gap-5 p-4'>
                <p className='text-white text-3xl sm:text-6xl font-semibold'>{event.title}</p>
                <p className='text-white text-sm sm:text-base'>{event.description}</p>
              </div>
              <div className='w-full sm:w-[50%] top_section text-center flex justify-center items-center text-white'
                style={{
                  backgroundImage: `url(${event.defaultImage})`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${event.hoverImage})`}
                onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${event.defaultImage})`}
              >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;