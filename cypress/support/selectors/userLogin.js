const loginDetails = {
  email: '[placeholder="Email"]',
  password: '[placeholder="Password"]',
  resetPassword:'[placeholder="your@email.com"]'
};

const createDetails = {
  firstName: '[placeholder="First Name"]',
  lastName: '[placeholder="Last Name"]',
  phone: '[placeholder="Phone"]',
  eMail: '[placeholder="Email"]',
  roleCombobox: '[role="combobox"]'
};

const buttons = {
  login: ".btn-lg",
  payNow: ".col-md-12 > .btn",
  signUp: ".col-md-12 > .btn",
  signUpBlue: ".mt-3 > .btn"
};
const inputs = {
  addFunds: ".col-md-12 > .form-group > .form-control",
};

const demoUser = {
  email: "user@phptravels.com",
  password: "demouser",
};

const agentUser = {
  email: "agent@phptravels.com",
  password: "demoagent",
};

const links = {
  addFunds: ".user_wallet > .waves-effect",
  resetPass : "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(2) > div.d-flex.align-items-center.justify-content-between > div:nth-child(2) > label",
};

export { loginDetails, buttons, demoUser, agentUser, inputs, links, createDetails };
