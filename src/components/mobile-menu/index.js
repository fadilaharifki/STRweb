import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Col, Icon, Row } from 'antd';

import './style.scss';

function MobileMenu(props) {
  const { handleClose } = props;

  return (
    <div className="pd-mobile-menu font-ropasans">
      <Row className="header">
        <Col
          className="side-btn pd-align-right"
          xs={{ span: 2, offset: 1 }}
          sm={{ span: 2, offset: 1 }}
          onClick={handleClose}>
          <Icon type="close" />
        </Col>
        <Col xs={24} sm={24} className="title">
          Menu
        </Col>
      </Row>
      <Row>
        <div className="mobile-menu">
          <Link to={'/'} onClick={handleClose}>
            <div className="menu">Beranda</div>
          </Link>

          <Link to={'/products?filter=all'} onClick={handleClose}>
            <div className="menu">Produk</div>
          </Link>

          <Link to={'/about-us'} onClick={handleClose}>
            <div className="menu">Tentang Kami</div>
          </Link>

          <Link to={'/contact'} onClick={handleClose}>
            <div className="menu">Hubungi Kami</div>
          </Link>
        </div>
      </Row>
    </div>
  );
}

MobileMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default MobileMenu;
