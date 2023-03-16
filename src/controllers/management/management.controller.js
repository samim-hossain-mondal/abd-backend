const { 
  createNewAgileDashboardInDb,
  allProjectsByEmailInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberInDb,
  updateMemberRoleInDb,
  updateProjectInfoInDb,
  deleteProjectInDb,
  getProjectDetailsByIdInDb,
  createNewMemberInDb,
  getMemberDetailsByIdInDb,
  updateMemberInfoInDb,
  deleteMemberInDb
} = require('../../services/management/management.service');

const createNewProject = async (req, res, next) => {
  try {
    const { projectId, projectName, projectDescription } = req.body; /* projectId is JIRA project code */
    // const { email } = req.user;      /* Admin's email, should be verified by a MW */
    const email = 'aryan@email.com'; // dummy
    const role = 'ADMIN'; // dummy
    const result = await createNewAgileDashboardInDb(projectId, projectName, projectDescription, email, role);
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
    const email = 'aryan@email.com';
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
    const { memberId } = req.body;
    const result = await removeProjectMemberInDb(parseInt(projectId), memberId);
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

    // if (req.user.role !== 'ADMIN') {
    //   throw new HttpError(403, 'Only admins can update the role of a project member.');
    // }

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
    // const { role } = req.user
    // if (req.user.role !== 'ADMIN') {
    //   throw new HttpError(403, 'Only admins can update the info of a project.');
    // }
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

const getProjectDetailsById = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const project = await getProjectDetailsByIdInDb(parseInt(projectId));

    return res.status(200).json(project);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const createNewMember = async (req, res, next) => {
  try {
    const { email, name, role, } = req.body;
    const result = await createNewMemberInDb(email, name, role);
    res.status(201).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const getMemberDetailsById = async (req, res, next) => {
  try {
    const { memberId } = req.params;
    const member = await getMemberDetailsByIdInDb(parseInt(memberId));
    
    return res.status(200).json(member);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const updateMemberInfo = async (req, res, next) => {
  try {
    const { memberId } = req.params;
    const { name, role } = req.body;
    const result = await updateMemberInfoInDb(parseInt(memberId), name, role);
    res.status(200).json(result);
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const { memberId } = req.params;
    const result = await deleteMemberInDb(parseInt(memberId));
    res.status(200).json({ message: `Member ${result.email} deleted successfully.` });
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
  deleteProject,
  getProjectDetailsById,
  createNewMember,
  getMemberDetailsById,
  updateMemberInfo,
  deleteMember,
};