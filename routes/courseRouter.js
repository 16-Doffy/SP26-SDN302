var express = require('express');
var courseRouter = express.Router();
const CourseController = require('../controller/courseController')
const authMiddleware = require('../middlewares/auth')

courseRouter.route('/')
    .get(authMiddleware,CourseController.getAllCourses)
    .post(authMiddleware,CourseController.createCourse);
courseRouter.route('/:id')
    .get(authMiddleware,CourseController.getDetailOfCourse)
    .delete(authMiddleware,CourseController.deleteCourse)
    .put(authMiddleware,CourseController.updateCourse);

module.exports = courseRouter;
