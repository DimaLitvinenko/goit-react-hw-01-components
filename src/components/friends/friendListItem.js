import PropTypes from 'prop-types';
import style from './friends.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <>
      <li key={id} className={style.friendItem}>
        {isOnline ? (
          <span className={style.status} style={{ backgroundColor: 'green' }}>
            {isOnline}
          </span>
        ) : (
          <span className={style.status} style={{ backgroundColor: 'red' }}>
            {isOnline}
          </span>
        )}
        <img
          className={style.friendAvatar}
          src={avatar}
          alt={name}
          width="48"
        />
        <p className={style.friendName}>{name}</p>
      </li>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
