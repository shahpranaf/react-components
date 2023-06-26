import React from 'react';
import className from 'classnames';

function Button({
  children,
  variations,
  outline,
  rounded,
  ...restProps
}) {

  const classesN = className(
    restProps?.className, 
    'flex items-center px-3 py-1.5 border', {
    'bg-blue-500 border-blue-600 text-white': variations === 'primary',
    'bg-gray-900 border-gray-900 text-white': variations === 'secondary',
    'bg-yellow-500 border-yellow-600 text-white': variations === 'warning',
    'bg-red-500 border-red-600 text-white': variations === 'danger',
    'bg-green-500 border-green-600 text-white': variations === 'success',
    'rounded-md': rounded,
    'bg-white': outline,
    'text-blue-500': outline && variations === 'primary',
    'text-gray-500': outline && variations === 'secondary',
    'text-yellow-500': outline && variations === 'warning',
    'text-red-500': outline && variations === 'danger',
    'text-green-500': outline && variations === 'success'
  });

  return (
    <button {...restProps} className={classesN} >{children}</button>
  ); 
}
  
export default Button;