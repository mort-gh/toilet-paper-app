export const result = (state = 0, { type, payload }) => {
  switch (type) {
    case 'CHANGE_VALUE':
      return (state = payload);

    default:
      return state;
  }
};
