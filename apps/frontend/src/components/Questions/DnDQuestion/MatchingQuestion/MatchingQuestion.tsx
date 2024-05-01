import { useState } from 'react';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import { DndContext } from '@dnd-kit/core';
import { Over } from '@dnd-kit/core';
import classes from './index.module.css';

const MatchingQuestion = () => {
  const text1 = "Prvi dio teksta";
  const text2 = "Drugi dio teksta";

  // Collects where each item has been dropped
  const [parents, setParents] = useState<{ [key: string]: string[] | null }>({
    droppable1: null,
    droppable2: null,
  });

  // Collects items that have been dragged
  const [dragged, setDragged] = useState<{ [key: string]: string | null }>({
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

  // Represents the currently dragged item
  const [drag, setDrag] = useState<string | null>(null);

  const getParentContent = (idDrop: string) => {
    const id = parents[idDrop];
    return id !== null ? id.map((idDrag, index) => (
      <div key={`${idDrop}-${index}`}>
        {draggable(idDrag.toString())}
      </div>
    )) : 'Drop here';
  };

  // Droppable items
  const droppable = (idDrop: string) => (
    <Droppable id={idDrop}>
      <div style={{ width: '150px', height:'100px'}}>
        {getParentContent(idDrop)}
      </div>
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
        const update = parents[String(draggedId)]?.filter((item) => item !== String(drag)) ?? null;

        setDragged((prev) => ({
          ...prev,
          [String(drag)]: droppableId,
        }));
        
        setParents((prevParents) => ({
          ...prevParents,
          [droppableId]: [String(drag)],
          [String(draggedId)]: update,
        }));

      } else {
        const updatedParents = Object.fromEntries(
          Object.entries(parents).map(([key, value]) => [
            key,
            Array.isArray(value) && key === droppableId
              ? [...value, String(drag)]
              : value?.filter((item) => item !== String(drag)) || null, // Ensure value is always string[] or null
          ])
        );
        setDragged((prev) => ({
          ...prev,
          [String(drag)]: droppableId,
        }));
        
        setParents(updatedParents);
      }
    } else {
        setDragged((prev) => ({
          ...prev,
          [String(drag)]: null,
        }));
        const updatedParents = Object.fromEntries(
          Object.entries(parents).map(([key, value]) => [
            key,
            Array.isArray(value) && key === draggedId ? value.filter((item) => item !== String(drag)) : value,
          ])
        );
        setParents(updatedParents); 
    }
    setDrag(null);
  }

  //za bodove samo triba provjeravat iz baze s parents jel dobro i za jedno 
  //logika je skroz ista

  //za prikaz kad se spaja triba vidit kako napravit da se ne miće ovoliko
  //kad draggas, ne znan jel nan okej ovako, al mislin da može bit bolje

  return (
    <>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className={classes.container}>
            <div className={classes.dragHere}>
                {text1}
                {droppable('droppable1')}
            </div>
            <div className={classes.dragHere}>
                {text2}
                {droppable('droppable2')}
            </div>
            </div>
            <div className={classes.answers}>
              {dragged.draggable1 === null ? draggable('draggable1') : null}
              {dragged.draggable2 === null ? draggable('draggable2') : null}
              {dragged.draggable3 === null ? draggable('draggable3') : null}
              {dragged.draggable4 === null ? draggable('draggable4') : null}
            </div>
        </DndContext>
    </>
  );
};

export default MatchingQuestion;
