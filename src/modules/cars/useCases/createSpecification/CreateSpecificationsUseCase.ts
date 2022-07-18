import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

import {inject, injectable } from "tsyringe";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationsUseCase {

    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository){};    
    
    
    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error(`Specification ${name} already exists`);
        }



        this.specificationsRepository.create({
            name,
            description,
        })


    }

     
};


export { CreateSpecificationsUseCase };