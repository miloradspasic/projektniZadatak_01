const loginErrorPlaceholders = {
  field: ".alert-danger.failed",
  popUpMessage: '[class="waves-ripple"]',
  fundsMessage: ".exc-message > :nth-child(1)",
  successMessageph: ".message > .alert-success",
  alertBox: ".alert",
};

const errorMessages = {
  wrongDetails: "Wrong credentials. try again!",
  invalidFunds: "Unsupported operand types: int + string",
  usedEmail: "Email already exist!",
  emailDoesntExist :" No email exist use valid email",
};
const successMessages = {
  newUsercreated: "Signup successfull please login.",
};

export { loginErrorPlaceholders, errorMessages, successMessages };
