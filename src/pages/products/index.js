import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row, Select, notification } from 'antd';

import ModalMobile from 'components/modal-mobile';
import { PageSpinner } from 'components/page-spinner';
import { Section } from 'components/section';
import SEO from 'components/seo';

import { get } from 'lodash';

// import ProductService from 'services/ProductService';

import { LanguageStore } from 'store/language';

import './style.scss';
import { dummyProduct } from 'store/json';

export function Products(props) {
  const {
    categoryLinkCollection,
    languageCollection,
    productCategory,
    loading,
  } = useContext(LanguageStore);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [productCategoryLink, setProductCategoryLink] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [productInModal, setproductInModal] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState('all');
  const [activeHoverIndex, setActiveHoverIndex] = useState();
  const { Option } = Select;

  const { history, location } = props;

  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    const categoryQueryParameter = parsed.filter;

    async function fetchProducts() {
      try {
        setLoadingProducts(true);
        // const { data } = await ProductService.getProducts();
        setProducts(dummyProduct);
        setFilteredProducts(dummyProduct);
        changeProductCategoryLink(parsed.filter);
        if (categoryQueryParameter !== 'all') {
          setFilteredProducts((prevState) =>
            prevState.filter(
              (filteredProduct) =>
                filteredProduct.category.title === categoryQueryParameter
            )
          );
          setCategorySelected(categoryQueryParameter);
        }
      } catch {
        notification.open({
          message: 'Error Occured',
          description: 'Please check your internet connection',
        });
      } finally {
        setLoadingProducts(false);
      }
    }

    function changeProductCategoryLink(categoryParam) {
      if (categoryLinkCollection.length > 0) {
        const categoryFind = categoryLinkCollection.find(
          (category) => category.title === categoryParam
        );

        setProductCategoryLink(categoryFind.category_link);
      }
    }

    fetchProducts();
  }, [parsed.filter, categoryLinkCollection]);

  function filterProducts(value = 'all') {
    setCategorySelected(value);
    setFilteredProducts(products);

    if (value) {
      history.push({
        pathname: '/products',
        search: `filter=${value}`,
      });
    }

    if (value !== 'all') {
      setFilteredProducts((prevState) =>
        prevState.filter(
          (filteredProduct) => filteredProduct.category.title === value
        )
      );
    }
  }

  function handleOnMouseOver(index) {
    setActiveHoverIndex(index);
  }

  function showModal(product) {
    console.log(product, 'product');
    setModalVisibility(true);
    setproductInModal(product);
  }

  function hideModal() {
    setModalVisibility(false);
    setproductInModal({});
  }

  if (loadingProducts || loading) {
    return <PageSpinner />;
  }

  return (
    <div>
      <SEO titlePage="Products" />

      {modalVisibility && (
        <ModalMobile data={productInModal} handleCloseModal={hideModal} />
      )}

      <Row>
        <Col xs={24} style={{ padding: 0 }}>
          <div className="pd-products-cover">
            <div className="content">
              <div className="heading">
                {get(languageCollection, 'product_header_title', '')}
              </div>
            </div>
            <div className="img-container">
              <img
                src={get(languageCollection, 'product_banner_image', '')}
                alt="Banner"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Col>
      </Row>

      <Section className={'pd-products'}>
        <Row gutter={32}>
          <Col xs={24} md={5}>
            <h1 className="font-ropasans">Kategori</h1>
            <ul className="pd-products-menu font-ropasans">
              <li
                className={categorySelected === 'all' ? 'active' : ''}
                onClick={() => filterProducts('all')}>
                Semua
              </li>
              {productCategory &&
                productCategory.map((category, index) => (
                  <li
                    key={index}
                    className={
                      categorySelected === category.title ? 'active' : ''
                    }
                    onClick={() => filterProducts(category.title)}>
                    {category.title}
                  </li>
                ))}
            </ul>
          </Col>
          <Col xs={24} md={19}>
            <Col xs={24} md={0} style={{ padding: 0, zIndex: 1 }}>
              <Select
                defaultValue={categorySelected}
                className="select-box"
                style={{ marginBottom: 10 }}
                onChange={filterProducts}>
                <Option value="all">Semua</Option>
                {productCategory &&
                  productCategory.map((category, index) => (
                    <Option key={index} value={category.title}>
                      {category.title}
                    </Option>
                  ))}
              </Select>
            </Col>
            <Row gutter={20}>
              {filteredProducts &&
                filteredProducts.map((product, index) => (
                  <Col xs={12} lg={8} key={index}>
                    <div
                      className="pd-products-card"
                      onMouseEnter={() => handleOnMouseOver(index)}
                      onMouseLeave={() => handleOnMouseOver('')}
                      onClick={() => showModal(product)}>
                      <div className="img-container">
                        <img
                          src={product.product_image}
                          alt={product.category.title}
                        />
                      </div>
                      <div className="text">
                        <div className="title" style={{ textAlign: 'center' }}>
                          {product.title}
                        </div>
                      </div>
                      {activeHoverIndex === index && (
                        <div className="on-hover">
                          <div className="title">{product.title}</div>
                          <div className="description">
                            {product.product_description}
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={24} md={{ offset: 5, span: 19 }} className="pd-align-center">
            <a href={productCategoryLink || ''} rel="noopener noreferrer">
              <Button className="pd-products-btn">
                {get(languageCollection, 'product_category_action', '')}
              </Button>
            </a>
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default { Products };
