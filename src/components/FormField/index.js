import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';

const FormFieldWrapper = Styled.div`
position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = Styled.label``;
Label.Text = Styled.span`

color: #E5E5E5;
height: 57px;
position: absolute; 
top: 0;
left: 16px;

display: flex;
align-items: center;

transform-origin: 0% 0%;
font-size: 18px;
font-style: normal;
font-weight: 300;

transition: .1s ease-in-out;

`;

const Input = Styled.input`
background: #53585D;
color: #F5F5F5;
display: block;
width: 100%;
height: 57px;
font-size: 18px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-bottom: 4px solid #53585D;

padding: 16px 16px;
margin-bottom: 45px;

resize: none;
border-radius: 4px;
transition: border-color .3s;

&:focus {
  border-bottom-color: var(--primary);
}
&:focus:not([type='color']) + ${Label.Text} {
  transform: scale(.6) translateY(-10px);
}

${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
      }
    `;
  }
}
`;

function FormField({
  label,
  value,
  name,
  onChange,
  type,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = value.length;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  name: 'text',
  onChange: () => { },
};

FormField.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default FormField;
