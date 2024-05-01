import { useState } from 'react';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import { DndContext } from '@dnd-kit/core';
import { Over } from '@dnd-kit/core';
import classes from './index.module.css'

const FillInQuestion = () => {
  const text1 = "Prvi dio teksta";
  const text2 = "Prvi dio teksta";
  const text3 = "Prvi dio teksta";
  const text4 = "Prvi dio teksta";

  // Collects where each item has been dropped
  const [parents, setParents] = useState<{ [key: string]: string | null }>({
    droppable1: null,
    droppable2: null,
    droppable3: null,
  });

  // Collects items that have been dragged
  const [dragged, setDragged] = useState<{ [key: string]: string | null }>({
    draggable1: null,
    draggable2: null,
    draggable3: null,
  });

  // Draggable items
  const draggable = (id: string) => (
    <Draggable id={id}>
      {id}
    </Draggable>
  );

  // Represents the currently dragged item
  const [drag, setDrag] = useState<string | null>(null);

  const getParentContent = (idDrop: string) => {
    const id = parents[idDrop];
    return id !== null ? draggable(id) : 'Drop here';
  };

  // Droppable items
  const droppable = (idDrop: string) => (
    <Droppable id={idDrop}>
      {getParentContent(idDrop)}
    </Droppable>
  );

  function handleDragStart(event: any) {
    setDrag(event.active.id);
  }

  function handleDragEnd({ over }: { over: Over | null }) {
    const draggedId = dragged[String(drag)];
    if (over) {
      const droppableId: string = String(over.id);
      if (parents[droppableId] === null) {
        setDragged((prev) => ({
          ...prev,
          [String(drag)]: droppableId,
        }));
        setParents((prevParents) => ({
          ...prevParents,
          [droppableId]: String(drag),
          [String(draggedId)]: null,
        }));
      } else {
        setDragged((prev) => ({
          ...prev,
          [String(parents[droppableId])]: null,
          [String(drag)]: droppableId,
        }));
        setParents((prevParents) => ({
          ...prevParents,
          [droppableId]: String(drag),
        }));
      }
    } else {
      setDragged((prev) => ({
        ...prev,
        [String(drag)]: null,
      }));
      setParents((prevParents) => ({
        ...prevParents,
        [String(draggedId)]: null,
      }));
    }
    setDrag(null);
  }

  return (
    <>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={classes.question}>
            <div className={classes.text}>
                {text1}
                {droppable('droppable1')}
                {text2}
                {droppable('droppable2')}
                {text3}
                {droppable('droppable3')}
                {text4}
            </div>
            <div className={classes.answer}>
                {dragged.draggable1 === null ? draggable('draggable1') : null}
                {dragged.draggable2 === null ? draggable('draggable2') : null}
                {dragged.draggable3 === null ? draggable('draggable3') : null}
            </div>
        </div>
      </DndContext>
    </>
  );
};

export default FillInQuestion;
