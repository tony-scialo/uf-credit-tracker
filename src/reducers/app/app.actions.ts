const types = {
  LOG_USER_IN: '[APP ACTION] LOG USER IN',
}

const logUserIn = () => {
  return {
    type: types.LOG_USER_IN,
  }
}

export { types }
