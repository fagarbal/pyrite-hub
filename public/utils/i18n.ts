import i18next from 'i18next';
import * as en from '../locales/en.json';

const i18n = i18next.init({
	interpolation: {
		escapeValue: false,
	},
	lng: 'en',
	resources: {
		en: {
			translation: en,
		},
	},
});

export const translation = i18n.t.bind(i18n);
