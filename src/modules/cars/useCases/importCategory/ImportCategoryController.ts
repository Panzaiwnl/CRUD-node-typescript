import{Request, Response} from "Express";

import {ImportCategoryUseCase} from "./ImportCategoryUseCase"

class ImportCategoryController{

    constructor(private importCategoryUsecase: ImportCategoryUseCase){

    }

    handle(request:Request, response:Response): Response{
        const {file} = request;

        this.importCategoryUsecase.execute(file);

        return response.send();

    }

}

export {ImportCategoryController}