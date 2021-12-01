import PropTypes from 'prop-types';
import style from './user-profile.module.css';

export default function UserProfile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={style.profile} key={tag}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.username}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers:</span>
          <span className={style.quantity}> {stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views:</span>
          <span className={style.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes:</span>
          <span className={style.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
