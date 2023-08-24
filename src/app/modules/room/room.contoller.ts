import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { RoomServices } from './room.service';
import { roomFilterableFields } from './room.constants';

const createRoom = catchAsync(
  async (req: Request, res: Response) => {
    const result = await RoomServices.createRoom(
      req.body
    );
    sendControllerResponse(
      res,
      'Room created successfully',
      result
    );
  }
);

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, roomFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await RoomServices.getAllAcademicFaculties(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'Rooms fetched successfully',
      result
    );
  }
);

const getSingleRoom = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RoomServices.getSingleRoom(id);
    sendControllerResponse(
      res,
      'A Single Room fetched Successfully!',
      result
    );
  }
);
const deleteRoom = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RoomServices.deleteRoom(id);
    sendControllerResponse(
      res,
      'Room Deleted Successfully!',
      result
    );
  }
);
const updateRoom = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await RoomServices.updateRoom(
      id,
      newData
    );
    sendControllerResponse(
      res,
      'Room Updated Successfully!',
      result
    );
  }
);

export const RoomControllers = {
  createRoom,
  getAllAcademicFaculties,
  getSingleRoom,
  deleteRoom,
  updateRoom,
};
