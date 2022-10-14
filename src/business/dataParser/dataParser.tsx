import React from 'react';
import {LocalUserModel} from '../../model/UserModel';

export class DataParser {
  public formatPhoneNumber(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
  }

  public tableDataFormater(array: LocalUserModel[]) {
    const tableList: React.ReactElement[] = [];

    for (let index = 0; index < 4; index++){
      tableList.push(
        <tr key={index}>
          <td >{index + 1}</td>
          <td>{array[index]? array[index].userName : ''}</td>
          <td>{array[index]? array[index].email : ''}</td>
          <td>{array[index]? array[index].birthdate : ''}</td>
          <td>{array[index]? array[index].phoneNumber : ''}</td>
        </tr>
      );
    }

    return tableList;
  }

}