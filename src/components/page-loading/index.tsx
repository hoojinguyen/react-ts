import React from 'react';
import Spinner from '../spinner';

interface IProps {
  show?: boolean;
}

const PageLoading: React.FC<IProps> = ({ show }) => {
  const showLoading = typeof show === 'boolean' ? show : true;

  return (
    <div
      className="page-loading"
      style={{ display: showLoading ? '' : 'none' }}
    >
      <div className="loading-content">
        <Spinner />
      </div>
    </div>
  );
};

export default PageLoading;
