import React from 'react';
import styles from './EventHead.module.css'; // Import the CSS module
import img1 from '../../../assets/planet1.png';
import img2 from '../../../assets/planet2.png';
import img3 from '../../../assets/poster-1.png'; // Corrected file name
import img4 from '../../../assets/city1.png';

import technicalPre1 from '../../../assets/events/technicalPre1.jpg'
import techno2 from '../../../assets/events/techno2.jpg'
import byteburst1 from '../../../assets/events/byteburst1.jpg'




const HeroContent = () => {
  const headlines = [
    'Explore our world',
    'View all its beauty',
    'Take lots of photos',
    'Each one of them pretty',
  ];

  const backgroundImages = [technicalPre1, techno2, img3, byteburst1];

  return (
    <div>
      {headlines.map((headline, index) => (
        <section key={index} className={styles.hero}>
          <div className={styles.heroInner} id={`section-${index}`}>
            <figure
              className={styles.figure}
              style={{ backgroundImage: `url(${backgroundImages[index]})` }} // Fixed backgroundImage syntax
            ></figure>
            <h2 className={styles.heroTitle}>{headline}</h2>
          </div>
        </section>
      ))}

      <section className={styles.content}>
        <article className={styles.contentInner}>
          <h1 className={styles.contentTitle}>Some Happy Little Text</h1>
          <h3 className={styles.contentAuthor}>By Bob Ross</h3>
          <p>
            A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction...
          </p>
          <p>
            You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license...
          </p>
          <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
          <p>
            Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger...
          </p>
          <blockquote>Don't fight it, use what happens.</blockquote>
          <p>
            If we're going to have animals around we all have to be concerned about them and take care of them...
          </p>
        </article>
      </section>
    </div>
  );
};

export default HeroContent;
