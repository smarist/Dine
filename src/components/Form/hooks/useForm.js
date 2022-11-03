import { useMemo, useReducer, useState } from 'react';

/* eslint-disable max-statements */
function useForm() {
  const initState = {
    name: '',
    email: '',
    count: 1,
    dateValue: '',
  };

  const [state, dispatch] = useReducer((states, value) => ({ ...states, ...value }), initState);

  const { count } = state;
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
  };
}

export default useForm;
