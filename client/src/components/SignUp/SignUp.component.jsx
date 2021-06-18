import { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signUpStart } from '../../redux/User/User.actions';

import {
  SignUpContainer,
  TitleContainer
} from './SignUp.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    signUpStart({displayName, email, password});
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>Je n'ai pas de compte</TitleContainer>
      <span>S'inscrire avec votre email et mot de passe</span>
      <form className="sign-up-form" onSubmit={ handleSubmit }>
        <FormInput
          type='text'
          name='displayName'
          value={ displayName }
          onChange={ handleChange }
          label='Display name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={ email }
          onChange={ handleChange }
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={ password }
          onChange={ handleChange }
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={ confirmPassword }
          onChange={ handleChange }
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>S'INSCRIRE</CustomButton>
      </form>
    </SignUpContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);