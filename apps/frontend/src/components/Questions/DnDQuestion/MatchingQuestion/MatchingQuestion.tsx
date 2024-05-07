import { useEffect, useState } from "react";
import Draggable from "../Draggable";
import Droppable from "../Droppable";
import { DndContext } from "@dnd-kit/core";
import { Over } from "@dnd-kit/core";
import classes from "./index.module.css";

const MatchingQuestion = ({
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

  const firstAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer1[0]) - 1);
  const secondAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer1[1]) - 1);
  const thirdAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer2[0]) - 1);
  const forthAnswer =
    "draggable" + String(possibleAnswers.indexOf(correctAnswer2[1]) - 1);

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
    return id !== null ? (
      id.map((idDrag, index) => (
        <div key={`${idDrop}-${index}`}>{draggable(idDrag.toString())}</div>
      ))
    ) : (
      <div></div>
    );
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
        const update =
          parents[String(draggedId)]?.filter((item) => item !== String(drag)) ??
          null;

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
            Array.isArray(value) && key === droppableId && value.length === 1
              ? value.some((el) => el === String(drag))
                ? value
                : [...value, String(drag)]
              : value?.filter((item) => item !== String(drag)) || null,
          ])
        );
        setDragged((prev) => ({
          ...prev,
          [String(drag)]: updatedParents[droppableId]?.some(
            (el) => el === String(drag)
          )
            ? droppableId
            : null,
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
          Array.isArray(value) && key === draggedId
            ? value.filter((item) => item !== String(drag))
            : value,
        ])
      );
      setParents(updatedParents);
    }
    setDrag(null);
  }

  useEffect(() => {
    if (
      parents["droppable1"]?.includes(firstAnswer) &&
      parents["droppable1"]?.includes(secondAnswer) &&
      parents["droppable2"]?.includes(thirdAnswer) &&
      parents["droppable2"]?.includes(forthAnswer)
    ) {
      toggleMode(true);
    }
  }, [parents]);

  return (
    <div className={classes.body}>
      <div className={classes.question}>{question}</div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={classes.answerContainer}>
          <div className={classes.container}>
            <div className={classes.dragHere}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="54"
                viewBox="0 0 144 54"
                fill="none">
                <mask id="path-1-inside-1_281_1716" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 0C7.16344 0 0 7.16344 0 16V25V28.8615V54H144V28.8615V25V16C144 7.16344 136.837 0 128 0H16Z"
                  />
                </mask>
                <path
                  d="M0 54H-4V58H0V54ZM144 54V58H148V54H144ZM4 16C4 9.37258 9.37258 4 16 4V-4C4.95431 -4 -4 4.9543 -4 16H4ZM4 25V16H-4V25H4ZM4 28.8615V25H-4V28.8615H4ZM4 54V28.8615H-4V54H4ZM144 50H0V58H144V50ZM140 28.8615V54H148V28.8615H140ZM140 25V28.8615H148V25H140ZM140 16V25H148V16H140ZM128 4C134.627 4 140 9.37258 140 16H148C148 4.95431 139.046 -4 128 -4V4ZM16 4H128V-4H16V4Z"
                  fill="#F5B943"
                  mask="url(#path-1-inside-1_281_1716)"
                />
              </svg>
              <div className={classes.textField}>{text1}</div>
              {droppable("droppable1")}
            </div>
            <div className={classes.dragHere}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="54"
                viewBox="0 0 144 54"
                fill="none">
                <mask id="path-1-inside-1_281_1716" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 0C7.16344 0 0 7.16344 0 16V25V28.8615V54H144V28.8615V25V16C144 7.16344 136.837 0 128 0H16Z"
                  />
                </mask>
                <path
                  d="M0 54H-4V58H0V54ZM144 54V58H148V54H144ZM4 16C4 9.37258 9.37258 4 16 4V-4C4.95431 -4 -4 4.9543 -4 16H4ZM4 25V16H-4V25H4ZM4 28.8615V25H-4V28.8615H4ZM4 54V28.8615H-4V54H4ZM144 50H0V58H144V50ZM140 28.8615V54H148V28.8615H140ZM140 25V28.8615H148V25H140ZM140 16V25H148V16H140ZM128 4C134.627 4 140 9.37258 140 16H148C148 4.95431 139.046 -4 128 -4V4ZM16 4H128V-4H16V4Z"
                  fill="#F5B943"
                  mask="url(#path-1-inside-1_281_1716)"
                />
              </svg>
              <div className={classes.textField}>{text2}</div>
              {droppable("droppable2")}
            </div>
          </div>
          <div className={classes.answerFillIn}>
            {dragged.draggable1 === null ? draggable("draggable1") : null}
            {dragged.draggable2 === null ? draggable("draggable2") : null}
            {dragged.draggable3 === null ? draggable("draggable3") : null}
            {dragged.draggable4 === null ? draggable("draggable4") : null}
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default MatchingQuestion;
