import React, {useEffect, useState} from 'react';

import {Button, Form, Input} from 'antd';
import {SignupViewContainer, FormContainer} from './styles';
import {DataParser} from '../../business/dataParser/DataParser';
import {AxiosRequest} from '../../business/services/axiosServices';

const SignupView = () => {

  const clearedForm = {
    userName: '',
    userEmail: '',
    userBirthday: '',
    userPhoneNumber: '',
    maskedNumber: ''
  };
  const [form, setForm] = useState(clearedForm);

  const clearForm = () => {setForm(clearedForm);};

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm({...form, maskedNumber: new DataParser().formatPhoneNumber(form.userPhoneNumber)});
  }, [ form.userPhoneNumber ]);

  return (
    <SignupViewContainer>
      <FormContainer>
        <header>
          <h3 className='pageTitles'>CADASTRO</h3>
        </header>
        <Form
          layout={'vertical'}
        >
          <Form.Item
            label="Nome"
          >
            <Input
              placeholder='Digite seu nome'
              value={form.userName}
              onChange={e => {
                setForm({...form, userName: e.target.value});
              }}
            />
          </Form.Item>
          <Form.Item
            label="E-mail"
          >
            <Input
              placeholder='Digite seu e-mail'
              value={form.userEmail}
              onChange={e => setForm({...form, userEmail: e.target.value})}
            />
          </Form.Item>
          <Form.Item
            label="Nascimento"
          >
            <Input
              name="userBirthday"
              minLength={3}
              type='date'
              placeholder='Digite sua data de nascimento'
              value={form.userBirthday}
              onChange={e => setForm({...form, userBirthday: e.target.value})}
            />
          </Form.Item>
          <Form.Item
            label="Telefone"
          >
            <Input
              name="userPhoneNumber"
              placeholder='Digite seu telefone'
              value={form.maskedNumber}
              maxLength={15}
              onChange={e => setForm({...form, userPhoneNumber: e.target.value})}
            />
          </Form.Item>
        </Form>
        <Button
          id='register-button-size'
          loading={loading}
          onClick={e => {
            e.preventDefault;
            new AxiosRequest().registerUser(form, setLoading, clearForm);
          }}
        >
          {loading ? '' : 'CADASTRAR'}
        </Button>
      </FormContainer>
    </SignupViewContainer>
  );
};

export default SignupView;