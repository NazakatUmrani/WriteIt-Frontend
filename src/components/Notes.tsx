import Note from "./Note";

import { FC } from "react";

interface Note {
  _id: string;
  title: string;
  description: string;
}

interface NotesProps {
  notes: Note[];
}

const Notes: FC<NotesProps> = ({ notes }) => {
  return (
    <div className="h-full">
      <div className="flex flex-wrap p-[2.5vw] justify-evenly gap-y-4">
        {(notes.length>0) ? (notes.map((note) => {
          return (
            <div key={note._id} className="w-[30vw]">
              <Note
                note={{ title: note.title, description: note.description }}
              />
            </div>
          );
        })) : <p className="text-2xl text-center text-primary">No notes found</p>}
      </div>
    </div>
  );
};

export default Notes;
