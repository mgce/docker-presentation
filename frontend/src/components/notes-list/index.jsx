import React from 'react';
import PropTypes from 'prop-types';

const NotesList = props => {
  const { notes } = props;
  return (
    <>
      <h2 className="mt-5">Notes List</h2>
      <div className="list-group">
        {notes.map(note => (
          // eslint-disable-next-line react/jsx-key
          <div key={note.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                #{note.id} {note.title}
              </h5>
            </div>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default NotesList;
