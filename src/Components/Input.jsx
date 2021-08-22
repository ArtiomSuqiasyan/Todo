import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  onClick,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );
}
