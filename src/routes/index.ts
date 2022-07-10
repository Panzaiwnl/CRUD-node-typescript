import {Router} from "Express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRoutes);

export {router }