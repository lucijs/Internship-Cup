import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { green, red } from "@mui/material/colors";

interface TaxDroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable(props: TaxDroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
