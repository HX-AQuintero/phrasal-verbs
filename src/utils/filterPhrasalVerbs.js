const normalize = (text) => text.toLowerCase().trim();

/**
 * @typedef {Object} SearchOptions
 * @property {boolean} meaning Also search in the meaning.
 * @property {boolean} example Also search in the example sentence.
 */

/** @type {SearchOptions} */
export const DEFAULT_SEARCH_OPTIONS = { meaning: false, example: false };

/**
 * Returns the phrasal verbs that match the query. The title is always
 * searched; meaning and example are searched only when enabled in `options`.
 * Each result keeps its original position in `items` as `index`, so anything
 * derived from it (e.g. card color) stays stable while filtering.
 *
 * @param {import('../data/phrasalVerbs').PhrasalVerb[]} items
 * @param {string} query
 * @param {SearchOptions} [options]
 * @returns {Array<import('../data/phrasalVerbs').PhrasalVerb & { index: number }>}
 */
export const filterPhrasalVerbs = (
  items,
  query,
  options = DEFAULT_SEARCH_OPTIONS,
) => {
  const needle = normalize(query);

  const matches = (item) =>
    normalize(item.title).includes(needle) ||
    (options.meaning && normalize(item.meaning).includes(needle)) ||
    (options.example && normalize(item.example).includes(needle));

  return items
    .map((item, index) => ({ ...item, index }))
    .filter((item) => !needle || matches(item));
};
