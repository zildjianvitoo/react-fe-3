import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

export default function NotesList({
  notes,
  deleteNote,
  title,
  archiveNote,
  unarchiveNote,
}) {
  return (
    <div className="flex flex-col gap-4 px-4 my-5">
      <h2>{title}</h2>
      <div className="flex flex-wrap gap-4 ">
        {notes.length === 0 ? (
          <p>Tidak Ada Catatan</p>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              unarchiveNote={unarchiveNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  deleteNote: PropTypes.func,
  archiveNote: PropTypes.func,
  title: PropTypes.string,
  unarchiveNote: PropTypes.func,
};
