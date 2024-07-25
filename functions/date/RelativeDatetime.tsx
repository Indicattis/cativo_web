import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RelativeTimeProps {
  date: string;
}

const RelativeTime: React.FC<RelativeTimeProps> = ({ date }) => {
  const dateObject = parseISO(date); // Converte a string ISO para um objeto Date
  const formattedDate = formatDistanceToNow(dateObject, { addSuffix: true, locale: ptBR });

  return <span className='_text _small text-palette_gray'>{formattedDate}</span>;
};

export default RelativeTime;
