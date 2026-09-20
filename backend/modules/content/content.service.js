const content = require('./content.data');

function listProjects(category) {
  if (!category || category === 'all') return content.projects;
  return content.projects.filter((project) => project.category === category);
}

function findById(collection, id) {
  return content[collection].find((item) => item.id === id);
}

function getSiteContent() {
  return content;
}

module.exports = { listProjects, findById, getSiteContent };
