/* eslint-disable no-useless-escape */
import { useMemo, useReducer, useState } from 'react';
import { toast, ToastContainer } from 'react-toast';

/* eslint-disable max-statements */
function useForm() {
  const initState = {
    name: '',
    email: '',
    count: 1,
    dateValue: '',
    emailError: '',
    allError: '',
  };

  const [state, dispatch] = useReducer((states, value) => ({ ...states, ...value }), initState);

  const { count, name, email } = state;
  const addClick = () => {
    dispatch({ count: count + 1 });
  };
  const subClick = () => {
    dispatch({ count: count - 1 });
  };
  const amountOfPeople = useMemo(() => {
    if (count > 1) {
      return `${count} persons`;
    }
    if (count === 1) {
      return `${count} person`;
    } return null;
  }, [count]);
  function handleName(e) {
    dispatch({ name: e.target.value });
  }
  function handleEmail(e) {
    dispatch({ email: e.target.value });
  }
  const [openDate, setOpenDate] = useState(false);
  function handleOpen() {
    setOpenDate(true);
  }
  function handleClose() {
    setOpenDate(false);
  }
  const isSubmitDisabled = useMemo(
    () => (!email || !name),
    [email, name],
  );
  function handleSubmit(e) {
    e.preventDefault();
    toast.success('Your Reservation was successful!');
      <ToastContainer />;
      if (state?.name === '' || state?.email === '') {
        dispatch({ allError: 'All Fields are required!!! ' });
      }
      if (state?.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return console.log('correct');
      } return dispatch({ emailError: 'Invalid email!!!' });
  }
  return {
    count,
    addClick,
    subClick,
    amountOfPeople,
    state,
    dispatch,
    handleEmail,
    handleName,
    openDate,
    handleOpen,
    handleClose,
    handleSubmit,
    isSubmitDisabled,
  };
}

export default useForm;
