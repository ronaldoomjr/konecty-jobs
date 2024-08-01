import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const routes = Router();

routes.get("/", ProductsController.getProducts);

export default routes;