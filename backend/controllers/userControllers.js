import User from "../models/User.js";

// create new tour 

export const createUser = async (req, res) =>{
    const new_User  = new User(req.body)
    try {
        const savedUser = await new_User.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedUser,
        })
    } catch (error) {
        res.status(500)
        .json({
            success: false, message:"Failed to create, Try again"
        })
    }
}

export const updateUser = async (req, res) => {

    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true} )

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failded to updated",
        });
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        const deletedUser = await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Deleted Succesfully",
            data: deletedUser,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to delete",
        });
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const getUser = await User.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Succesfully",
            data: getUser,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to find",
        });
    }
}

export const getAllUser = async (req, res) => {
    // for pagination 
    const page = parseInt(req.query.page)

    try {
        const getAll_User = await Tour.find({}).skip(page * 8).limit(8)

        res.status(200).json({
            success: true,
            message: "Get Succesfully",
            count: getAll_User.length,
            data: getAll_User,
        });
        console.log(getAll_User)
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to find",
        });
    }
}
