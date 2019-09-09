/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const NotesForm = props => {
  const { title, content, onFieldChanged, onSubmit } = props;
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={onFieldChanged}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="content" className="col-sm-2 col-form-label">
          Content
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="content"
            name="content"
            placeholder="Content"
            value={content}
            onChange={onFieldChanged}
          />
        </div>
      </div>
      <button type="submit" onClick={onSubmit} className="btn btn-primary">
        Add note
      </button>
    </form>
  );
};

NotesForm.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onFieldChanged: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default NotesForm;
