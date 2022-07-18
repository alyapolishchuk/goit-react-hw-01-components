import defaultIMG from '../images/default_picture.jpg';

export default function Profile({
  username = 'User',
  tag = 'No tag',
  location = 'Somewhere in the World',
  photoURL = defaultIMG,
  followers = 'people',
  views = 'somebody saw',
  likes = 'somebody liked',
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={photoURL} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
