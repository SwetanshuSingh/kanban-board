import { useDraggable } from "@dnd-kit/core";

interface DraggableTaskProps {
  id: number;
  title: string;
}

export function DraggableTask({ id, title }: DraggableTaskProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-full h-24 bg-white rounded-lg cursor-grab"
    >
      <p>{title}</p>
    </div>
  );
}
