import React, { ChangeEvent, FC, useEffect, useState } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  validate?: (value: any) => {};
  onChange?: (value: any) => void;
  onClick?: (e?: any) => void;
}

const Input: FC<InputProps> = (props) => {
  const { type = 'text', placeholder = '', className, value = '', validate, onChange, onClick, ...rest } = props;
  const [inputValue, setInputVlaue] = useState(value);

  useEffect(() => {
    setInputVlaue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e?.currentTarget as HTMLInputElement;

    if (validate && !validate(value)) {
      return;
    }
    setInputVlaue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return <input onChange={(e: ChangeEvent) => handleChange(e)} onClick={onClick} value={inputValue} type={type} placeholder={placeholder} className={className} {...rest} />;
};

export default Input;
