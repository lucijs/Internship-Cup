import React, { useState } from 'react';
import Draggable from '../Draggable';
import { DndContext, useDroppable } from '@dnd-kit/core';
import classes from './index.module.css';

const MatchingQuestion = () => {
  const text1 = "Prvi dio teksta";
  const text2 = "Drugi dio teksta";

  // Objekt koji sadrži informacije o tome koje su stavke povučene i gdje su ispuštene
  const [items, setItems] = useState<{ [key: string]: string | null }>({
    draggable1: null,
    draggable2: null,
    draggable3: null,
    draggable4: null,
  });

  // Draggable items
  const draggable = (id: string) => (
    <Draggable id={id}>
      {id}
    </Draggable>
  );

  const DroppableArea = ({ id }: { id: string }) => {
    const { isOver, setNodeRef } = useDroppable({
      id,
      data: id,
    });

    return (
      <div
        ref={setNodeRef}
        className={`${classes.droppable} ${isOver ? classes.over : ''}`}
      >
        {items[id] ? draggable(items[id]!) : 'Drop here'}
      </div>
    );
  };

  // Handle drop event
  const handleDrop = (idDrop: string, droppedItem: string) => {
    setItems(prevItems => ({
      ...prevItems,
      [idDrop]: droppedItem,
    }));
  };

  return (
    <>
      <DndContext>
        <div className={classes.container}>
          <div className={classes.dragHere}>
            {text1}
            <DroppableArea id="droppable1" />
            <DroppableArea id="droppable3" />
          </div>
          <div className={classes.dragHere}>
            {text2}
            <DroppableArea id="droppable2" />
            <DroppableArea id="droppable4" />
          </div>
        </div>
        <div className={classes.answers}>
          {draggable('draggable1')}
          {draggable('draggable2')}
          {draggable('draggable3')}
          {draggable('draggable4')}
        </div>
      </DndContext>
    </>
  );
};

export default MatchingQuestion;
