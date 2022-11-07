import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';

import { get } from 'lodash';

import { Section } from 'components/section';
import SEO from 'components/seo';

import { LanguageStore } from 'store/language';

import './style.scss';

export function About() {
  const { languageCollection } = useContext(LanguageStore);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO titlePage="About Us" />

      <Col xs={24}>
        <div className="pd-about-cover">
          <div className="content">
            <div className="heading">
              {get(languageCollection, 'about_title', '')}
            </div>
            <div className="description pd-align-center">
              {get(languageCollection, 'about_subtitle', '')}
            </div>
          </div>
          <div className="img-container">
            <img
              src={get(languageCollection, 'about_banner_image', '')}
              alt="Banner"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Col>
      <Section className={'pd-about'}>
        <Row display="flex" align="middle">
          <Col xs={24} style={{ padding: 0 }}>
            <div className="pd-about-content">
              <Col xs={24} lg={12}>
                <div className="image-container">
                  <img
                    src={get(languageCollection, 'about_image', '')}
                    alt="Tentang STR"
                  />
                </div>
              </Col>
              <Col
                xs={24}
                lg={{ span: 11, offset: 1 }}
                style={{ paddingRight: 0 }}>
                <ul className="values font-ropasans">
                  <li>
                    <div className="title">
                      {get(languageCollection, 'about_1_title', '')}
                    </div>
                    <div className="description">
                      {get(languageCollection, 'about_1_description', '')}
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      {get(languageCollection, 'about_2_title', '')}
                    </div>
                    <div className="description">
                      {get(languageCollection, 'about_2_description', '')}
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      {get(languageCollection, 'about_3_title', '')}
                    </div>
                    <div className="description">
                      {get(languageCollection, 'about_3_description', '')}
                    </div>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
        </Row>

        {/* <Row style={{ marginTop: '30px' }}>
          <Col xs={6}>
            <img
              src={`${process.env.PUBLIC_URL}/logos/Honda.png`}
              style={{ width: '75%' }}
              alt="Honda"
            />
          </Col>
          <Col xs={6}>
            <img
              src={`${process.env.PUBLIC_URL}/logos/Yamaha.png`}
              style={{ width: '75%' }}
              alt="Yamaha"
            />
          </Col>
          <Col xs={6}>
            <img
              src={`${process.env.PUBLIC_URL}/logos/Kawasaki.png`}
              style={{ width: '75%' }}
              alt="Kawasaki"
            />
          </Col>
          <Col xs={6}>
            <img
              src={`${process.env.PUBLIC_URL}/logos/Suzuki.png`}
              style={{ width: '75%' }}
              alt="Suzuki"
            />
          </Col>
        </Row> */}
        <Row>
          <Col xs={24}>
            <div className="testimony pd-margin-top-xl">
              {get(languageCollection, 'about_closing', '')}
            </div>
          </Col>
        </Row>
      </Section>
    </>
  );
}

export default { About };
