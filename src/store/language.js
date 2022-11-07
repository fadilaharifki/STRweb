import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { notification } from 'antd';

// import LanguageService from 'services/LanguageService';

import { dataDummy } from './json';
export const LanguageStore = createContext();

export function LanguageStoreProvider(props) {
  const [languageSelected, setLanguageSelected] = useState(
    get(props, 'defaultLanguage', 'en')
  );
  const [languageCollection, setLanguageCollection] = useState({});
  const [categoryLinkCollection, setCategoryLinkCollection] = useState('');
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getLanguageFromAPI(languageSelected = '') {
    try {
      setLoading(true);
      // const { data } = await LanguageService.getLanguage(languageSelected);
      // setLanguageCollection(data);
      // setProductCategory(data.categories);
      // setCategoryLinkCollection([
      //   {
      //     title: 'all',
      //     category_link: data.product_category_link,
      //   },
      //   ...data.categories,
      // ]);
      setLanguageCollection(dataDummy);
      setProductCategory(dataDummy.categories);
      setCategoryLinkCollection([
        {
          title: 'all',
          category_link: dataDummy.product_category_link,
        },
        ...dataDummy.categories,
      ]);
    } catch (error) {
      notification.open({
        message: 'Error Occured',
        description: 'Failed to fetch the language to the system',
      });
    } finally {
      setLoading(false);
    }
  }

  function changeLanguage(lang) {
    setLanguageSelected(lang);
    getLanguageFromAPI(lang);
  }

  useEffect(() => {
    getLanguageFromAPI();
  }, []);

  return (
    <LanguageStore.Provider
      value={{
        categoryLinkCollection,
        changeLanguage,
        languageSelected,
        languageCollection,
        loading,
        productCategory,
      }}>
      {props.children}
    </LanguageStore.Provider>
  );
}

LanguageStoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
