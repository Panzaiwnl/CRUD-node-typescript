import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ImportCategoryUseCase{
     
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}

    async  execute(file: Express.Multer.File): Promise<void>{
        const stream = fs.createReadStream(file.path);

        const parseFile =  csvParse();

      await   stream.pipe(parseFile);

    }

}

export{ImportCategoryUseCase }