import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { productController } from './product.controller';

const router = express.Router();
router.post(
  '/create-product',
  //auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.INSTRUCTOR),
  productController.createProduct
);
router.get('/:id', productController.getSingleProduct);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  productController.deleteProduct
);

router.patch(
  '/:id',

  auth(ENUM_USER_ROLE.ADMIN),
  productController.updateProduct
);
router.get('/', productController.getAllProducts);

export const ProductRoutes = router;
