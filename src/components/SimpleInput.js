// import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {


  const { value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset } = useInput(value => {
      if (value.trim() !== '' && value.length >= 6)
      {
        return true
      } else { return false }
    });
  const { value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangedHAndler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset } = useInput(value => {
      if (value.trim().include('@'))
      {
        return true
      } else
      {
        return false
      }
    });

  // const [enteredName, setEnteredName] = useState('');
  // const [nameIsValid, setNameIsValid] = useState(false);
  // const [nameIsTouched, setNameIsTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsTouched, setEmailIsTouched] = useState(false);




  let formIsValid = false

  if (nameIsValid && emailIsValid)
  {
    formIsValid = true
  };









  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid)
    {

      return;
    }
    nameReset();
    emailReset();

    console.log('submitted successfully');
  };

  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailInputHasError ? 'form-control' :
    'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} value={enteredName}
          onBlur={nameBlurHandler} />
        {nameInputHasError && <p className='error-text'>please enter a valid name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHAndler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
