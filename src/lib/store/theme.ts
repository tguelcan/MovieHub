import { browser } from '$app/env';
import { writable } from 'svelte/store';

let defaultTheme, initialValue;

if (browser) {
	defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
if (browser) {
	initialValue = window.localStorage.getItem('theme')
		? window.localStorage.getItem('theme')
		: defaultTheme;
}

export const theme = writable<string>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});

export { theme as default };
