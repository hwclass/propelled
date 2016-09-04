// import { apiUrl } from '../../services/api';
import { userLocationListStore } from '../../stores/';

export const updateUserList = () => {
  fetch('http://demo1455086.mockable.io/users/locations/')
    .then(response => response.json())
    .then((data) => {
      userLocationListStore.setLocationList(data);
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
