import React, { useContext } from 'react';
import { Col, Row } from 'antd';

import { get } from 'lodash';

import { LanguageStore } from 'store/language';

import './style.scss';

export default function Map() {
  const { languageCollection } = useContext(LanguageStore);

  return (
    <section id="map" className="map">
      <Row>
        <Col xs={24}>
          <div className="heading" style={{ fontWeight: 'normal' }}>
            <div>{get(languageCollection, 'address_section_title', '')}</div>
          </div>
        </Col>
        <Col xs={24} lg={{ span: 22, offset: 1 }}>
          <div className="image">
            <img
              alt="str-product"
              src={`${process.env.PUBLIC_URL}/coverage.png`}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <hr className="dash" />
      </Row>
      <Row type="flex" justify="space-between">
        <Col xs={24} md={16} lg={13}>
          <div>{get(languageCollection, 'address_line_1', '')}</div>
          <div>{get(languageCollection, 'address_line_2', '')}</div>
        </Col>
        <Col xs={24} md={8} lg={11}>
          <div className="phone">
            <div>{get(languageCollection, 'phone_number', '')}</div>
          </div>
          <div className="email">
            <div>{get(languageCollection, 'email', '')}</div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
