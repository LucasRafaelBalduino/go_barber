import React from 'react';

import { Container } from './srtyles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tolltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tolltip;
