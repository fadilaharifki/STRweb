import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

import { get } from 'lodash';

import { PageSpinner } from 'components/page-spinner';
import PdForm from 'components/form';
import Map from 'components/map';
import SEO from 'components/seo';

import { LanguageStore } from 'store/language';

import './style.scss';

export function Home() {
  const { languageCollection, loading } = useContext(LanguageStore);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <SEO titlePage={get(languageCollection, 'meta_description', '')} />

      <div className="pd-home">
        <section id="video" className="pd-home-video">
          <video autoPlay playsInline muted loop>
            <source
              src={get(languageCollection, 'banner_video', '')}
              type="video/mp4"
            />
          </video>
        </section>

        <div className="container">
          <section id="explore" className="pd-home-explore">
            <Row>
              <Col xs={24}>
                <div className="heading">
                  {get(languageCollection, 'product_section_title', '')}
                </div>
              </Col>

              {languageCollection &&
                languageCollection.categories &&
                languageCollection.categories.map((category, index) => (
                  <Col xs={24} lg={8} key={index} className="explore-items">
                    <Link
                      to={`/products?filter=${category.title}`}
                      rel="noopener noreferrer">
                      <div className="item">
                        <div className="image">
                          <img
                            src={category.category_image}
                            style={{ width: '100%' }}
                            alt={category.title}
                          />
                        </div>
                        <div className="text">
                          <div className="title">{category.title}</div>
                          <div className="description">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}

              <Col xs={24} style={{ textAlign: 'center' }}>
                <Link to={'/products?filter=all'}>
                  <Button>
                    {get(languageCollection, 'product_section_button', '')}
                  </Button>
                </Link>
              </Col>
            </Row>
          </section>

          <section id="benefit" className="pd-home-benefit">
            <Row gutter={64} type="flex" align="middle">
              <Col xs={24} lg={12}>
                <img
                  src={get(languageCollection, 'why_us_image', '')}
                  alt="STR Benefit"
                />
              </Col>
              <Col xs={24} lg={12} className="font-ropasans">
                <div className="heading">
                  {get(languageCollection, 'why_us_subtitle', '')}
                </div>
                <div className="description description--black">
                  {get(languageCollection, 'why_us_description', '')}
                </div>
                <ul className="benefit-list">
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/verified.svg`}
                      alt="v"
                    />
                    <span>{get(languageCollection, 'why_us_point_1', '')}</span>
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/verified.svg`}
                      alt="v"
                    />
                    <span>{get(languageCollection, 'why_us_point_2', '')}</span>
                  </li>
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/verified.svg`}
                      alt="v"
                    />
                    <span>{get(languageCollection, 'why_us_point_3', '')}</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </section>

          <section id="shop" className="pd-home-shop">
            <Row gutter={64} type="flex" align="middle">
              <Col xs={24} lg={0}>
                <img
                  src={get(languageCollection, 'promo_section_image', '')}
                  alt="Shop"
                />
              </Col>
              <Col xs={24} lg={9}>
                <div className="text">
                  <div className="heading">
                    {get(languageCollection, 'promo_section_title', '')}
                  </div>
                  <div className="description description--black font-ropasans">
                    {get(languageCollection, 'promo_section_description', '')}
                  </div>
                  <a href={get(languageCollection, 'promo_section_link', '')}>
                    <Button>
                      {get(languageCollection, 'promo_section_button', '')}
                    </Button>
                  </a>
                </div>
              </Col>

              <Col xs={0} lg={{ offset: 5, span: 10 }}>
                <img
                  src={get(languageCollection, 'promo_section_image', '')}
                  alt="Shop"
                />
              </Col>
            </Row>
          </section>

          <section id="inquiry" className="pd-home-inquiry">
            <Row gutter={64}>
              <Col xs={24}>
                <div className="heading" style={{ fontWeight: 'normal' }}>
                  {get(languageCollection, 'contact_section_title', '')}
                </div>
              </Col>

              <Col xs={24}>
                <PdForm />
              </Col>
            </Row>
          </section>
        </div>
        <Map />
      </div>
    </>
  );
}

export default { Home };
