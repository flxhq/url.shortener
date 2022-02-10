const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function handler(request, response) {
  const { body } = request;

  if (body.urlId == undefined || body.urlId == "") {
    prisma.urlShortener
      .create({
        data: {
          url: body.url,
        },
      })
      .then((value) => {
        response
          .status(200)
          .json({ urlId: `${value.urlId}`, url: `${value.url}` });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    prisma.urlShortener
      .upsert({
        where: {
          urlId: body.urlId,
        },
        update: {
          url: body.url,
        },
        create: {
          url: body.url,
          urlId: body.urlId,
        },
      })
      .then((value) => {
        response
          .status(200)
          .json({ urlId: `${value.urlId}`, url: `${value.url}` });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
