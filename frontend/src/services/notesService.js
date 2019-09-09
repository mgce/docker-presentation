import axios from 'axios';

const baseUrl = 'https://localhost:44325/api/';

const getAllNotes = () => {
  return axios.get(baseUrl + 'notes').then(result => result.data);
};

const getNote = id => {
  return axios.get(baseUrl + `notes/${id}`).then(result => result.data);
};

const createNote = note => {
  return axios.post(baseUrl + `notes`, note);
};

export default {
  getAllNotes,
  getNote,
  createNote,
};
