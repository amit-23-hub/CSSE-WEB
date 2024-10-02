import React from 'react';
import './EventHead.css'; // Import your CSS

const HeroContent = () => {
  const headlines = [
    'Explore our world',
    'View all its beauty',
    'Take lots of photos',
    'Each one of them pretty',
  ];

  const backgroundImages = [
    'url(/src/assets/planet1.png)',
    'url(/src/assets/planet2.png)',
    'url(/src/assets/poster-1.png)',
    'url(/src/assets/city1.png)'
  ];

  return (
    <div>
      {headlines.map((headline, index) => (
        <section key={index} className='hero'>
          <div className='heroInner' id={`section-${index}`}>
            <figure
              className='figure'
              style={{ backgroundImage: backgroundImages[index] }}
            ></figure>
            <h2 className='heroTitle'>{headline}</h2>
          </div>
        </section>
      ))}

      <section className='content'>
        <article className='contentInner'>
          <h1 className='contentTitle'>Some Happy Little Text</h1>
          <h3 className='contentAuthor'>By Bob Ross</h3>
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
