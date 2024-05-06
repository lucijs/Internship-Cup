import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.upsert({
    where: { name: 'Prehrana' },
    update: {},
    create: {
      name: 'Prehrana',
      img: '../src/assets/categoryIcons/ph_carrot-bold.png',
    },
  });

  const quiz1 = await prisma.quiz.upsert({
    where: { name: 'Vitamini' },
    update: {},
    create: {
      name: 'Vitamini',
      earnedPoints: 10,
      description: 'Vitamini: Ključ za Zdravlje',
      text: 'Vitamini su esencijalni nutrijenti koji su ključni za održavanje zdravlja. Postoje 13 esencijalnih vitamina, podijeljenih u dvije skupine prema topivosti. Vitamini topivi u vodi uključuju vitamin C i B kompleks, dok su vitamini topivi u mastima poput vitamina A, D, E i K. Oni se nalaze u različitim namirnicama te su važni za metabolizam, imunitet i zdravlje kože. Redovita konzumacija raznovrsne prehrane bogate svježim namirnicama osigurava adekvatan unos vitamina za optimalno funkcioniranje tijela.',
    },
  });

  const quizCategory1 = await prisma.quiz_Category.create({
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

  const category2 = await prisma.category.upsert({
    where: { name: 'Prva pomoć' },
    update: {},
    create: {
      name: 'Prva pomoć',
      img: '../src/assets/categoryIcons/first-aid 1.png',
    },
  });

  const quiz2 = await prisma.quiz.upsert({
    where: { name: 'Oživljavanje' },
    update: {},
    create: {
      name: 'Oživljavanje',
      earnedPoints: 15,
      description: 'Oživljavanje: Vraćanje života',
      text: 'Oživljavanje je ključni postupak prve pomoći koji se primjenjuje u slučajevima zastoja srca ili prestanka disanja. Osnovni cilj oživljavanja je održavanje dotoka kisika u tijelo i cirkulacije krvi dok ne stigne stručna medicinska pomoć. Kod odraslih osoba, koristi se metoda pritisaka na prsa i umjetnog disanja. Prvo provjerite svijest i disanje. Ako osoba ne diše normalno, odmah započnite s pritiscima na prsa. Pritiske na prsa treba izvoditi brzinom od 100-120 puta u minuti, stiskajući prsa oko 5-6 centimetara duboko. Nakon 30 pritisaka, slijedi davanje dva udisaja umjetnog disanja. Ponavljajte ove korake dok ne stigne hitna pomoć ili dok ne osjetite puls. Kod djece i beba, postupak oživljavanja se malo razlikuje. Za bebe (do 1 godine starosti), koristi se metoda samo pritiskanja prsa bez umjetnog disanja. Kod djece, pritisak na prsa se izvodi s manjom snagom nego kod odraslih, a umjetno disanje izvodi se laganim puhanjem u nos i usta. Brza reakcija ključna je u ovim situacijama!',
    },
  });

  const quizCategory2 = await prisma.quiz_Category.create({
    data: {
      quizId: 2,
      categoryId: 2,
    },
  });
  const question4 = await prisma.quizQuestion.create({
    data: {
      question: 'Nadopuni tekst',
      possibleAnswers: [
        'Za bebe se koristi pritiskanje prsa bez ',
        ' dok se kod odraslih koristi kombinacija oboje.',
        'umjetnog disanja',
        'ispuhivanja zraka',
        'pritiskanja prsa',
      ],
      correctAnswer1: ['umjetnog disanja'],
      type: 'fill in one',
      quizId: 2,
    },
  });

  const question5 = await prisma.quizQuestion.create({
    data: {
      question: 'Namjesti klizač',
      possibleAnswers: [
        'Koliko puta treba izvoditi pritiske na prsa pri oživljavanju odraslih osoba, a koliko pri oživljavanju djece prije nego što slijedi davanje umjetnog disanja?',
        'Pri oživljavanju odraslih potrebno je ',
        'setova pritiska',
        '0',
        '100',
        '5',
        'Pri oživljavanju djece potrebno je ',
        'setova pritiska',
        '0',
        '100',
        '5',
      ],
      correctAnswer1: ['30'],
      correctAnswer2: ['15'],
      type: 'slider',
      quizId: 2,
    },
  });

  const question6 = await prisma.quizQuestion.create({
    data: {
      question: 'ABCD metoda oživljavanja uključuje:',
      possibleAnswers: ['Cijepljenje', 'Cirkulaciju', 'Alergije', 'Cviljenje'],
      correctAnswer1: ['Cirkulaciju'],
      type: 'multiple choice',
      quizId: 2,
    },
  });

  const institution1 = await prisma.institution.create({
    data: {
      name: 'Specijalna bolnica Agram',
    },
  });

  const city1 = await prisma.city.create({
    data: {
      name: 'Zagreb',
    },
  });

  const examination1 = await prisma.examination.create({
    data: {
      name: 'Besplatan pregled oralnog zdravlja',
      institutionId: 1,
      price: 0,
      discount: 0,
      description: 'Detaljni pregled usne šupljine',
      image: '/',
    },
  });

  const category3 = await prisma.category.upsert({
    where: { name: 'Stomatologija' },
    update: {},
    create: {
      name: 'Stomatologija',
      img: '/',
    },
  });

  const examinationCategory1 = await prisma.examination_Category.create({
    data: {
      examinationId: 1,
      categoryId: 3,
    },
  });

  const institutionCity1 = await prisma.institution_City.create({
    data: {
      institutionId: 1,
      cityId: 1,
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
