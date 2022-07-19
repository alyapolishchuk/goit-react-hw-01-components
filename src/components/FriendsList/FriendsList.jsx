import PropTypes from 'prop-types';
import FriendsItem from './FriendsList';

export default function FriendsList({ friend }) {
  return (
    <ul className="friend-list">
      {friend.map(({ id, avatarURL, name, isOnline }) => {
        return (
          <FriendsItem
            key={id}
            avatarURL={avatarURL}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatarURL: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
