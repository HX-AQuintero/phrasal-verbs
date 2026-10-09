import { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import LetterNav from './LetterNav';
import SearchBar from './SearchBar';
import { verbShape } from './study/verbShape';
import {
  DEFAULT_SEARCH_OPTIONS,
  filterPhrasalVerbs,
} from '../utils/filterPhrasalVerbs';
import { getFirstIdByInitial } from '../utils/letters';

const BrowseView = ({ verbs, favoriteIds, onToggleFavorite }) => {
  const [query, setQuery] = useState('');
  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const toolbarRef = useRef(null);

  const allLetters = useMemo(() => [...getFirstIdByInitial(verbs).keys()], [verbs]);

  const results = useMemo(() => {
    const matches = filterPhrasalVerbs(verbs, query, searchOptions);
    return showOnlyFavorites
      ? matches.filter(({ id }) => favoriteIds.has(id))
      : matches;
  }, [verbs, query, searchOptions, showOnlyFavorites, favoriteIds]);

  const firstIdByInitial = useMemo(
    () => getFirstIdByInitial(results),
    [results],
  );
  const availableLetters = useMemo(
    () => new Set(firstIdByInitial.keys()),
    [firstIdByInitial],
  );

  const scrollToLetter = (letter) => {
    const target = document.getElementById(
      `verb-${firstIdByInitial.get(letter)}`,
    );
    if (!target) return;

    // The toolbar is sticky, so leave room for it above the target card.
    const offset = toolbarRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <div className='toolbar' ref={toolbarRef}>
        <SearchBar
          value={query}
          onChange={setQuery}
          options={searchOptions}
          onOptionsChange={setSearchOptions}
          resultCount={results.length}
          showOnlyFavorites={showOnlyFavorites}
          onToggleFavorites={() => setShowOnlyFavorites((on) => !on)}
          favoritesCount={favoriteIds.size}
        />
        <LetterNav
          letters={allLetters}
          availableLetters={availableLetters}
          onSelect={scrollToLetter}
        />
      </div>
      {results.length > 0 ? (
        <ul className='card-list'>
          {results.map(({ id, title, meaning, example, index }) => (
            <li key={id} id={`verb-${id}`}>
              <Card
                title={title}
                meaning={meaning}
                example={example}
                colorIndex={index}
                isFavorite={favoriteIds.has(id)}
                onToggleFavorite={() => onToggleFavorite(id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className='empty-state'>
          {showOnlyFavorites && !query
            ? 'No favorites yet. Tap the ☆ on a card to save it.'
            : `No ${showOnlyFavorites ? 'favorites' : 'phrasal verbs'} match “${query}”.`}
        </p>
      )}
    </>
  );
};

BrowseView.propTypes = {
  verbs: PropTypes.arrayOf(verbShape).isRequired,
  favoriteIds: PropTypes.instanceOf(Set).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default BrowseView;
