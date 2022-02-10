const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function handler(request, response) {
  const urlId = request.query.urlId;
  prisma.urlShortener
    .findFirst({
      where: {
        urlId: urlId,
      },
    })
    .then((value) => {
      if (value) {
        response.redirect(value.url);
      } else {
        response.redirect("/404");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
