import Profile from './Profile/Profile';
import user from './DataJSON/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        photo={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      ,
    </div>
  );
};
