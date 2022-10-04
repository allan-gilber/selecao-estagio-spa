import axios from 'axios';

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
}