import { useEffect, useState } from "react";
import Draggable from "../Draggable";
import Droppable from "../Droppable";
import { DndContext } from "@dnd-kit/core";
import { Over } from "@dnd-kit/core";
import classes from "./index.module.css";

const FillInQuestion = ({
  question,
  possibleAnswers,
  correctAnswer1,
  correctAnswer2,
  toggleMode,
}: {
  question: string;
  possibleAnswers: string[];
  correctAnswer1: string[];
  correctAnswer2: string[];
  toggleMode: (value: boolean) => void;
}) => {
  const text1 = possibleAnswers[0];
  const text2 = possibleAnswers[1];

  // Collects where each item has been dropped
  const [parents, setParents] = useState<{ [key: string]: string | null }>({
    droppable1: null,
    droppable2: null,
  });

  const firstAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer1[0]) - 1);
  const secondAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer2[0]) - 1);

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
      <div className={classes.draggable}>{possibleAnswers[+id[9] + 1]}</div>
    </Draggable>
  );

  // Represents the currently dragged item
  const [drag, setDrag] = useState<string | null>(null);

  const getParentContent = (idDrop: string) => {
    const id = parents[idDrop];
    return id !== null ? draggable(id) : <div> </div>;
  };

  // Droppable items
  const droppable = (idDrop: string) => (
    <Droppable id={idDrop}>
      <div className={classes.droppable}>{getParentContent(idDrop)}</div>
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
        if (parents["droppable1"] !== null && parents["droppable2"] !== null) {
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
        }
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
      setDrag(null);
    }
  }

  useEffect(() => {
    if (
      firstAnswer === parents["droppable1"] &&
      secondAnswer === parents["droppable2"]
    ) {
      toggleMode(true);
    }
  }, [parents]);

  return (
    <div className={classes.body}>
      <div className={classes.question}>{question}</div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={classes.questionFillIn}>
          <div className={classes.text}>
            <div className={classes.textField}>{text1}</div>
            {droppable("droppable1")}
            <div className={classes.textField}>{text2}</div>
            {droppable("droppable2")}
          </div>
          <div className={classes.answerFillIn}>
            {dragged.draggable1 === null ? draggable("draggable1") : null}
            {dragged.draggable2 === null ? draggable("draggable2") : null}
            {dragged.draggable3 === null ? draggable("draggable3") : null}
            {dragged.draggable4 === null ? draggable("draggable4") : null}
            {dragged.draggable5 === null ? draggable("draggable5") : null}
            {dragged.draggable6 === null ? draggable("draggable6") : null}
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default FillInQuestion;
