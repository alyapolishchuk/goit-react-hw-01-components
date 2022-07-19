import PropTypes from 'prop-types';

export default function FriendsItem({ avatarURL, name, isOnline }) {
  return (
    <li class="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatarURL} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  avatarURL: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
