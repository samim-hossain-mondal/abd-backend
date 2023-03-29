const getTodayDate = (offSetTime = 0) => {
  const todayDate = new Date(new Date().getTime() + offSetTime).toISOString().split('T')[0];
  return todayDate;
};

module.exports = getTodayDate;