const { 
  createNewAgileDashboardInDb,
  allProjectsByCurrentUserInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberByEmailInDb,
  removeProjectMemberByIdInDb,
  updateMemberRoleByEmailInDb,
  updateMemberRoleByIdInDb,
  updateProjectInfoInDb,
  deleteProjectInDb,
  getProjectDetailsByIdInDb,
  createNewMemberInDb,
  getMemberDetailsByIdInDb,
  updateMemberInfoInDb,
  deleteMemberInDb,
  getProjectMemberDetailsByIdInDb
} = require('../services/management.service');

const createNewProject = async (req, res, next) => {
  try {
    const { projectName, projectDescription } = req.body; 
    const { email, name } = req.user;    
    const result = await createNewAgileDashboardInDb(
      projectName, 
      projectDescription, 
      email,
      name
    );
    res.status(201).json({
      message: 'Successfully created new project.', 
      result
    });
  }
  catch (er) {
    next(er);
  }
};

const listAllProjectsByCurrentUserEmail = async (req, res, next) => {
  try {
    const { email } = req.user; 
    const result = await allProjectsByCurrentUserInDb(email);
    res.status(200).json(result);
  }
  catch (er) {
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
    next(er);
  }
};

const removeMemberFromProject = async (req, res, next) => {
  try {
    const { projectId, memberId } = req.params;
    const { email } = req.body;
    memberId ? 
      await removeProjectMemberByIdInDb(parseInt(projectId), parseInt(memberId)) :
      await removeProjectMemberByEmailInDb(parseInt(projectId), email);
      
    res.status(204).json({ message: `Successfully removed member with email ${email} from project with id ${projectId}.` });
  }
  catch (er) {
    next(er);
  }
};

const updateMemberRole = async (req, res, next) => {
  try {
    const { projectId, memberId } = req.params;
    const { email, role } = req.body;
    const result = memberId ?
      await updateMemberRoleByIdInDb(parseInt(projectId), parseInt(memberId), role) :
      await updateMemberRoleByEmailInDb(parseInt(projectId), email, role);

    res.status(200).json(result);
  }
  catch (er) {
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
    next(er);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    await deleteProjectInDb(parseInt(projectId));
    res.status(204).json({ message: `Successfully deleted project with id ${projectId}.`});
  }
  catch (er) {
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
    next(er);
  }
};

const getProjectMemberDetailsById = async (req, res, next) => {
  try {
    const { projectId, memberId } = req.params;
    const result = await getProjectMemberDetailsByIdInDb(
      parseInt(projectId), parseInt(memberId)
    );
    res.status(200).json(result);
  }
  catch (er) {
    next(er);
  }
};

// REVIEW: these are not used anywhere

const createNewMember = async (req, res, next) => {
  try {
    const { email, name, slackLink } = req.body;
    const result = await createNewMemberInDb(email, name, slackLink);
    res.status(201).json(result);
  }
  catch (er) {
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
    next(er);
  }
};

const updateMemberInfo = async (req, res, next) => {
  try {
    const { memberId } = req.params;
    const { name, email, slackLink } = req.body;
    const result = await updateMemberInfoInDb(parseInt(memberId), name, email, slackLink);
    res.status(200).json(result);
  }
  catch (er) {
    next(er);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const { memberId } = req.params;
    const result = await deleteMemberInDb(parseInt(memberId));
    res.status(204).json({ message: `Member ${result.email} deleted successfully.` });
  }
  catch (er) {
    next(er);
  }
};

const currentUserDetails = async (req, res, next) => {
  try {
    const { user } = req;
    res.status(200).json(user);
  }
  catch (er) {
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
  currentUserDetails,
  getProjectMemberDetailsById,
};