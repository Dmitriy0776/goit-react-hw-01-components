import React from 'react';
import PropTypes from 'prop-types';
import style from './SocialProfile.module.css';

const Profile = ({ propUser }) => {
  return (
    <>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={propUser.avatar} alt="user avatar" className={style.img} />
          <p className={style.name}>{propUser.name}</p>
          <p className={style.tag}>{propUser.tag}</p>
          <p className={style.location}>{propUser.location}</p>
        </div>
        <ul className={style.stats}>
          <li className={style.li}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{propUser.stats.followers}</span>
          </li>
          <li className={style.li}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{propUser.stats.views}</span>
          </li>
          <li className={style.li}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{propUser.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  propUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
