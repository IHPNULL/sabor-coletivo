const jwt = require("jsonwebtoken");

const auth = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ mensagem: "Tokén é obrigatório!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const senha = process.env.JWT_SECRET;
    await jwt.verify(token, senha);
    next();
  } catch (err) {
    return response.status(401).json({ mensagem: "Token Inválido!" });
  }
};

module.exports = auth;
