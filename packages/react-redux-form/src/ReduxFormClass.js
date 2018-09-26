import React from 'react';
import { reduxForm } from 'redux-form';
import List from '@nelreina/react-list';
import { each, assign, isString, isArray, keyBy } from 'lodash';

import { Spinner, Button } from '@nelreina/react-components';
import FieldItem from './FieldItem';
import { FormError, FormField } from './styled';
import {
  checkRequiredFields,
  checkMinLength,
  checkMaxLength,
  checkType,
  checkIsEqual
} from './validations';

class ReduxFormClass {
  constructor(name, fields, initialValues, customValidator) {
    this._formName = name;
    this._fields = fields;
    this._initialValues = initialValues;
    this._customValidator = customValidator;
  }
  button = (text, classNames) => {
    this._buttonClass = classNames;
    this._buttonText = text;
    return this;
  };
  validate = values => {
    let errors = {};
    each(this._fields, (config, key) => {
      const name = isString(key) ? key : config.name;
      config['name'] = name;
      const req = checkRequiredFields(values[name], config, name);
      const max = checkMaxLength(values[name], config, name);
      const min = checkMinLength(values[name], config, name);
      const type = checkType(values[name], config, name);
      const eql = checkIsEqual(values, values[name], config, name);
      let cus;
      if (this._customValidator) {
        cus = this._customValidator(values[name], config, name);
      }
      errors = assign({}, errors, cus, max, min, type, eql, req);
    });
    return errors;
  };
  getComponent = (showButton = true) => {
    if (isArray(this._fields)) {
      let allFieldsContainsName = true;
      this._fields.forEach(field => {
        if (!('name' in field)) {
          allFieldsContainsName = false;
        }
      });
      if (allFieldsContainsName) {
        this._fields = keyBy(this._fields, 'name');
      } else {
        return () => (
          <FormError>
            All objects in Array must contain a "name" field
          </FormError>
        );
      }
    }
    let Form = props => {
      const { handleSubmit, action, loading } = props;
      return (
        <form onSubmit={handleSubmit(action)}>
          <FormField>
            <List
              of={FieldItem}
              iterator={this._fields}
              keyname="name"
              formname={this._formName}
            />
          </FormField>
          {showButton && (
            <Button
              btn={[this._buttonClass, loading ? 'disabled' : ''].join(' ')}
              type="submit"
              disabled={loading}
            >
              {loading && <Spinner />}
              {'   '}
              {this._buttonText || 'Submit'}
            </Button>
          )}
        </form>
      );
    };

    Form = reduxForm({
      form: this._formName,
      initialValues: this._initialValues,
      validate: this.validate
    })(Form);

    return Form;
  };
}

export default ReduxFormClass;
