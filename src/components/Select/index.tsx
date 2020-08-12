import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name, label, options, ...rest
}) => (
  <div className="select-block">
    <label htmlFor={name}>
      {label}
      <select id={name} value="" {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.label}</option>;
        })}
      </select>
    </label>
  </div>
);

export default Select;
