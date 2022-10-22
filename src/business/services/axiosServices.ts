import axios from 'axios';
import {LocalUserModel} from '../../model/UserModel';

export class AxiosRequest{
  private BASE_URL = 'http://localhost:3003/';

  public async registerUser(data, setIsLoading, clearForm){
    const body = {
      userName: data.userName,
      userEmail: data.userEmail,
      userBirthday: data.userBirthday,
      userPhoneNumber: data.userPhoneNumber.replace(/\D+/g, '')
    };
    setIsLoading(true);
    await axios
      .post(`${this.BASE_URL}users`, body)
      .then(res => {
        console.log(res);
        clearForm();
        setIsLoading(false);
        return;
      })
      .catch(err => {
        console.log(err.response.data.message);
        setIsLoading(false);
        return false;
      });
  }

  public async getUserList(setUserListLoading): Promise<LocalUserModel[] | []>{
    return await axios.get(`${this.BASE_URL}users`).then((response: any) => {
      console.log('error', response.length, response);
      if (response.length === 0)
        return [];
      console.log('response', response);
      return response.data;
    }).catch(error => {
      console.log('getUserList error:', error.message || error.response?.data?.message);
      setUserListLoading(false);
      return [];
    });
  }
}