import { Router, Request, Response } from 'express';

import ProductsRoutes from "./products.routes";
import BrandsRoutes from "./brands.routes";

const routes = Router();

routes.use("/product", ProductsRoutes);
routes.use("/brand", BrandsRoutes);


routes.get('/', (req: Request, res: Response) => {
  res.send('API funcionando!');
});

export default routes;