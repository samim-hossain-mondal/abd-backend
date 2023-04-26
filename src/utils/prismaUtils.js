const getPaginationObject = (page, limit) => {

  return page && limit ? {
    skip: (page - 1) * limit,
    take: limit * 1
  } : null;
};

// get formated date range object to filter notes,
// that will be used in the query
const getDateRangeObject = (startDate, endDate, offSetTime = 0) => {

  const sDate = new Date(startDate);
  const eDate = endDate ?
    new Date(endDate) :
    new Date(startDate);

  eDate.setDate(eDate.getDate() + 1);

  return {
    createdAt: {
      gte: new Date(new Date(sDate).getTime() + offSetTime).toISOString(),
      lt: new Date(new Date(eDate).getTime() + offSetTime).toISOString()
    }
  };
};

// get formated search object to filter notes,
// that will be used in the query
const getSearchKeywordObject = (searchKeyword) => {
  return {
    note: {
      contains: searchKeyword,
      mode: 'insensitive',
    }
  };
};

// get formated status object to filter notes,
// that will be used in the query
const getStatusQueryObject = (status) => {
  status = status.toUpperCase();
  return {
    status
  };
};
const queryParamFilterTeamRequests = (
  type,
  startDate,
  endDate,
  searchKeyword,
  status) => {
  let filterObj = {};
  // using query params for filter requests with startDate, endDate, search keyword, status, page , limit and author) 
  filterObj = startDate ? {
    ...filterObj, ...getDateRangeObject(startDate, endDate)
  } : filterObj;
  filterObj = searchKeyword ? {
    ...filterObj, content: {
      contains: searchKeyword,
      mode: 'insensitive',
    }
  } : filterObj;
  filterObj = status ? {
    ...filterObj, ...getStatusQueryObject(status)
  } : filterObj;
  filterObj = type ? {
    ...filterObj, type
  } : filterObj;
  // filterObj = author ? {
  //   ...filterObj, author: author
  // } : filterObj;
  return filterObj;
};
const queryParamNotificationFilter = (readStatus, targetType) => {
  let filterObj = {};

  filterObj = readStatus ? {
    ...filterObj, readStatus: readStatus === 'true' ? true : false
  } : filterObj;
  filterObj = targetType ? {
    ...filterObj, targetType
  } : filterObj;
  return filterObj;
};

const filterTitleAndContent = (searchKeyword) => {
  let filterObj = {};

  filterObj = searchKeyword ? {
    ...filterObj,
    content: {
      contains: searchKeyword,
      mode: 'insensitive',
    },
    title: {
      contains: searchKeyword,
      mode: 'insensitive',
    }
  } : filterObj;
  return filterObj;
};

module.exports = {
  getPaginationObject,
  getStatusQueryObject,
  getSearchKeywordObject,
  getDateRangeObject,
  queryParamFilterTeamRequests,
  queryParamNotificationFilter,
  filterTitleAndContent
};
