import Profile from './Profile/Profile';
import user from './JSONfolder/user.json';
import data from './JSONfolder/data.json';

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
      ,
    </div>
  );
};
