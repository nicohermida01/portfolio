const dictionaries = {
	en: () => import('i18n/en.json').then(module => module.default),
	es: () => import('i18n/es.json').then(module => module.default),
}

const getDictionary = async locale => dictionaries[locale]()

export const translator = (key, locale = 'en') => {
	return getDictionary(locale).then(dict => dict[key])
}
