import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import BrowseView from './components/BrowseView';
import StudyMode from './components/study/StudyMode';
import ViewSwitch from './components/ViewSwitch';
import { phrasalVerbs } from './data/phrasalVerbs';
import { useFavorites } from './hooks/useFavorites';
import { sortByTitle } from './utils/letters';
import './App.css';

// Alphabetical order keeps the letter index in sync with what the list shows.
const sortedVerbs = sortByTitle(phrasalVerbs);

function App() {
  const [view, setView] = useState('browse');
  const { favoriteIds, toggleFavorite } = useFavorites();

  const changeView = (nextView) => {
    setView(nextView);
    window.scrollTo(0, 0);
  };

  return (
    <main className='App'>
      <ViewSwitch view={view} onChange={changeView} />
      {/* Browse stays mounted (just hidden) so the search state survives. */}
      <div hidden={view !== 'browse'}>
        <BrowseView
          verbs={sortedVerbs}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      </div>
      {view === 'study' && (
        <StudyMode verbs={sortedVerbs} favoriteIds={favoriteIds} />
      )}
      <Analytics />
    </main>
  );
}

export default App;
