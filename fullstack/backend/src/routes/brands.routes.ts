import { Router } from "express";
import BrandsController from "../controllers/brands.controller";

const routes = Router();

routes.get("/", BrandsController.getBrands);

export default routes;