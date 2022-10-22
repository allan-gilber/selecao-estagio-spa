import React, {useEffect, useState} from 'react';
import {RegisterListContainer, TitleBox, TableBox, ContactSection} from './styles.js';
import {DataParser} from '../../business/dataParser/DataParser';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {AxiosRequest} from '../../business/services/axiosServices';

const RegisteredList = () => {
  const [userListloading, setUserListLoading] = useState(true);
  const [userData, setUserData]: any = useState([]);
  const antIcon = <LoadingOutlined style={{fontSize: 60}} spin></LoadingOutlined>;


  const getUserData = async () => {
    const response = await new AxiosRequest().getUserList(setUserListLoading);
    setUserData(response);
    setUserListLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log('teste', userData);
  }, [ userData ]);


  return (
    <RegisterListContainer>
      <TitleBox>
        <h3 className='pageTitles'>LISTA DE CADASTRO</h3>
      </TitleBox>
      <TableBox>

        <Spin
          size='large'
          indicator={antIcon}
          delay={800}
          spinning={userListloading}
        >
          <table>
            <thead>
              <tr>
                <th/>
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
              {new DataParser().tableDataFormater(userData)}
            </tbody>
          </table>
        </Spin>
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

export default RegisteredList;