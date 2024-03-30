import React from 'react';

const ButtonRed = ({
  data = 'button',
  type = 'button',
  classname,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${classname}`}
      {...props}>
      {data}
    </button>
  );
};
export default ButtonRed;
