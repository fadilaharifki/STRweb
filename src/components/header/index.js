import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';

import { get } from 'lodash';

import MobileMenu from 'components/mobile-menu';

import { LanguageStore } from 'store/language';

import './style.scss';

export function Header() {
  const { languageCollection } = useContext(LanguageStore);

  const [transformActive, setTransformActive] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function handleMobileMenu(isOpen = false) {
    setMobileMenuVisible(isOpen);
  }

  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener(
      'scroll',
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setTransformActive(false);
        } else {
          setTransformActive(true);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }, []);

  return (
    <>
      {mobileMenuVisible && (
        <MobileMenu handleClose={() => handleMobileMenu(false)} />
      )}
      <header>
        <nav
          className={`pd-header ${
            transformActive ? '' : 'pd-header--transform'
          }`}>
          <Row type="flex" align="middle" gutter={16}>
            <Col xs={4} lg={{ offset: 1, span: 3 }}>
              <NavLink to="/">
                <div className="pd-header-logo">
                  <img
                    src={get(languageCollection, 'logo_image', '')}
                    alt="STR Indonesia"
                  />
                </div>
              </NavLink>
            </Col>

            <Col xs={18} lg={10}>
              &nbsp;
            </Col>

            <Col xs={1} lg={0}>
              <Icon
                className="menu-icon"
                onClick={() => handleMobileMenu(true)}
                type="menu"
              />
            </Col>

            <Col xs={0} lg={{ span: 8, offset: 1 }}>
              <div className="pd-header-right">
                <ul className="menu font-ropasans">
                  <NavLink exact={true} className="nav-link" to="/">
                    <li>Beranda</li>
                  </NavLink>
                  <NavLink className="nav-link" to="/products?filter=all">
                    <li>Produk</li>
                  </NavLink>
                  <NavLink className="nav-link" to="/about-us">
                    <li>Tentang Kami</li>
                  </NavLink>
                  <NavLink className="nav-link" to="/contact">
                    <li>Hubungi Kami</li>
                  </NavLink>
                </ul>
              </div>
            </Col>
          </Row>
        </nav>
        <div className="leverage">&nbsp;</div>
      </header>
    </>
  );
}

export default { Header };
