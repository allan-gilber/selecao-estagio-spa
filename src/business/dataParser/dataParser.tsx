import React from 'react';
import {LocalUserModel} from '../../model/UserModel';


export class DataParser {

  public formatPhoneNumber(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2 ');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
  }

  public tableDataFormater(localUserArray: LocalUserModel[]) {
    const tableList: React.ReactElement[] = [];

    for (let index = 0; index < 4; index++){
      tableList.push(
        <tr key={index}>
          <td >{index + 1}</td>
          <td>{localUserArray[index]? localUserArray[index].userName : ''}</td>
          <td>{localUserArray[index]? localUserArray[index].userEmail : ''}</td>
          <td>{localUserArray[index]? localUserArray[index].userBirthday : ''}</td>
          <td>{localUserArray[index]? this.formatPhoneNumber(localUserArray[index].userPhoneNumber) : ''}</td>
        </tr>
      );
    }

    return tableList;
  }

}