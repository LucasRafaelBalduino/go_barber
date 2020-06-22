import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage, useToast } from '../../hooks/Toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotate(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotate(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotate(0deg)' },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
