import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import dompurify from 'dompurify';

import { get } from 'lodash';

import { LanguageStore } from 'store/language';

import './style.scss';

export function Footer() {
  const { languageCollection } = useContext(LanguageStore);
  // const sanitizer = dompurify.sanitize;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pd-footer">
      <Row gutter={16}>
        <Col xs={24} lg={{ span: 9, offset: 4 }}>
          <div className="pd-footer__left">
            {get(languageCollection, 'footer_description', '')}
          </div>
        </Col>

        <Col xs={12} lg={{ offset: 2, span: 2 }}>
          <p className="title">Produk</p>
          <ul className="list">
            {languageCollection &&
              languageCollection.categories &&
              languageCollection.categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/products/?filter=${category.title}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
          </ul>
        </Col>

        <Col xs={12} md={{ offset: 0, span: 5 }} lg={{ offset: 1, span: 3 }}>
          <p className="title">Info</p>
          <ul className="list">
            <li>
              <Link to="/" smooth="true" offset={-50} duration={200}>
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/products?filter=all"
                smooth="true"
                offset={-50}
                duration={200}>
                Produk
              </Link>
            </li>
            <li>
              <Link to="/about-us" smooth="true" offset={-50} duration={200}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/contact" smooth="true" offset={-50} duration={200}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={{ span: 16, offset: 4 }}>
          <hr />
        </Col>
      </Row>
      <Row type="flex" align="middle">
        <Col xs={24} lg={{ span: 20, offset: 4 }} className="media">
          Copyright &#9400; {currentYear} STR Indonesia. All rights reserved.
        </Col>
      </Row>
    </footer>
  );
}

export default { Footer };
