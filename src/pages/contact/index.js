import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Section } from 'components/section';

import { get } from 'lodash';

import { PageSpinner } from 'components/page-spinner';
import PdForm from 'components/form';
import Map from 'components/map';
import SEO from 'components/seo';

import { LanguageStore } from 'store/language';

import './style.scss';

export function Contact() {
  const { languageCollection, loading } = useContext(LanguageStore);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <SEO titlePage="Contact" />

      <Col xs={24}>
        <div className="pd-contact-cover">
          <div className="content">
            <div className="heading">
              {get(languageCollection, 'contact_title', '')}
            </div>
          </div>
          <div className="img-container">
            <img
              src={get(languageCollection, 'contact_banner_image', '')}
              alt="Banner"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Col>

      <Section className={'pd-contact'}>
        <Row gutter={32} display="flex" align="middle">
          <Col xs={24}>
            <PdForm />
          </Col>
        </Row>
      </Section>
      <Map />
    </>
  );
}

export default { Contact };
