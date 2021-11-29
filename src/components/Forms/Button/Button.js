import React from 'react';

import styles from './button.module.css';

export const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
