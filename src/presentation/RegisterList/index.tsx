import React, {useEffect} from 'react';
import {RegisterListContainer, TitleBox, TableBox, ContactSection} from './styles.js';
// import t from '../../data/assets/icons/topo-pag.svg';

const RegisterList = () => {

  const arrowIcon = require('../../data/assets/icons/topo-pag.svg');

  const array = [
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'},
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'},
    {userName: 'teste', email: 'teste@teste', birthdate: '05/05/2020', phoneNumber: '31996661111'}
  ];

  // function tableRender(){
  //   let arrayOfElements = [];

  //   for (let index = 0;  index < 4; index++){
  //     console.log(index + 1, array[index]? array[index].userName : '', index, index < array.length || index < 4, index < array.length, index < 4);
  //     arrayOfElements.push(
  //       <tr>
  //         <td>{index + 1}</td>
  //         <td>{array[index]? array[index].userName : ''}</td>
  //         <td>{array[index]? array[index].email : ''}</td>
  //         <td>{array[index]? array[index].birthdate : ''}</td>
  //         <td>{array[index]? array[index].phoneNumber : ''}</td>
  //       </tr>)
  //     );
  //   }
  // }
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
      <img src={arrowIcon.default}></img>
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