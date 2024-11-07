import i18next from 'i18next';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Test1 } from './Test-1';

import './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback={<p>1 is loading...</p>}>
        <Test1 />
      </Suspense>
    </I18nextProvider>
  )
}

export default App
