import { FC } from 'react';
import Button from './Button';

interface CardProps {
  imageUrl: string;
  likeCount: number;
  onClick(type: 'like' | 'dislike'): void;
}

const Card: FC<CardProps> = ({ imageUrl, likeCount, onClick }) => (
  <div className="rounded-lg overflow-hidden bg-white border border-gray-200 shadow">
    <img src={imageUrl} className="aspect-video" />
    <div className="flex gap-4 p-4">
      <span
        className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow"
      >
        {`${likeCount} Like`}
      </span>
      <Button className="ml-auto" onClick={() => onClick('like')}>Like</Button>
      <Button variant="danger" onClick={() => onClick('dislike')}>Dislike</Button>
    </div>
  </div>
);

export default Card;