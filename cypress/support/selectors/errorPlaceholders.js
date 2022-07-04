const loginErrorPlaceholders = {
  field: ".alert-danger.failed",
  popUpMessage: '[class="waves-ripple"]',
  fundsMessage: ".exc-message > :nth-child(1)",
  successMessageph: ".message > .alert-success",
  alertBox: ".alert",
  updateProfile: "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > div",
};

const errorMessages = {
  wrongDetails: "Wrong credentials. try again!",
  invalidFunds: "Unsupported operand types: int + string",
  usedEmail: "Email already exist!",
  emailDoesntExist: " No email exist use valid email",
};
const successMessages = {
  newUsercreated: "Signup successfull please login.",
  profileUpdated: "Profile updated successfully.",
};

export { loginErrorPlaceholders, errorMessages, successMessages };
