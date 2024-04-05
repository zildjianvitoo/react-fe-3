import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

import { FaRegTrashCan } from "react-icons/fa6";

export default function NoteItem({
  note,
  deleteNote,
  archiveNote,
  unarchiveNote,
}) {
  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className="flex flex-col gap-3 p-3 text-black border rounded-md shadow-sm bg-white/80 border-slate-400 min-w-40">
      <h3 className="text-xl font-semibold">{note.title}</h3>
      <p>{note.description}</p>
      <div className="flex justify-between gap-2">
        {note.isArchive ? (
          <BiArchiveOut
            className="text-xl text-yellow-600 cursor-pointer"
            onClick={() => unarchiveNote(note.id)}
          />
        ) : (
          <BiArchiveIn
            className="text-xl text-yellow-600 cursor-pointer"
            onClick={() => archiveNote(note.id)}
          />
        )}
        <FaRegTrashCan
          className="text-xl text-red-600 cursor-pointer"
          onClick={() => handleDeleteNote(note.id)}
        />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func,
  archiveNote: PropTypes.func,
  unarchiveNote: PropTypes.func,
};
