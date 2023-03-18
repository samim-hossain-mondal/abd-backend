const {HttpError} = require('../errors');
const prisma = require('../prismaClient');
// service to create a new madeToStick
const createMadeToStick = async ( value ,
  x ,
  y,
  w ,
  h ,
  type,
  emailId ,
  backgroundColor) => {
  const madeToStickDetails={
    value,
    backgroundColor,
    x,
    y,
    w,
    h,
    type,
    emailId
  };
  const madeToStickItem = await prisma.madeToStick.create({
    data:madeToStickDetails
  });
  return madeToStickItem;
};
// service to edit a madeToStick
const editMadeToStick = async ( value ,
  x ,
  y,
  w ,
  h ,
  type,
  emailId ,
  backgroundColor,i) => {
  const madeToStickDetails={
    value,
    backgroundColor,
    x,
    y,
    w,
    h,
    type,
    emailId
  };
  const madeToStickItem = await prisma.madeToStick.update({
    where:{
      i:i
    },
    data:madeToStickDetails
  });
  if(madeToStickItem.count === 0)
  {
    throw new HttpError(404, '(UPDATE) : No Record Found');
  }
  return madeToStickItem;
};
const deleteMadeToStick = async (i) => {
  const madeToStickItem = await prisma.madeToStick.delete({
    where:{
      i:i
    }
  });
  if(madeToStickItem.count === 0)
  {
    throw new HttpError(404, '(DELETE) : No Record Found');
  }
  return madeToStickItem;
};
const getAllMadeToStick = async () => {
  const madeToStickItem = await prisma.madeToStick.findMany();
  return madeToStickItem;
};
module.exports={
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick,
  getAllMadeToStick
};