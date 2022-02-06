const express = require("express");
const { getAllProjectDetails, createProjectDetail, updateProjectDetail, deleteProject, getProjectDetails, createProjectQuestion, getALLprojectQuestion,  } = require("../controllers/projectDetailController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// router.route("/projectDetails").get(isAuthenticatedUser,authorizeRoles("admin"),getAllProjectDetails);
router.route("/projectDetails").get(getAllProjectDetails);

router.route("/projectDetail/new").post(isAuthenticatedUser,createProjectDetail);
router.route("/projectDetail/:id").put(isAuthenticatedUser,updateProjectDetail).delete(isAuthenticatedUser,deleteProject).get(getProjectDetails);
router.route("/ans").put(isAuthenticatedUser,createProjectQuestion)

// router.route("/allquesans").get(getALLprojectQuestion)
module.exports = router