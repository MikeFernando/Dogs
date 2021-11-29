import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { FormLogin } from './FormLogin';
import { CreateLogin } from './CreateLogin';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';

import styles from './login.module.css';

export const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="create" element={<CreateLogin />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};
