import React from 'react';
import {useDroppable} from '@dnd-kit/core';

interface TaxDroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable(props: TaxDroppableProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
  