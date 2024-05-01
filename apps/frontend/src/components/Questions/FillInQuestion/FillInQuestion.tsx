import { useState } from 'react';
import Draggable  from '../Draggable';
import  Droppable  from '../Droppable';
import {DndContext} from '@dnd-kit/core';
import { Over } from '@dnd-kit/core';

const FillInQuestion = () => {
    const [parents, setParents] = useState<{ [key: string]: string | null }>({
        droppable1: null,
        droppable2: null,
        droppable3: null,
      });
    
      const [dragged, setDragged]=useState<{ [key: string]: string | null }>({
        draggable1: null,
        draggable2: null,
        draggable3: null,
      })
    
      const draggable = (id: string) => (
        <Draggable id={id}>
          {id}
        </Draggable>
      );
    
      const [drag, setDrag] = useState<String|null>(null);
    
      const getParentContent = (idDrop: string) => {
        const id = parents[idDrop];
        return id !== null ? draggable(id) : 'Drop here';
      };
    
      const droppable = (idDrop: string) => (
        <Droppable id={idDrop}>
          {getParentContent(idDrop)}
        </Droppable>
      );

      function handleDragStart(event: any) {
        // Postavljanje drag elementa na ID povučenog elementa
        setDrag(event.active.id);
      }
    
      function handleDragEnd({ over }: { over: Over | null }) {
        if (over) {
          const droppableId: string = String(over.id);
          const d = dragged[String(drag)]
          if(parents[droppableId]===null){
            setDragged((prev)=>{
              return {
                ...prev,
                [String(drag)]: droppableId,
              }
            })
            setParents((prevParents) => {
              return {
                ...prevParents,
                [droppableId]: String(drag),
                [String(d)]:null,
              };
            });
          }
          else{
            setDragged((prev)=>{
              return {
                ...prev,
                [String(parents[droppableId])]: null,
                [String(drag)]: droppableId,
              }
            })
            setParents((prevParents) => {
              return {
                ...prevParents,
                [droppableId]: String(drag),
              };
            });
          }
        } else {
          const d = dragged[String(drag)]
          setDragged((prev)=>{
            return {
              ...prev,
              [String(drag)]: null,
            }
          })
          setParents((prevParents) => ({
            ...prevParents,
            [String(d)]: null,
          }));
        }
        setDrag(null); 
    }

    return (<>
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {dragged.draggable1===null? draggable('draggable1') : null}
      {dragged.draggable2 ===null? draggable('draggable2') : null}
      {dragged.draggable3 ===null? draggable('draggable3') : null}
      {droppable('droppable1')}
      {droppable('droppable2')}
      {droppable('droppable3')}
    </DndContext>
    </>)
}

export default FillInQuestion;