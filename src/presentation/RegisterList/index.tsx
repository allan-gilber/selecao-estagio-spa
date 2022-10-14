import React from 'react';
import {RegisterListContainer, TitleBox, TableBox, ContactSection} from './styles.js';
import {DataParser} from '../../business/dataParser/DataParser';
import {LocalUserModel} from '../../model/UserModel.js';

const RegisterList = () => {


  const array: LocalUserModel[] = [
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'},
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'},
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'}
  ];

  return (
    <RegisterListContainer>
      <TitleBox>
        <h3 className='pageTitles'>LISTA DE CADASTRO</h3>
      </TitleBox>
      <TableBox>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                Nome
              </th>
              <th>
                E-MAIL
              </th>
              <th>
                NASCIMENTO
              </th>
              <th>
            TELEFONE
              </th>
            </tr>
          </thead>
          <tbody>
            {new DataParser().tableDataFormater(array)}
          </tbody>
        </table>
      </TableBox>
      <ContactSection>
        <aside>
          Fulano Beltrano de Oliveira da Silva
        </aside>
        <aside>
          fulanobos@gmail.com
        </aside>
        <aside>
          (31) 9 9666-1111
        </aside>
        <aside>
          Faculdade de Belo Horizonte
        </aside>
      </ContactSection>
    </RegisterListContainer>
  );
};

export default RegisterList;