import { fetchJoke } from './index.js';
import { jokeButton, jokeHolder } from './elements.js';
import { randomItemArray } from './utils.js';
import buttonText from '../data/buttonText.js';
export async function handleClick() {
	const {joke} = await fetchJoke();
	console.log(joke);
	jokeHolder.textContent = joke;

	jokeButton.textContent = randomItemArray(buttonText,
		jokeButton.textContent);
}
