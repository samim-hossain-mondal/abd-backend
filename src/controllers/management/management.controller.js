const { 
  createNewAgileDashboardInDb,
} = require('../../services/management/management.service');

const createNewProject = async (req, res, next) => {
  try {
    const { projectId, projectName, projectDescription } = req.body;
    // const { email } = req.user;      /* Admin's email, will be verified by a MW */
    const email = 'dummy@email.com';
    const result = await createNewAgileDashboardInDb(projectId, projectName, projectDescription, email);
    res.status(201).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};



module.exports = {
  createNewProject,
};