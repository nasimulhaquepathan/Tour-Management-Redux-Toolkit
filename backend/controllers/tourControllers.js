import Tour from "../models/Tour.js";

// create new tour 

export const createTour = async (req, res) =>{
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,
        })
        
    } catch (error) {
        res.status(500)
        .json({
            success: false, message:"Failed to create, Try again"
        })
    }
}

export const updateTour = async (req, res) => {

    const id = req.params.id

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true} )

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedTour,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failded to updated",
        });
    }
}


export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        const deletedTour = await Tour.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Deleted Succesfully",
            data: deletedTour,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to delete",
        });
    }
}

export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const getTour = await Tour.findById(id)

        res.status(200).json({
            success: true,
            message: "Get Succesfully",
            data: getTour,
        });
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to find",
        });
    }
}

export const getAllTour = async (req, res) => {
    // for pagination 
    const page = parseInt(req.query.page)

    try {
        const getAllUser = await Tour.find().populate('reviews')
        .skip(page * 8).limit(8)

        res.status(200).json({
            success: true,
            message: "Get Succesfully",
            data: getAllUser,
            // count: getAllUser.length,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "failed to find",
        });
    }
}


// get tour by search
export const getTourBySearch = async(req, res)=>{
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await Tour.find({city,
             distance:{$gte:distance},
             maxGroupSize: {$gte:maxGroupSize},
        }).populate('reviews');

        res.status(200).json({
            success: true,
            message: "Succesfull",
           
            data: tours,
        });

    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Not found!",
        });
    }
}

// get featured tour 

export const getFeaturedTour = async ( req, res) => {

    try {
        const tours = await Tour.find({featured: true}).populate('reviews').limit(8);

        res.status(200).json({
            success: true,
            message: "Succesfull",
            data: tours,
        });

    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
            message: "Not found!",
        });
    }
}

// get tour counts 
export const getTourCount = async(req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({success: true, data: tourCount})
    } catch (error) {
        res.status(200).json({success: false, message: 'failed to fetch'})
        
    }
}