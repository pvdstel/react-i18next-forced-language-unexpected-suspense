import i18next, { ReadCallback, InitOptions } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const localeResourceMap: Record<string, Record<string, () => Promise<any>>> = {
    'en': {
        one: () => import('./locales/1.json'),
        two: () => import('./locales/2.json'),
        three: () => import('./locales/3.json'),
    },
};

const dynamicBackend = resourcesToBackend((locale: string, namespace: string, callback: ReadCallback) => {
    const resourcesPromise = localeResourceMap[locale]?.[namespace];
    console.log('Loading namespace', namespace, 'for locale', locale);
    if (resourcesPromise) {
        resourcesPromise()
            .then(resources => {
                callback(undefined, resources.default);
            })
            .catch(() => {
                callback(new Error(`Error while loading ${locale}/${namespace}.`), undefined);
            });
    } else {
        callback(new Error(`${locale}/${namespace} not found.`), undefined);
    }
});

const options: InitOptions = {
    ns: ['one'],
    defaultNS: 'one',
    lng: 'en',
    debug: true,
    fallbackLng: false,
};

void i18next
    .use(dynamicBackend)
    .init(options)
