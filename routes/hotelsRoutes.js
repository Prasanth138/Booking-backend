import express from 'express';
import {
  createHotel,
  getAllCityHotels,
  getHotels,
  getSingleHotel,
  updateHotel,
  deleteHotel
} from "../controllers/hotelsController.js";
import { verifyAdmin, verifyUser } from '../middleware/VerifyToken.js';

 const router = express.Router();

 /** 
 *@api {post} /Post Hotels
 *@apiPermissions {post} /Post
 */
//POST
// router.post('/post',verifyAdmin, createHotel);
router.post('/post', createHotel);

//GET 
router.get('/allCityHotels', getAllCityHotels);

//GET
router.post('/', getHotels);

//POST
router.post("/singleHotel", getSingleHotel);
//router.post("/singleHotel",verifyUser, getSingleHotel);

//UPDATE
router.patch('/',verifyAdmin, updateHotel);

//DELETE
router.patch('/delete',verifyAdmin, deleteHotel);



export default router;
