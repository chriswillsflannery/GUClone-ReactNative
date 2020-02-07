import React from 'react';

class SignupForm extends React.Component {
  handleSubmit = ({ firstName, lastName }) => {
    console.log(`firstName: ${firstName}`);
    console.log(`lastname: ${lastName}`);
  };
}

export default SignupForm;
