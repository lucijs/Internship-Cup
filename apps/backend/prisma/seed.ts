import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const quiz = await prisma.quiz.upsert({
    where: { name: 'Prehrana' },
    update: {},
    create: {
      name: 'Vitamini',
      description: 'Vitamini: Ključ za Zdravlje',
      text: 'Vitamini su esencijalni nutrijenti koji su ključni za održavanje zdravlja. Postoje 13 esencijalnih vitamina, podijeljenih u dvije skupine prema topivosti. Vitamini topivi u vodi uključuju vitamin C i B kompleks, dok su vitamini topivi u mastima poput vitamina A, D, E i K. Oni se nalaze u različitim namirnicama te su važni za metabolizam, imunitet i zdravlje kože. Redovita konzumacija raznovrsne prehrane bogate svježim namirnicama osigurava adekvatan unos vitamina za optimalno funkcioniranje tijela.',
    },
  });
  const category = await prisma.category.upsert({
    where: { name: 'Prehrana' },
    update: {},
    create: {
      name: 'Prehrana',
    },
  });

  const quizCategory = await prisma.quiz_Category.create({
    data: {
      quizId: 1,
      categoryId: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
