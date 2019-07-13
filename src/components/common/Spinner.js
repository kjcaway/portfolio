import React from "react";
import Loader from 'react-loader-spinner'
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader
        type="ThreeDots"
        color="#5d5a5a"
        height="70"
        width="70"
      />
    </div>
  );
};

export default Spinner;
