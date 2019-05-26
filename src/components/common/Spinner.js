import React from "react";
import Loader from 'react-loader-spinner'
import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <Loader
          type="ThreeDots"
          color="#772d9e"
          height="70"
          width="70"
        />
      </div>
  );
};

export default Spinner;
