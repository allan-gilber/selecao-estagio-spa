import React from 'react';
import {RegisterListContainer, TitleBox, TableBox, ContactSection} from './styles.js';

const RegisterList = () => {

  const arrowIcon = require('../../data/assets/icons/topo-pag.svg');

  const array = [
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
            <tr>
              <td>{1}</td>
              <td>{array[1]? array[1].userName : ''}</td>
              <td>{array[1]? array[1].email : ''}</td>
              <td>{array[1]? array[1].birthdate : ''}</td>
              <td>{array[1]? array[1].phoneNumber : ''}</td>
            </tr>
            <tr>
              <td>{2}</td>
              <td>{array[2]? array[2].userName : ''}</td>
              <td>{array[2]? array[2].email : ''}</td>
              <td>{array[2]? array[2].birthdate : ''}</td>
              <td>{array[2]? array[2].phoneNumber : ''}</td>
            </tr>
            <tr>
              <td>{3}</td>
              <td>{array[3]? array[3].userName : ''}</td>
              <td>{array[3]? array[3].email : ''}</td>
              <td>{array[3]? array[3].birthdate : ''}</td>
              <td>{array[3]? array[3].phoneNumber : ''}</td>
            </tr>
            <tr>
              <td>{4}</td>
              <td>{array[4]? array[4].userName : ''}</td>
              <td>{array[4]? array[4].email : ''}</td>
              <td>{array[4]? array[4].birthdate : ''}</td>
              <td>{array[4]? array[4].phoneNumber : ''}</td>
            </tr>
          </tbody>
        </table>
      </TableBox>
      <img src={arrowIcon.default} onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }}></img>
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