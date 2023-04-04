const createContent = (content,length) => {
  if(content.length>length)
  {
    return content.substring(0,length)+'...';
  }
  return content;
};
const createTitle = (targetType) => {
  const targetTypeLowerCase = targetType.toLowerCase();
  const targetFinalValue = targetTypeLowerCase==='team_request'?'team request':targetTypeLowerCase;
  const result = 'You have been tagged in a ' + targetFinalValue ;
  return result;
};
module.exports = {
  createContent,
  createTitle
};