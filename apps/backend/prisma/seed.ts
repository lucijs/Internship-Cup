import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.upsert({
    where: { name: 'Prehrana' },
    update: {},
    create: {
      name: 'Prehrana',
    },
  });
  const quiz = await prisma.quiz.upsert({
    where: { name: 'Vitamini' },
    update: {},
    create: {
      name: 'Vitamini',
      earnedPoints: 80,
      description: 'Vitamini: Ključ za Zdravlje',
      text: 'Vitamini su esencijalni nutrijenti koji su ključni za održavanje zdravlja. Postoje 13 esencijalnih vitamina, podijeljenih u dvije skupine prema topivosti. Vitamini topivi u vodi uključuju vitamin C i B kompleks, dok su vitamini topivi u mastima poput vitamina A, D, E i K. Oni se nalaze u različitim namirnicama te su važni za metabolizam, imunitet i zdravlje kože. Redovita konzumacija raznovrsne prehrane bogate svježim namirnicama osigurava adekvatan unos vitamina za optimalno funkcioniranje tijela.',
    },
  });
  const quizCategory = await prisma.quiz_Category.create({
    data: {
      quizId: 1,
      categoryId: 1,
    },
  });
  const question1 = await prisma.quizQuestion.create({
    data: {
      question: 'Nadopuni tekst',
      possibleAnswers: [
        'Vitamini su esencijalni ',
        ' koje tijelo treba za održavanje zdravlja, poput ',
        'Nutrijenti',
        'Enzimi',
        'Proteini',
        'Vitamin D',
        'Stanica',
        'Minerali',
      ],
      correctAnswer1: ['Nutrijenti'],
      correctAnswer2: ['Vitamin D'],
      type: 'fill in',
      quizId: 1,
    },
  });

  const question2 = await prisma.quizQuestion.create({
    data: {
      question: 'Spoji vitamin i povrće',
      possibleAnswers: [
        'Vitamin A',
        'Vitamin C',
        'Špinat',
        'Brokula',
        'Batat',
        'Paprika',
      ],
      correctAnswer1: ['Brokula', 'Paprika'],
      correctAnswer2: ['Špinat', 'Batat'],
      type: 'match',
      quizId: 1,
    },
  });

  const question3 = await prisma.quizQuestion.create({
    data: {
      question: 'Koji vitamin je važan za očuvanje zdravlja kostiju i zuba?',
      possibleAnswers: ['Vitamin A', 'Vitamin E', 'Vitamin C', 'Vitamin D'],
      correctAnswer1: ['Vitamin D'],
      type: 'multiple choice',
      quizId: 1,
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
