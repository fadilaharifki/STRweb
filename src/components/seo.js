import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import { LanguageStore } from 'store/language';

function SEO({ lang, meta, titlePage }) {
  const { languageCollection } = useContext(LanguageStore);
  const title = get(languageCollection, 'header', 'STR');
  const metaDescription = get(
    languageCollection,
    'meta_description',
    'Description'
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${titlePage}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  metaDescription: ``,
};

SEO.propTypes = {
  metaDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  titlePage: PropTypes.string.isRequired,
};

export default SEO;
