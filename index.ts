import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  // prisma queries******

  //***** create a new user ******

  // const user = await prisma.user.create({
  //     data: {
  //         name: "Jacob",
  //         email: "jacob@gmail.com",
  //     },
  // });

  // ******get all users ******

//   const users = await prisma.user.findMany({
//     include: {
//       articles: true,
//     },
//   });

  // ******create an article and associate it with a user ******

  // const article = await prisma.article.create({
  //     data: {
  //         title: "How to use Prisma with Typescript",
  //         body: "You can use by sara",
  //         author: {
  //             connect: { id: 3 },
  //         },

  //     }
  // });

  // ******get all articles ******

  const articles = await prisma.article.findMany()

  // *** create a new user and article and associate them ******
  // const user = await prisma.user.create({
  //     data: {
  //         name: "Sara",
  //         email: "sara@gmail.com",
  //         articles: {
  //             create: {
  //                 title: "How to use Prisma with Typescript",
  //                 body: "You can use by Sara",
  //             }
  //         }
  //     }
  // });

  // **** loop through the users and articles ****object
//   users.forEach((user) => {
//       console.log(`User: ${user.name}, Email: ${user.email}`);
//       console.log(`Articles:`);
//       user.articles.forEach((article) => {
//           console.log(`-Title: ${article.title}, -Body: ${article.body}`);
//       });
//       console.log(`\n`);
    //   });
    
    // ******update a data ******
    // const updatedUser = await prisma.user.update({
    //     where: { id: 1 },
    //     data: {
    //         name: "Alice Doe",
    //     }
    // });

    // ******delete a data ******
    // const deletedArticle = await prisma.article.delete({
    //     where: { id: 2 },
    // });


  console.log(articles);
}

// main returns a promise
main()
    .then(async () => {
        // disconnect the prisma client
        await prisma.$disconnect();
    })
    .catch(async (e) => { 
        console.error(e);
        // and disconnect the prisma client
        await prisma.$disconnect();
        process.exit(1);
    } )