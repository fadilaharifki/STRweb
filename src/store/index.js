import React from 'react';
import { LanguageStoreProvider, LanguageStore } from 'store/language';

/**
 * Wrapper function for all Provider
 * @param {*} props
 */
function StoreProvider(props) {
  return (
    <LanguageStoreProvider defaultLanguage="en">
      {props.children}
    </LanguageStoreProvider>
  );
}

export { StoreProvider, LanguageStoreProvider, LanguageStore };
