import React from 'react';

import { Icon } from 'antd';

import './style.scss';

export default function ModalMobile({ data, handleCloseModal }) {
  return (
    <div className="pd-modal-mobile">
      <div className="pd-modal-mobile-card">
        <div className="close-btn" onClick={() => handleCloseModal()}>
          <Icon type="close-circle" />
        </div>
        <div className="image-container">
          <img src={data.product_image} alt={data.title} />
        </div>
        <div className="heading">{data.title}</div>
        <div className="description">{data.product_description}</div>
      </div>
    </div>
  );
}
