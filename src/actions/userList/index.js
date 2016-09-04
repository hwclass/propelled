// import { apiUrl } from '../../services/api';
import { userList } from '../../stores/userList/';

export const updateUserList = () => {
  fetch('http://demo1455086.mockable.io/users/locations/')
    .then(response => response.json())
    .then((data) => {
      userList.mergeUserList(data);
    });


  /*
  fetch(apiUrl(`me/followings/${user.id}`, '?'), { method: isFollowing ? 'delete' : 'put' })
    .then(response => response.json())
    .then(() => {
      if (isFollowing) {
        userStore.removeFromFollowings(user.id);
      } else {
        userStore.mergeFollowings([user.id]);
      }
    });
  */
};
