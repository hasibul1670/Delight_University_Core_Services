import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { BuildingServices } from './building.service';
import { buildingFilterableFields } from './building.constants';

const createBuilding = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BuildingServices.createBuilding(
      req.body
    );
    sendControllerResponse(
      res,
      'Building created successfully',
      result
    );
  }
);

const getAllBuildings = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, buildingFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await BuildingServices.getAllBuildings(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'Buildings fetched successfully',
      result
    );
  }
);

const getSingleBuilding = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BuildingServices.getSingleBuilding(id);
    sendControllerResponse(
      res,
      'A Single Building fetched Successfully!',
      result
    );
  }
);
const deleteBuilding = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BuildingServices.deleteBuilding(id);
    sendControllerResponse(
      res,
      'Building Deleted Successfully!',
      result
    );
  }
);
const updateBuilding = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await BuildingServices.updateBuilding(
      id,
      newData
    );
    sendControllerResponse(
      res,
      'Building Updated Successfully!',
      result
    );
  }
);

export const BuildingControllers = {
  createBuilding,
  getAllBuildings,
  getSingleBuilding,
  deleteBuilding,
  updateBuilding,
};
