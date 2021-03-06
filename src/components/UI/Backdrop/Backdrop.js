import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ show, onClick }) => (
  show ? <div className={classes.Backdrop} onClick={onClick} /> : null
);

export default Backdrop;