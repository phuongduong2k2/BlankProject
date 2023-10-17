import {AppSnackBarUtils} from '../../../components/AppSnackBar';
import {getData, postData} from '../../BaseDA';

export const getUsers = async () => {
  const data = await getData('/users');
  return data;
};

export const addUsers = async data => {
  const res = await postData('/users', data);
  if (res && res.status === 201) {
    AppSnackBarUtils.show({
      status: 'success',
      title: 'Add user success',
      duration: 1000,
    });
    return res;
  } else {
    AppSnackBarUtils.show({
      status: 'failed',
      title: 'Add user failed',
      duration: 1000,
    });
  }
};
