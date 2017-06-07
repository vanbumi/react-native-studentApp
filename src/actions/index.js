export const emailChanged = (text) => {
  return { // why {} becoz return in object
    type: 'email_change',
    payload: text
  };
};

