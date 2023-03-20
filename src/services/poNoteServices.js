const { HttpError } = require('../errors');
const { dashboardPrisma } = require('../prismaClient');
const prismaUtils = require('../utils/prismaUtils');

const selectOnlyValidPONoteFields = {
  select: {
    noteId: true,
    type: true,
    note: true,
    status: true,
    dueDate: true,
    issueLink: true,
    createdAt: true,
    projectId: true,
    memberId: true,
  }
};

// get all notes by quick filter
const getPONotesByQuickFilter = async (
  type,
  startDate,
  endDate,
  searchKeyword,
  status,
  page,
  limit,
  projectId
) => {
  let filterObj = {};

  const paginationObj = prismaUtils.getPaginationObject(page, limit);

  // getDateRangeObject, getSearchKeywordObject, getStatusQueryObject 
  // - these functions are just giving formated object
  // that can be directly added into prisma query
  // nothing manipulation is made here
  // so, can't expect null value from these functions
  filterObj = startDate ? {
    ...filterObj, ...prismaUtils.getDateRangeObject(startDate, endDate)
  } : filterObj;
  filterObj = searchKeyword ? {
    ...filterObj, ...prismaUtils.getSearchKeywordObject(searchKeyword)
  } : filterObj;
  filterObj = status ? {
    ...filterObj, ...prismaUtils.getStatusQueryObject(status)
  } : filterObj;
  filterObj = type ? {
    ...filterObj, type
  } : filterObj;

  const notes = await dashboardPrisma.PONote.findMany({
    where: {
      ...filterObj,
      isDeleted: false,
      projectId
    },
    orderBy: {
      createdAt: 'desc',
    },
    ...(paginationObj && paginationObj),
    ...selectOnlyValidPONoteFields
  }
  );

  return notes;
};

// get specific note by id
const getPONoteByID = async (noteId, projectId) => {
  const noteObj = await dashboardPrisma.PONote.findFirst({
    where: {
      noteId,
      isDeleted: false,
      projectId
    },
    ...selectOnlyValidPONoteFields
  });

  if (!noteObj) throw new HttpError(404, '(SEARCH) : No Record Found');
  return noteObj;
};

// create a new note
const createValidPONote = async (
  type, note,
  status, dueDate,
  issueLink, projectId, memberId
) => {

  const noteDetails = {
    type,
    note,
    ...(status && { status }),
    ...(dueDate && {
      dueDate: new Date(dueDate).toISOString()
    }),
    ...(issueLink && { issueLink }),

    // if dueDate or issueLink is null or undefined overwrite it with null
    ...(dueDate === undefined || dueDate === null && {
      dueDate: null
    }),
    ...(issueLink === undefined || issueLink === null && {
      issueLink: null
    }),
    projectId,
    memberId
  };

  const createdNote = await dashboardPrisma.PONote.create({
    data: noteDetails,
    ...selectOnlyValidPONoteFields
  },
  );

  return createdNote;
};

// update a note
const updatePONoteById = async (
  noteId, note,
  status, dueDate,
  issueLink, type, projectId, memberId
) => {

  // check if note belongs to member
  const targetNote = await dashboardPrisma.PONote.findFirst({
    where: {
      noteId,
      isDeleted: false,
      projectId
    },
    select: {
      memberId: true
    }
  });

  if (!targetNote) throw new HttpError(404, '(UPDATE) : No Record Found');
  if (targetNote.memberId !== memberId) throw new HttpError(403, 'You are not allowed to update this note.');

  const updateDetails = {
    ...(note && { note }),
    ...(status && { status }),
    ...(dueDate && {
      dueDate: new Date(dueDate).toISOString()
    }),
    ...(issueLink && { issueLink }),
    ...(type && { type }),

    // if dueDate or issueLink is null or undefined overwrite it with null
    ...(dueDate === undefined || dueDate === null && {
      dueDate: null
    }),
    ...(issueLink === undefined || issueLink === null && {
      issueLink: null
    })
  };

  const noteObj =
    await dashboardPrisma.PONote.updateMany({
      where: {
        noteId,
        isDeleted: false,
        projectId
      },
      data: updateDetails,
    });

  if (noteObj.count === 0) throw new HttpError(404, '(UPDATE) : No Record Found');

  return {
    noteId,
    ...updateDetails
  };
};

// soft delete a note
const softDeletePONoteById = async (noteId, projectId, memberId) => {

  // check if note belongs to member
  const targetNote = await dashboardPrisma.PONote.findFirst({
    where: {
      noteId,
      isDeleted: false,
      projectId
    },
    select: {
      memberId: true
    }
  });

  if (!targetNote) throw new HttpError(404, '(DELETE) : No Record Found');
  if (targetNote.memberId !== memberId) throw new HttpError(403, 'You are not allowed to delete this note.');

  const noteObj = await dashboardPrisma.PONote.updateMany({
    where: {
      noteId,
      isDeleted: false,
      projectId,
      memberId
    },
    data: {
      isDeleted: true
    },
  });

  if (noteObj.count === 0) throw new HttpError(404, '(DELETE) : No Record Found');
  return noteObj;
};

// hard delete a note
const hardDeletePONoteById = async (noteId, projectId, memberId) => {

  // check if note belongs to member
  const targetNote = await dashboardPrisma.PONote.findFirst({
    where: {
      noteId,
      isDeleted: false,
      projectId
    },
    select: {
      memberId: true
    }
  });

  if (!targetNote) throw new HttpError(404, '(DELETE) : No Record Found');
  if (targetNote.memberId !== memberId) throw new HttpError(403, 'You are not allowed to delete this note.');

  const noteObj = await dashboardPrisma.PONote.deleteMany({
    where: {
      noteId,
      isDeleted: false,
      projectId,
      memberId
    },
  });

  if (noteObj.count === 0) throw new HttpError(404, '(DELETE) : No Record Found');
  return noteObj;
};

module.exports = {
  getPONoteByID,
  getPONotesByQuickFilter,
  createValidPONote,
  updatePONoteById,
  hardDeletePONoteById,
  softDeletePONoteById
};
