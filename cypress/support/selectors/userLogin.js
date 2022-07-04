const loginDetails = {
  email: '[placeholder="Email"]',
  password: '[placeholder="Password"]',
  resetPassword: '[placeholder="your@email.com"]',
};

const createDetails = {
  firstName: '[placeholder="First Name"]',
  lastName: '[placeholder="Last Name"]',
  phone: '[placeholder="Phone"]',
  eMail: '[placeholder="Email"]',
  roleCombobox: '[role="combobox"]',
};

const updateDetails = {
  phone:
    "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > table > tbody > tr:nth-child(3) > td:nth-child(3) > div > input",
  address1:
    "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > table > tbody > tr:nth-child(11) > td:nth-child(3) > div > input",
  address2:
    "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > table > tbody > tr:nth-child(12) > td:nth-child(3) > div > input",
  country:
    "#fadein > span > span > span.select2-search.select2-search--dropdown > input",
  state:
    "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > table > tbody > tr:nth-child(7) > td:nth-child(3) > div > input",
  city: "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.table-form.table-responsive.contact-form-action > table > tbody > tr:nth-child(8) > td:nth-child(3) > div > input",
};

const buttons = {
  login: ".btn-lg",
  payNow: ".col-md-12 > .btn",
  signUp: ".col-md-12 > .btn",
  signUpBlue: ".mt-3 > .btn",
  updateProfile:
    "#fadein > section.dashboard-area > div > div.dashboard-main-content > div > div.row > div > div > div.form-content > form > div.btn-box.mt-4 > button",
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
  resetPass:
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(2) > div.d-flex.align-items-center.justify-content-between > div:nth-child(2) > label",
  myProfile:
    "#fadein > div.sidebar-nav > div > div.sidebar-menu-wrap > ul > li:nth-child(4)",
};

export {
  loginDetails,
  buttons,
  demoUser,
  agentUser,
  inputs,
  links,
  createDetails,
  updateDetails,
};
