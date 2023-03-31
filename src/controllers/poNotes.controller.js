const poNoteServices = require('../services/poNoteServices');

// controller to handle GET request for listing all po notes
const listPONotes = async (req, res, next) => {
  const { memberId, isPO } = req.user;

  try {
    const {
      type,
      startDate,
      endDate,
      search,
      status,
      page,
      limit
    } = req.query;
    const { projectId } = req.params;

    const filteredNotes =
      await poNoteServices.getPONotesByQuickFilter(
        type,
        startDate,
        endDate,
        search,
        status,
        page,
        limit,
        parseInt(projectId),
        parseInt(memberId),
        isPO
      );
    res.status(200).json(filteredNotes);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle POST request for creating a po note
const createPONote = async (req, res, next) => {
  try {
    const {
      type, note,
      status, dueDate,
      issueLink
    } = req.body;
    const { projectId } = req.params;
    const { memberId } = req.user;

    const createdNote =
      await poNoteServices.createValidPONote(
        type, note,
        status, dueDate,
        issueLink, parseInt(projectId),
        parseInt(memberId)
      );

    res.status(201).json(createdNote);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle GET request for getting a po note by id
const detailPONote = async (req, res, next) => {
  try {
    const { projectId, id: noteId } = req.params;
    const { memberId } = req.user;

    const resultNote = await poNoteServices.getPONoteByID(
      noteId,
      parseInt(projectId),
      parseInt(memberId)
    );
    res.status(200).json(resultNote);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle PATCH request for editing a po note by id
const editPONote = async (req, res, next) => {
  try {
    const { projectId, id: noteId } = req.params;

    const {
      note,
      status,
      dueDate,
      issueLink,
      type
    } = req.body;

    const { memberId } = req.user;

    const updatedNote =
      await poNoteServices.updatePONoteById(
        noteId, note,
        status, dueDate,
        issueLink, type,
        parseInt(projectId),
        parseInt(memberId)
      );

    res.status(200).json(updatedNote);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle DELETE request for deleting a po note by id
const deletePONote = async (req, res, next) => {
  try {
    const { projectId, id: noteId } = req.params;
    const deleteType = req.body.deleteType;
    const { memberId } = req.user;

    deleteType === 'HARD' ?
      await poNoteServices.hardDeletePONoteById(noteId, parseInt(projectId), parseInt(memberId)) :
      await poNoteServices.softDeletePONoteById(noteId, parseInt(projectId), parseInt(memberId));

    res.status(204).json();
  }
  catch (er) {
    next(er);
  }
};

module.exports = {
  listPONotes,
  createPONote,
  detailPONote,
  editPONote,
  deletePONote,
};
