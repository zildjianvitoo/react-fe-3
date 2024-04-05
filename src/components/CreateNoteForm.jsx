import { useState } from "react";
import PropTypes from "prop-types";

function CreateNoteForm({ createNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-3 mt-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-80">
        <label className="text-xl font-medium">Title</label>
        <input
          className="px-2 py-1 border rounded-md border-slate-700"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col w-80">
        <label className="text-xl font-medium">Description</label>
        <textarea
          rows={4}
          className="px-2 py-1 border rounded-md border-slate-700"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button
        disabled={title.length === 0 || description.length === 0}
        type="submit"
        className="px-3 py-2 text-white rounded-md disabled:cursor-not-allowed bg-sky-400 hover:bg-sky-500 disabled:opacity-60 disabled:hover:bg-sky-400"
      >
        Buat Catatan
      </button>
    </form>
  );
}

CreateNoteForm.propTypes = {
  createNote: PropTypes.func,
};

export default CreateNoteForm;
