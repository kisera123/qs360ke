const express = require('express');
const controller = require('../../controllers/content.controller');

const router = express.Router();

router.get('/', controller.getAllContent);
router.get('/projects', controller.getProjects);
router.get('/projects/:id', controller.getProject);
router.get('/journal', controller.getJournal);
router.get('/courses', controller.getCourses);
router.get('/templates', controller.getTemplates);
router.get('/services', controller.getServices);

module.exports = router;
