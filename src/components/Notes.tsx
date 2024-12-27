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
    <div className="h-full overflow-y-scroll flex items-center py-4 justify-center">
      {notes.length > 0 ? (
        <div className="grid my-3 mx-auto px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-10 gap-4 h-full justify-center w-max">
          {notes.map((note) => {
            return (
              <div key={note._id} className="">
                <Note
                  note={{ title: note.title, description: note.description }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">
          <p className="text-[5vw] sm:text-lg lg:text-3xl text-primary">
            No notes found
          </p>
        </div>
      )}
    </div>
  );
};

export default Notes;
