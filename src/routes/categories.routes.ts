import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

import multer from "multer";

const upload = multer({
    dest: "./tmp",
});



const categoriesRoutes = Router();



categoriesRoutes.post("/", (request, response) => {
    
    return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {

    return listCategoriesController.handle(request, response);
    
});

categoriesRoutes.post("/upload", upload.single("file"), (request, response) => {
    const {file} = request;

    return response.send();

})

export {categoriesRoutes};