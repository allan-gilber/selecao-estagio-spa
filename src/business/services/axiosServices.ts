import {message} from 'antd';
import axios from 'axios';
import {Dispatch, SetStateAction} from 'react';
import {LocalUserModel} from '../../model/UserModel';

export class AxiosRequest{
  private BASE_URL = 'http://localhost:3003/';

  public async registerUser(e: any, form: LocalUserModel, setLoading: Dispatch<SetStateAction<boolean>>, clearForm: any ){
    e.preventDefault;
    const request = await this.registerUserRequest(form, setLoading, clearForm);
    console.log(request);
    if (!request) this.openAntdNotification('Oops, something went wrong. Try again in a few seconds');
  }

  private async registerUserRequest(data: { userName: any; userEmail: any; userBirthday: any; userPhoneNumber: string; }, setIsLoading: (arg0: boolean) => void, clearForm: () => void){
    const body = {
      userName: data.userName,
      userEmail: data.userEmail,
      userBirthday: data.userBirthday,
      userPhoneNumber: data.userPhoneNumber.replace(/\D+/g, '')
    };
    setIsLoading(true);
    return await axios
      .post(`${this.BASE_URL}users`, body)
      .then(() => {
        clearForm();
        setIsLoading(false);
        return true;
      })
      .catch(err => {
        console.log('registerUserRequest error:', err.response.data.message);
        setIsLoading(false);
        return false;
      });
  }

  private openAntdNotification = (errorMensage: string) => {
    message.error(errorMensage);
  };

  public async getUserList(setUserListLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }): Promise<LocalUserModel[] | []>{
    return await axios.get(`${this.BASE_URL}users`).then((response: any) => {
      return response.data;
    }).catch(error => {
      console.log('getUserList error:', error.message || error.response?.data?.message);
      setUserListLoading(false);
      return [];
    });
  }
}