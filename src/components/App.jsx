import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import user from './JSONfolder/user.json';
import data from './JSONfolder/data.json';
import friends from './JSONfolder/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        photoURL={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
