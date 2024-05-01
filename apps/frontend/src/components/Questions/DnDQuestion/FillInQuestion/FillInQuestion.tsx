import { useState } from 'react';
import Draggable from '../../Draggable';
import Droppable from '../../Droppable';
import { DndContext } from '@dnd-kit/core';
import { Over } from '@dnd-kit/core';
import classes from './index.module.css';

const FillInQuestion = () => {
  const text1 = "Prvi dio teksta";
  const text2 = "Drugi dio teksta";

  // Collects where each item has been dropped
  const [parents, setParents] = useState<{ [key: string]: string | null }>({
    droppable1: null,
    droppable2: null,
  });

  // Collects items that have been dragged
  const [dragged, setDragged] = useState<{ [key: string]: string | null }>({
    draggable1: null,
    draggable2: null,
    draggable3: null,
    draggable4: null,
    draggable5: null,
    draggable6: null,
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
      <div style={{ width: '150px' }}>
        {getParentContent(idDrop)}
      </div>
    </Droppable>
  );

  function handleDragStart(event: any) {
    setDrag(event.active.id);
  }

  function handleDragEnd({ over }: { over: Over | null }) {
    const draggedId = dragged[String(drag)];
    console.log("draggedid:",draggedId)
    if (over) {
      const droppableId: string = String(over.id);
      console.log("droppableId:",droppableId);
      if (parents[droppableId] === null) {
        console.log("usa u orvi if")
        setDragged((prev) => ({
          ...prev,
          [String(drag)]: droppableId,
        }));
        console.log("dragged: ",dragged)
        setParents((prevParents) => ({
          ...prevParents,
          [droppableId]: String(drag),
          [String(draggedId)]: null,
        }));
        console.log("parents: ",parents)
      } else {
        console.log("usa u prvi else");
        console.log("drag:", drag);
        if(parents['droppable1']!==null && parents['droppable2']!==null){
          setDragged((prev) => ({
            ...prev,
            [String(parents[droppableId])]: draggedId,
            [String(drag)]: droppableId,
          }));
          setParents((prevParents) => ({
            ...prevParents,
            [droppableId]: String(drag),
            [String(draggedId)]: String(parents[droppableId]),
          }));
          console.log("dragged: ",dragged)
          console.log("parents: ",parents)
        }else{
          setDragged((prev) => ({
            ...prev,
            [String(parents[droppableId])]: null,
            [String(drag)]: droppableId,
          }));
          setParents((prevParents) => ({
            ...prevParents,
            [droppableId]: String(drag),
          }));
          console.log("dragged: ",dragged)
          console.log("parents: ",parents)
        }
      }
    } else {
        console.log("usa u drugi else")
        console.log(parents['droppable1'])
      setDragged((prev) => ({
        ...prev,
        [String(drag)]: null,
      }));
      setParents((prevParents) => ({
        ...prevParents,
        [String(draggedId)]: null,
      }));
    setDrag(null);
    console.log("dragged: ",dragged)
        console.log("parents: ",parents)
      }
  }

  //za bodove samo triba provjeravat iz baze s parents jel dobro i za jedno 
  //logika je skroz ista

  //za prikaz kad se spaja triba vidit kako napravit da se ne miće ovoliko
  //kad draggas, ne znan jel nan okej ovako, al mislin da može bit bolje

  return (
    <>
        drag: {drag}
        <br></br>
        parents na prvom: {parents['droppable1']}
        <br></br>
        parents na drugom: {parents['droppable2']}
        <br></br>
        dragged 1:  {dragged['draggable1']}
        <br></br>
        dragged 2:  {dragged['draggable2']}
        <br></br>
        dragged 3:  {dragged['draggable3']}
        <br></br>
        dragged 4:  {dragged['draggable4']}
        <br></br>
        dragged 5:  {dragged['draggable5']}
        <br></br>
        dragged 6:  {dragged['draggable6']}
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className={classes.questionFillIn}>
            <div className={classes.text}>
              {text1}
              {droppable('droppable1')}
              {text2}1
              {droppable('droppable2')}
            </div>
            <div className={classes.answerFillIn}>
              {dragged.draggable1 === null ? draggable('draggable1') : null}
              {dragged.draggable2 === null ? draggable('draggable2') : null}
              {dragged.draggable3 === null ? draggable('draggable3') : null}
              {dragged.draggable4 === null ? draggable('draggable4') : null}
              {dragged.draggable5 === null ? draggable('draggable5') : null}
              {dragged.draggable6 === null ? draggable('draggable6') : null}
            </div>
          </div>
        </DndContext>
      </>
  );
};

export default FillInQuestion;
