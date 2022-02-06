const ProjectDetail = require("../models/projectDetailsModel")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
//Create Project Details management ==>Admin
exports.createProjectDetail = catchAsyncErrors( async (req,res,next)=>{
    req.body.user = req.user.id
    const projectDetail = await ProjectDetail.create(req.body);
    res.status(201).json({
        success:true,
        projectDetail
    })
});
//get all project details
exports.getAllProjectDetails= catchAsyncErrors( async(req,res)=>{
    const projectDetails = await ProjectDetail.find();
    res.status(200).json({
        success:true,
        projectDetails
    })
});
//get single Project Details
exports.getProjectDetails = catchAsyncErrors( async(req,res,next)=>{
    const projectDetail = await ProjectDetail.findById(req.params.id);
    if(!projectDetail){
        return res.status(500).json({
            success:false,
            message:"Project detail not found"
        })
    }
    res.status(200).json({
        success:true,
        projectDetail
    })
});
//Update Project Details
exports.updateProjectDetail = catchAsyncErrors( async(req,res,next)=>{
    let projectDetail = await ProjectDetail.findById(req.params.id);
    if(!projectDetail){
        return res.status(500).json({
            success:false,
            message:"Project details not found"
        })
    }
    projectDetail = await ProjectDetail.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        projectDetail
    })

});

//Delete Project
exports.deleteProject =catchAsyncErrors( async(req,res,next)=>{
    const project = await ProjectDetail.findById(req.params.id);
    if(!project){
        return res.status(500).json({
            success:false,
            message:"Project detail not found"
        })
    }
    await project.remove();
    res.status(200).json({
        success:true,
        message:"Project details deleted successfully"
    })
});
//create new question or update  ans

exports.createProjectQuestion = catchAsyncErrors(async(req,res,next)=>{
    const {question,ans,projectDetailId}=req.body
    const anwer = {
        user:req.user._id,
        name:req.user.name,
        question:question,
        ans,
    };
    const projectDetail = await ProjectDetail.findById(projectDetailId);
    const isAnswered = projectDetail.anwers.find(
       (an) => an.user.toString()===req.user._id());
    if(isAnswered){
        projectDetail.anwers.forEach((an)=>{
            if(an.user.toString()===req.user._id.toString())
            (an.question = question),(an.ans = ans);
        });

    }else{
        projectDetail.anwers.push(anwer)
    }

    // projectDetail.questionss=
    // projectDetail.questionss.questions.map((an)=>{
    //     an=an.questions;
    // })

    await projectDetail.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
    });

})

//get all questions of a project
// exports.getALLprojectQuestion = catchAsyncErrors(async(req,res,next)=>{
//     const projectDetail = await ProjectDetail.findById(req.query.id);
//     if(!projectDetail){
//         return res.status(500).json({
//             success:false,
//             message:"Project detail not found"
//         })
//     }
//     res.status(200).json({
//         success:true,
//         anwers:projectDetail.anwers,
//     })

// })