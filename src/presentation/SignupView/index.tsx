import React from 'react';

import {Button, Form, Input} from 'antd';
import {SignupViewContainer, FormContainer} from './styles';

import useForm from '../../business/useForm';

const SignupView = () => {

  const formInitialState = {
    name: '',
    email: '',
    birthday: '',
    phoneNumber: ''
  };

  const [form, onChange] = useForm(formInitialState);

  return (
    <SignupViewContainer>
      <FormContainer>
        <header>
          <h3 className='pageTitles'>CADASTRO</h3>
        </header>
        <Form
          layout={'vertical'}
          // labelCol= { {span: 4} }
          // wrapperCol= { {span: 14} }
        >
          <Form.Item
            label="Nome"
          >
            <Input
              placeholder='Digite seu nome'
              value={form.name}
              onChange={() => onChange()}
            />
          </Form.Item>
          <Form.Item
            label="E-mail"
          >
            <Input
              placeholder='Digite seu e-mail'
              value={form.email}
              onChange={() => onChange()}
            />
          </Form.Item>
          <Form.Item
            label="Nascimento"
          >
            <Input
              name="birthdate"
              placeholder='Digite sua data de nascimento'
              value={form.birthdate}
              onChange={() => onChange()}
            />
          </Form.Item>
          <Form.Item
            label="Telefone"
          >
            <Input
              name="phoneNumber"
              placeholder='Digite seu telefone'
              value={form.phoneNumber}
              onChange={() => onChange()}
            />
          </Form.Item>
        </Form>
        <Button
          id='register-button-size'
        >
          CADASTRAR
        </Button>
      </FormContainer>
    </SignupViewContainer>
  );
};

export default SignupView;