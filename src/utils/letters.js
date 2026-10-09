/** First letter of a phrasal verb title, uppercased. */
export const getInitial = (title) => title.charAt(0).toUpperCase();

/**
 * Maps each initial to the id of the first item that starts with it.
 *
 * @param {Array<{ id: string, title: string }>} items
 * @returns {Map<string, string>}
 */
export const getFirstIdByInitial = (items) => {
  const firstIds = new Map();

  items.forEach(({ id, title }) => {
    const initial = getInitial(title);
    if (!firstIds.has(initial)) firstIds.set(initial, id);
  });

  return firstIds;
};

/**
 * Returns a copy sorted alphabetically by title. The sort is stable, so
 * entries sharing a title keep their original relative order.
 *
 * @template {{ title: string }} T
 * @param {T[]} items
 * @returns {T[]}
 */
export const sortByTitle = (items) =>
  [...items].sort((a, b) => a.title.localeCompare(b.title, 'en'));
