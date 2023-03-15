const { 
  createNewAgileDashboardInDb,
  allProjectsByEmailInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberInDb,
  updateMemberRoleInDb,
  updateProjectInfoInDb,
  deleteProjectInDb
} = require('../../services/management/management.service');

const createNewProject = async (req, res, next) => {
  try {
    const { projectId, projectName, projectDescription } = req.body; /* projectId is JIRA project code */
    // const { email } = req.user;      /* Admin's email, will be verified by a MW */
    const email = 'aryan@email.com';
    const result = await createNewAgileDashboardInDb(projectId, projectName, projectDescription, email);
    res.status(201).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const listAllProjectsByMemberEmail = async (req, res, next) => {
  try {
    // const { email } = req.user;
    const email = 'dummy@email.com';
    const result = await allProjectsByEmailInDb(email);
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const listAllMembersByProjectId = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const result = await allMembersByProjectIdInDb(parseInt(projectId));
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const addNewProjectMember = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { email, role } = req.body;
    const result = await addProjectMemberInDb(parseInt(projectId), email, role);
    res.status(201).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};



const removeMemberFromProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { email } = req.body;
    const result = await removeProjectMemberInDb(parseInt(projectId), email);
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};


const updateMemberRole = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { email, role } = req.body;
    const result = await updateMemberRoleInDb(parseInt(projectId), email, role);
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};


const updateProjectInfo = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { projectName, projectDescription } = req.body;
    const result = await updateProjectInfoInDb(parseInt(projectId), projectName, projectDescription);
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};


const deleteProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const result = await deleteProjectInDb(parseInt(projectId));
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

module.exports = {
  createNewProject,
  listAllProjectsByMemberEmail,
  listAllMembersByProjectId,
  addNewProjectMember,
  removeMemberFromProject,
  updateMemberRole,
  updateProjectInfo,
  deleteProject
};