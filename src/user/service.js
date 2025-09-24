import User from "../database/schema/User.js";


const fetchService = async (request, response) => {
  const user = await User.find();
  return user;
};

const createService = async (body) => {
    const user = await User.create(body);
    return user;
};

const authService = async (body) => {

  if(!body.email){
    return { error: true, statusCode: 400, message: "Dados Faltando" };
  }

 const user = await User.findOne({
      email: body.email,
      password: body.password,
    });

    if(user == null){
      return { error: true, statusCode: 400, message: "Dados inválidos" };
    }

    return {user, message: "Login bem sucedido"}
};

const authSignService = async (body) => {

  if(!body.username || !body.password || !body.picture){
    return { error: true, statusCode: 400, message: "Dados Faltando" };
  }

 const user = await User.findOne({
      username: body.username,
    });

    if(user){
      const userAuth = await User.findOne({
        username: body.username,
        password: body.password,
    });

    if(userAuth == null){
      return { error: true, statusCode: 403, message: "Dados inválidos" };
    }

    return {user, message: "Login bem sucedido"}

    }
    else{
      const user = await User.create(body);
      return {user, message: "Usuário criado com sucesso!", statusCode: 201}
    }
};


export { fetchService, createService, authService, authSignService}