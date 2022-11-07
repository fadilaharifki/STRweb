import React from 'react';
import { Col, Button, Input, Row } from 'antd';

import './style.scss';

export default function PdForm() {
  return (
    <div className="pd-form">
      <form action="https://formspree.io/info@belipart.com" method="POST">
        <Row gutter={16}>
          <Col xs={24}>
            <label className="label">EMAIL</label>
            <Input id="email" className="email" type="email" name="email" />
          </Col>
          <Col xs={24} lg={12}>
            <label className="label">NAMA</label>
            <Input id="name" className="name" type="name" name="name" />
          </Col>
          <Col xs={24} lg={12}>
            <label className="label">NOMOR TELEPON</label>
            <Input id="number" className="number" type="tel" name="number" />
          </Col>
          <Col xs={24}>
            <label className="label">PESAN</label>
            <Input.TextArea id="message" className="message" name="message" />
          </Col>

          <Col xs={24}>
            <Button className="button" htmlType="submit">
              KIRIM
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}
