import { fetchService, createService, authService  } from "./service.js";
import { connectToMongo } from "../database/index.js";

const userFetchController = async (request, response) => {

  const user = await fetchService(request, response);

  return response.status(200).send({ working: true, user: user });
};

const userCreateController = async (request, response) => {

  const user = await createService (request.body);

  return response.status(200).send({ working: true, user: user });
   
};

const userAuthController = async (request, response) => {
   const serviceResponse = await authService (request.body);

    if(serviceResponse?.error){
      return response.status(serviceResponse.statusCode).send({ error: true, menssage: serviceResponse.message });
    }
    return response.status(200).send(serviceResponse);
}

export { userFetchController, userCreateController, userAuthController}
