import { Suspense } from 'react';
import { useTranslation } from 'react-i18next'
import { Test2 } from './Test-2';
import { fixedLanguage } from './fixedLanguage';

export function Test1() {
    const { t } = useTranslation('one', { lng: fixedLanguage });

    return <>
        <p>{t('one')}</p>

        <Suspense fallback={<p>2 is loading...</p>}>
            <Test2 />
        </Suspense>
    </>
}