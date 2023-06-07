import { FC, useState } from 'react'
import Button from './components/Button';
import Card from './components/Card';

interface CardData {
  id: number;
  imageUrl: string;
  likeCount: number;
}

const App: FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: 1,
      imageUrl: 'https://fastly.picsum.photos/id/851/640/360.jpg?hmac=CHZ2-lEbkJos5utwxqnowlCD_eQtYa7FC-Cr1XPppIU',
      likeCount: 0,
    },
    {
      id: 2,
      imageUrl: 'https://fastly.picsum.photos/id/402/640/360.jpg?hmac=jhCnsDgDOdK3AH3mA__klQ-C8b_hy9xsRR9mSWCP0uM',
      likeCount: 0,
    },
    {
      id: 3,
      imageUrl: 'https://fastly.picsum.photos/id/492/640/360.jpg?hmac=DKEUXgT309yZNiH-Z99mODFOlGrZUjf-NPPfyLCVTBo',
      likeCount: 0,
    },
    {
      id: 4,
      imageUrl: 'https://fastly.picsum.photos/id/521/640/360.jpg?hmac=uouVNZ0dED7D9NjYaRU5y70FxNk03wjCoAgT1_T9jWY',
      likeCount: 0,
    },
  ]);

  const onLikeAll = () => {
    setCards(state => state.map(card => ({
      ...card,
      likeCount: card.likeCount + 1,
    })));
  };

  const onResetAll = ()  => {
    setCards(state => state.map(card => ({
      ...card,
      likeCount: 0,
    })))
  };

  const onDislikeAll = () => {
    setCards(state => state.map(card => ({
      ...card,
      likeCount: card.likeCount - 1,
    })));
  };

  const onClick = (id: number) => (type: 'like' | 'dislike') => {
    const newCards = [...cards];
    const index = newCards.findIndex(card => card.id === id);
    if (type === 'like') {
      newCards[index].likeCount += 1;
    } else {
      newCards[index].likeCount -= 1;
    }
    setCards(newCards);
  };

  return (
    <div className="max-w-md mx-auto">
      <nav className="bg-white border-gray-200 shadow-md sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center p-4">
          <div className="flex items-center">
            <img src="/react.svg" className="h-8 mr-3" alt="React Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">eDOT Front End Test</span>
          </div>
        </div>
      </nav>
      <div className="p-4 flex flex-col gap-4 bg-gray-100">
        <div>
          <div className="flex gap-4">
            <Button className="flex-1" onClick={onLikeAll}>Like All</Button>
            <Button className="flex-1" variant="outline" onClick={onResetAll}>Reset All</Button>
            <Button className="flex-1" variant="danger" onClick={onDislikeAll}>Dislike All</Button>
          </div>
        </div>
        {cards.map(card => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            likeCount={card.likeCount}
            onClick={onClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App
