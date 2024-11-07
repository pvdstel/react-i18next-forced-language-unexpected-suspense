import { Suspense } from 'react';
import { useTranslation } from 'react-i18next'
import { Test3 } from './Test-3';
import { fixedLanguage } from './fixedLanguage';

export function Test2() {
    const { t } = useTranslation('two', { lng: fixedLanguage });

    return <>
        <p>{t('two')}</p>

        <Suspense fallback={<p>3 is loading...</p>}>
            <Test3 />
        </Suspense>
    </>
}