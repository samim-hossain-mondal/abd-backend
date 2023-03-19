const madeToStickService = require('../services/madeToStick.services');
// controller for creating a new made to stick item
const createMadeToStick = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId);
  const memberId = parseInt(req.user.memberId);
  const emailId = req.user.email;

  try {
    //  x, y , w , h are pre defined properties of react-grid-layout item
    const {
      value,// value of the item
      x, // x position of the item 
      y, // y position of the item
      w, // width of the item
      h, // height of the item
      type, // type of the item (TEXT, IMAGE)
      backgroundColor, // background color of the item
    } = req.body;
    const madeToStickItem = await madeToStickService.createMadeToStick(
      value,
      x,
      y,
      w,
      h,
      type,
      emailId,
      backgroundColor,
      memberId,
      projectId
    );
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};
// controller for editing a made to stick item
const editMadeToStick = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId);
  const memberId = parseInt(req.user.memberId);
  const emailId = req.user.email;

  try {
    const {
      value,
      x,
      y,
      w,
      h,
      type,
      backgroundColor,
    } = req.body;
    const { i } = req.params;
    // i is the id of the item,  i is a key word in react-grid-layout
    const madeToStickItem = await madeToStickService.editMadeToStick(
      value,
      x,
      y,
      w,
      h,
      type,
      emailId,
      backgroundColor,
      i,
      memberId,
      projectId
    );
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};
const deleteMadeToStick = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId);
  const memberId = parseInt(req.user.memberId);

  try {
    const { i } = req.params;
    const madeToStickItem = await madeToStickService.deleteMadeToStick(
      i, memberId, projectId
    );
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};

const getAllMadeToStick = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId);

  try {
    const madeToStickItem = await madeToStickService.getAllMadeToStick(projectId);
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};
module.exports = {
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick,
  getAllMadeToStick
};