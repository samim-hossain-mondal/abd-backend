const { dashboardPrisma } = require('../prismaClient');
const { managementPrisma } = require('../prismaClient');
const createNotificationFields = require('./createNotificationFields');
function extractEmailId(content)
{
  const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const emailIdList = content.match(regex);
  return emailIdList;
}
async function createNotification(content,projectId,targetId,targetType){
  try{
    const emailIdList = extractEmailId(content);
    const contentValue = createNotificationFields.createContent(content,35);
    const titleValue = createNotificationFields.createTitle(targetType);
    const notification = await dashboardPrisma.notification.create({
      data: {
        title:titleValue,
        content:contentValue,
        projectId,
        targetType,
        targetId,
      },
    });
    if(emailIdList)
    {
      for(let i=0;i<emailIdList?.length;i++)
      {
        const member = await managementPrisma.Member.findFirst({
          where:{
            email:emailIdList[i]
          }
        });
        if(member)
        {
          const userNotification = await dashboardPrisma.userNotification.create({
            data: {
              memberId:member.memberId,
              readStatus:false,
              notificationId:notification.id
            },
          });
          const memberId =member.memberId;
          notification[memberId] =userNotification;
        }
      }
    }
    return notification;
  }
  catch(err)
  {
    return null;
  }
}
module.exports = {
  createNotification,
};