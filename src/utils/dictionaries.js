import 'server-only'

const dictionaries = {
	en: () => import('i18n/en.json').then(module => module.default),
	es: () => import('i18n/es.json').then(module => module.default),
}

export const getDictionary = async (locale = 'en') => dictionaries[locale]()
