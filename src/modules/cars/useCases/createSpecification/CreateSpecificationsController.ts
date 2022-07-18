import {CreateSpecificationsUseCase} from "./CreateSpecificationsUseCase"
import { Request, Response} from "Express"
import {container} from "tsyringe";


class CreateSpecificationsController{
   

    handle(request: Request, response: Response): Response{
        const {name, description} = request.body;

        const createSpecificationUseCase = container.resolve(CreateSpecificationsUseCase);

        createSpecificationUseCase.execute({name, description});

        return response.status(201).send();

    }

}


export { CreateSpecificationsController }