import React from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; // Make sure to import the CSS

const Timeline = () => {
  return (
    <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
      <VerticalTimelineElement
        date="2024-01-01"
        icon={<span className="timeline-icon">🎉</span>}
        position="left"
      >
        <h3>Event Title 1</h3>
        <p>Description for event 1.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-02-01"
        icon={<span className="timeline-icon">📅</span>}
        position="right"
      >
        <h3>Event Title 2</h3>
        <p>Description for event 2.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-03-01"
        icon={<span className="timeline-icon">🏆</span>}
        position="left"
      >
        <h3>Event Title 3</h3>
        <p>Description for event 3.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-04-01"
        icon={<span className="timeline-icon">🌟</span>}
        position="right"
      >
        <h3>Event Title 4</h3>
        <p>Description for event 4.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-05-01"
        icon={<span className="timeline-icon">🎈</span>}
        position="left"
      >
        <h3>Event Title 5</h3>
        <p>Description for event 5.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-06-01"
        icon={<span className="timeline-icon">🎤</span>}
        position="right"
      >
        <h3>Event Title 6</h3>
        <p>Description for event 6.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-07-01"
        icon={<span className="timeline-icon">💡</span>}
        position="left"
      >
        <h3>Event Title 7</h3>
        <p>Description for event 7.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-08-01"
        icon={<span className="timeline-icon">🌍</span>}
        position="right"
      >
        <h3>Event Title 8</h3>
        <p>Description for event 8.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
