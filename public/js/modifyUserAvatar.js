import { LocalStorageService } from './localStorageService.js';
import getImage from './getImage.js';

const modifyUserAvatar = async (user_id) => {

    await getImage();

    let auxurl = LocalStorageService.getItem("image");

    let obj = {
        user_id: user_id,
        auxurl: auxurl
    }

    const avatarRoute = '/api/sessions/avatar'

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    };

    fetch(avatarRoute, requestOptions)
        .then(result => result.json())
        .then(json => theStatus = json)
        .finally(() => {
            return theStatus;
        })
        .catch(err => console.log(err))
}
export default modifyUserAvatar