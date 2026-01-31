const Course = require('../models/course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        res.json({status: true, data: courses})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.createCourse = async (req,res) => {
    try {
        const course = await Course.create(req.body)
        res.status(201).json({status: true, data:course})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.getDetailOfCourse = async (req, res) => {
    try {
        const detailCourse = await Course.findById(req.params.id)
        if(!detailCourse) {
            return res.status(404).json({status: false, message: 'Course not found'})
        }
        res.json({status:true, data:detailCourse})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteCourse = async (req,res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id)
        if(!deletedCourse) {
            return res.status(404).json({status:false, message: 'Course not found'})
        }
        res.json({status:true, message:'Course deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.updateCourse = async (req,res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body)
        if(!updatedCourse) {
            return res.status(404).json({status:false, message: 'Course not found'})
        }
        res.json({status:true, data: updatedCourse})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}