/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NotesService from '../../services/notesService';
import NotesList from '../../components/notes-list';
import NotesForm from '../../components/notes-form';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      notes: [],
    };
  }

  componentDidMount() {
    NotesService.getAllNotes().then(notes => this.setState({ notes }));
  }

  handleFieldChanged = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;

    if (!title || !content) return;

    const note = {
      title,
      content,
    };

    NotesService.createNote(note)
      .then(() => NotesService.getAllNotes())
      .then(notes => this.setState({ notes, title: '', content: '' }));
  };

  render() {
    const { notes, title, content } = this.state;
    return (
      <div className="container">
        <NotesForm
          title={title}
          content={content}
          onFieldChanged={this.handleFieldChanged}
          onSubmit={this.handleSubmit}
        />
        <NotesList notes={notes} />
      </div>
    );
  }
}
