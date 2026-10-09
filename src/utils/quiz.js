import { shuffle } from './shuffle';

const OPTIONS_PER_QUESTION = 4;

/**
 * @typedef {Object} QuizQuestion
 * @property {string} id Id of the phrasal verb being asked.
 * @property {string} title
 * @property {string} example Shown as context, since a verb can have several meanings.
 * @property {string} answer The correct meaning.
 * @property {string[]} options Meanings in display order, including the answer.
 */

/**
 * Picks wrong meanings from the whole catalog. Entries with the same title
 * are skipped because they could be a valid answer for the same verb.
 */
const pickDistractors = (verb, catalog, count) => {
  const seen = new Set([verb.meaning]);
  const distractors = [];

  for (const candidate of shuffle(catalog)) {
    if (distractors.length === count) break;
    if (candidate.title === verb.title || seen.has(candidate.meaning)) continue;
    seen.add(candidate.meaning);
    distractors.push(candidate.meaning);
  }

  return distractors;
};

/**
 * Builds a multiple-choice quiz with one question per verb in the deck.
 *
 * @param {import('../data/phrasalVerbs').PhrasalVerb[]} deck Verbs to ask about.
 * @param {import('../data/phrasalVerbs').PhrasalVerb[]} catalog Full list, used for wrong options.
 * @returns {QuizQuestion[]}
 */
export const buildQuiz = (deck, catalog) =>
  shuffle(deck).map((verb) => ({
    id: verb.id,
    title: verb.title,
    example: verb.example,
    answer: verb.meaning,
    options: shuffle([
      verb.meaning,
      ...pickDistractors(verb, catalog, OPTIONS_PER_QUESTION - 1),
    ]),
  }));
