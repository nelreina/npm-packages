export default {
  SimpleForm: `
// SimpleForm.js
import { ReduxFormClass as Form } from 'nr-react-form';

const isRequired = true;

const fields = {
  userName: { isRequired, minLength: 3, maxLength: 10 },
  firstName: { isRequired },
  lastName: { isRequired },
  email: { type: 'email', isRequired },
  twitter: { type: 'twitter', label: 'Twitter Handle' }
};

const SimpleForm = new Form('SimpleForm', fields)
  .button('Simple', 'btn btn-dark btn-block')
  .getComponent();
export default SimpleForm;

// index.js
import SimpleForm from './SimpleForm';

render(){
    return <SimpleForm action={this.props.action} />
}
`,

  loginFormEmail: `
// index.js
import { LoginFormEmail } from 'nr-react-form';

render(){
    return <LoginFormEmail action={this.props.action} />
}
`,

  SignUpForm: `// SignUpForm.js
import { ReduxFormClass as Form } from 'nr-react-form';

const isRequired = true;

const fields = {
  userName: { isRequired, minLength: 3, maxLength: 10 },
  email: { type: 'email', isRequired },
  password: { type: 'password', isRequired, minLength: 6 },
  confirmPassword: { type: 'password', isRequired, equals: 'password' }
};

const init = {
  userName: 'nelreina',
  email: 'nelreina@gmail.com'
};

const SignUpForm = new Form('SignUpForm', fields, init)
  .button('Sign Up', 'btn btn-dark btn-block')
  .getComponent();
export default SignUpForm;


// index.js
import SignUpForm from './SignUpForm';

render(){
    return <SignUpForm action={this.props.action} />
}
`,
  AdvancedForm: `// AdvancedForm.js
import { ReduxFormClass as Form, validations } from 'nr-react-form';
import { assign } from 'lodash';
import S from 'string';

const job = ['Developer', 'Consultant', 'Project Manager'];
const isRequired = true;

const fields = {
  firstName: { type: 'text', isRequired, minLength: 3, maxLength: 10 },
  lastName: { type: 'text' },
  email: { type: 'email', isRequired },
  twitter: { type: 'twitter' },
  job: { type: 'select', options: job, isRequired },
  yearOfBirth: {
    type: 'number',
    label: 'Year',
    minLength: 4,
    maxLength: 4,
    minValue: 1900,
    adult: 18
  }
};
// Set initial Values
const initValues = {
  firstName: 'Nelson',
  lastName: 'Reina',
  email: 'nelreina@gmail.com',
  twitter: '@nelreina',
  job: 'Developer',
  yearOfBirth: 1974
};

// Create custom validation (Check yearOfBirth )
const { getMessage } = validations;
const validate = (value, config, name) => {
  let checkMinVal = {};
  let checkAdult = {};
  if (config.minValue) {
    const min = config.minValue;
    if (value < min) {
      const { label } = config;
      const template = '\${label} must be greather then \${value}';
      checkMinVal = getMessage({ name, label, value: min, template });
    }
  }
  if (config.adult) {
    if (S(value).isNumeric && new Date().getFullYear() - value < 18) {
      const template = 'You need to \${value} years or older';
      checkAdult = getMessage({ name, value: config.adult, template });
    }
  }
  return assign({}, checkMinVal, checkAdult);
};

const AdvancedForm = new Form('AdvancedForm', fields, initValues, validate)
  .button('Register', 'btn btn-dark btn-block')
  .getComponent();
export default AdvancedForm;
`,
  FieldArrayForm: `
import { ReduxFormClass as Form } from 'nr-react-form';

const isRequired = true;
const fields = {
  clubName: { isRequired, minLength: 3, maxLength: 10 },
  member: {
    type: 'field-array',
    legend: 'Members',
    arrayFields: {
      firstName: {},
      lastName: {},
      age: {}
    }
  }
};

const init = {
  clubName: 'Chess Club',
  member: [
    { firstName: 'Marco', lastName: 'Stravanov', age: '44' },
    { firstName: 'Sue', lastName: 'Allen', age: '31' }
  ]
};

const FieldArrayForm = new Form('FieldArrayForm', fields, init)
  .button(null, 'btn btn-dark btn-block')
  .getComponent();
export default FieldArrayForm;
`,
  SupportedInputType: `
import { ReduxFormClass as Form } from 'nr-react-form';

const isRequired = true;
const options = [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }];
const fields = {
  textInput: { label: 'Text Input' },
  emailInput: { type: 'email', label: 'Email Input' },
  rangeInput: { type: 'range', label: 'Range Input' },
  selectInput: { type: 'select', label: 'Select Input', options },
  textareaInput: { type: 'textarea', label: 'TextArea Input' },
  checkboxInput: { type: 'checkbox', label: 'Check Box' },
  radioInput: { type: 'radio', label: 'Radio Input', options }
};

const SupportedInputType = new Form('SupportedInputType', fields)
  .button(null, 'btn btn-dark btn-block')
  .getComponent();
export default SupportedInputType;
`
};
