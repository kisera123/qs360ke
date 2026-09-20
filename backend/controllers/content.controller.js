const { findById, getSiteContent, listProjects } = require('../modules/content/content.service');

function getAllContent(_request, response) {
  response.json({ data: getSiteContent() });
}

function getProjects(request, response) {
  response.json({ data: listProjects(request.query.category) });
}

function getProject(request, response) {
  const project = findById('projects', request.params.id);
  if (!project) return response.status(404).json({ error: 'Project not found.' });
  return response.json({ data: project });
}

function getJournal(_request, response) {
  response.json({ data: getSiteContent().journal });
}

function getCourses(_request, response) {
  response.json({ data: getSiteContent().courses });
}

function getTemplates(_request, response) {
  response.json({ data: getSiteContent().templates });
}

function getServices(_request, response) {
  response.json({ data: getSiteContent().services });
}

module.exports = { getAllContent, getProjects, getProject, getJournal, getCourses, getTemplates, getServices };
