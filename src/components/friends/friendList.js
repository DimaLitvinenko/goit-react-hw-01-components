import FriendListItem from './friendListItem';
import PropTypes from 'prop-types';
import style from './friends.module.css';

export default function FriendList({ friends }) {
  return (
    <>
      <h2 className={style.hidden}>Friends</h2>
      <ul className={style.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};
