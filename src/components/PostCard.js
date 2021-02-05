import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <div className='card'>
      <div
        className='card-image'
        style={{
          width: '100%',
          height: '200px',
          backgroundImage: `url('${props.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          borderTopLeftRadius: '2px',
          borderTopRightRadius: '2px',
        }}
      ></div>

      <div className='card-info'>
        <Link to={`/${props.id}`} className='links-post'>
          <p> {props.title}</p>
        </Link>
      </div>

      <div className='card'>{props.description}</div>
    </div>
  );
};

export default PostCard;
