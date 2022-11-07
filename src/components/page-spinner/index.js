import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';

import './style.scss';

PageSpinner.propTypes = {
  className: PropTypes.string,
};

export function PageSpinner(props) {
  const { className = '' } = props;

  return (
    <div className={`pd-section ${className}`}>
      <Spin size="large" indicator={<Icon type="loading" />} />
    </div>
  );
}

export default { PageSpinner };
