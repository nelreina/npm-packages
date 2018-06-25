import React from 'react';
import S from 'string';
import { isString } from 'lodash';

import FieldCheck from './Bootstrap/FieldCheck';
import FieldRadio from './Bootstrap/FieldRadio';
import FieldReadOnly from './Bootstrap/FieldReadOnly';
import FieldSelect from './Bootstrap/FieldSelect';
import FieldText from './Bootstrap/FieldText';
import FieldTextArea from './Bootstrap/FieldTextArea';

S.extendPrototype();

export const getInputType = (type, props) => {
  let _type = type;
  if (_type === 'field-array') {
    _type = props.item.type;
  }
  switch (_type) {
    case 'select':
      return <FieldSelect {...props} />;
    case 'textarea':
      return <FieldTextArea {...props} />;
    case 'checkbox':
      return <FieldCheck type={type} {...props} />;
    case 'radio':
      return <FieldRadio type={type} {...props} />;
    case 'readonly':
      return <FieldReadOnly type={type} {...props} />;
    default:
      return <FieldText type={type} {...props} />;
  }
};

export const humanize = text => isString(text) && text.humanize().titleCase();
