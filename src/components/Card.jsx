import { useState } from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ meaning, title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className='card'
      onClick={handleClick}
    >
      <h3>{title}</h3>
      {showContent && (
        <p>
          {meaning}
          <br />
          <br />
          {content}
        </p>
      )}
    </div>
  );
};

export default Card;
