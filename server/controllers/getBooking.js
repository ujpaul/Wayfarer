
import bookingData from '../models/booking_file';
const getBooking = (req,res)=>{
    
    return res.status(200).json({
        status:"success",
        data:bookingData
    });
}

export default getBooking;