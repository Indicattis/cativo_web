import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import RelativeTime from "@/functions/date/RelativeDatetime";
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

interface AssessmentRatingProps {
  rating: number;
  created_at?: Date | string; // Aceita tanto Date quanto string
}

const AssessmentRating: React.FC<AssessmentRatingProps> = ({ rating, created_at }) => {
  console.log('created_at recebido:', created_at);

  let dateObject: Date;

  if (typeof created_at === 'string') {
    dateObject = new Date(created_at);
  } else if (created_at instanceof Date) {
    dateObject = created_at;
  } else {
    console.error('created_at não é uma data válida:', created_at);
    return <p>Data inválida</p>;
  }

  if (isNaN(dateObject.getTime())) {
    console.error('created_at não é uma data válida:', dateObject);
    return <p>Data inválida</p>;
  }

  const createdAtISO = dateObject.toISOString();

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IconStarFilled key={i} className="text-white" />);
      } else if (i - rating < 1) {
        stars.push(<IconStarHalfFilled key={i} className="text-white" />);
      } else {
        stars.push(<IconStar key={i} className="text-purple" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex py-3 w-full justify-between items-center">
      <div className="flex gap-1">
        {renderStars(rating)}
      </div>
      <RelativeTime date={createdAtISO} />
    </div>
  );
};

export default AssessmentRating;
