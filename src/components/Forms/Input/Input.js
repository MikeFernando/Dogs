import React from 'react';

import styles from './input.module.css';

export const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type={type} id={name} name={name} />
      <p className={styles.error}>Error</p>
    </div>
  );
};
