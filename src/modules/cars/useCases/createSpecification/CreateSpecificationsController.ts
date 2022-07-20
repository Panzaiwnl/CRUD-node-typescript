import {CreateSpecificationsUseCase} from "./CreateSpecificationsUseCase"
import { Request, Response} from "Express"
import {container} from "tsyringe";


class CreateSpecificationsController{
   

  async  handle(request: Request, response: Response): Promise<Response>{
        const {name, description} = request.body;

        const createSpecificationUseCase = container.resolve(CreateSpecificationsUseCase);

        await createSpecificationUseCase.execute({name, description});

        return response.status(201).send();

    }

}


export { CreateSpecificationsController }