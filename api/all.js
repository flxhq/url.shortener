const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function handler(request, response) {
  prisma.urlShortener
    .findMany()
    .then((value) => {
      response.status(200).send(value);
    })
    .catch((error) => {
      console.log(error);
    });
}
