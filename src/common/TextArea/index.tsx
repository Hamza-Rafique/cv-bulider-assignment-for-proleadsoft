import React from "react";

const TextArea = ({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  error,
  label,
}: any) => {
  return (
    <div className="mb-4 w-1/2 mr-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
       {label}
      </label>
      <textarea
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <div className="text-red-500 text-sm mt-1">{error}</div> : null}
    </div>
  );
};

export default TextArea;
