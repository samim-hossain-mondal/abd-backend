const { 
  createNewAgileDashboardInDb,
  allProjectsByCurrentUserInDb,
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
    const { email } = req.user;      /* TODO: comes via MW */
    // const email = 'cricket@email.com'; // dummy
    const result = await createNewAgileDashboardInDb(
      projectId, 
      projectName, 
      projectDescription, 
      email
    );
    res.status(201).json({
      message: 'Successfully created new project.', 
      result
    });
  }
  catch (er) {
    console.log(er);
    next(er);
  }
};

const listAllProjectsByCurrentUserEmail = async (req, res, next) => {
  try {
    const { email } = req.user; // TODO: comes via MW
    // const email = 'aryan@email.com';
    const result = await allProjectsByCurrentUserInDb(email);
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
  // TODO: MW has to protect this route - only ADMIN can access
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
  // TODO: MW has to protect this route - only ADMIN can access
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
  // TODO: MW has to protect this route - only ADMIN can access
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
  // TODO: MW has to protect this route - only ADMIN can access
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
  // TODO: MW has to protect this route - only ADMIN can access
  try {
    const { projectId } = req.params;
    await deleteProjectInDb(parseInt(projectId));
    res.status(200).json({ message: `Successfully deleted project with id ${projectId}.`});
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

// REVIEW: these are not used anywhere

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
  listAllProjectsByCurrentUserEmail,
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