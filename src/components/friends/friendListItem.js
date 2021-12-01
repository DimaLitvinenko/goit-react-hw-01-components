import PropTypes from 'prop-types';
import style from './friends.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <>
      <li key={id} className={style.friendItem}>
        {isOnline ? (
          <span className={style.status} style={{ border: 'green' }}>
            {isOnline}
          </span>
        ) : (
          <span className={style.status} style={{ border: 'red' }}>
            {isOnline}
          </span>
        )}
        <img
          className={style.friendAvatar}
          src={avatar}
          alt={name}
          width="48"
        />
        <p className={style.name}>{name}</p>
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
