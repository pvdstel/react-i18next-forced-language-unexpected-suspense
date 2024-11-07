import { useTranslation } from 'react-i18next'
import { fixedLanguage } from './fixedLanguage';

export function Test3() {
    const { t } = useTranslation('three', { lng: fixedLanguage });

    return <>
        <p>{t('three')}</p>
    </>
}