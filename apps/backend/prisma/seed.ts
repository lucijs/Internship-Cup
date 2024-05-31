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

  const quizCategory1 = await prisma.quiz_Category.upsert({
    where: {
      categoryId_quizId: {
        categoryId: 1,
        quizId: 1,
      },
    },
    update: {},
    create: {
      categoryId: 1,
      quizId: 1,
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
      correctAnswer1: ['Minerali'],
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

  const quizCategory2 = await prisma.quiz_Category.upsert({
    where: {
      categoryId_quizId: {
        categoryId: 2,
        quizId: 2,
      },
    },
    update: {},
    create: {
      categoryId: 2,
      quizId: 2,
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

  const institution1 = await prisma.institution.upsert({
    where: { name: 'Specijalna bolnica Agram' },
    update: {},
    create: {
      name: 'Specijalna bolnica Agram',
    },
  });

  const institution2 = await prisma.institution.upsert({
    where: { name: 'Sportska medicina Diomed' },
    update: {},
    create: {
      name: 'Sportska medicina Diomed',
    },
  });

  const city1 = await prisma.city.upsert({
    where: { name: 'Zagreb' },
    update: {},
    create: {
      name: 'Zagreb',
    },
  });

  const city2 = await prisma.city.upsert({
    where: { name: 'Split' },
    update: {},
    create: {
      name: 'Split',
    },
  });

  const examination1 = await prisma.examination.create({
    data: {
      name: 'Besplatan pregled oralnog zdravlja',
      institutionId: 1,
      time: new Date('2024-06-01T18:00:00'),
      price: 0,
      discount: 0,
      description: 'Detaljni pregled usne šupljine',
      image: '/',
    },
  });

  const examination2 = await prisma.examination.create({
    data: {
      name: 'Besplatan oftamološki pregled',
      institutionId: 2,
      time: new Date('2024-06-01T18:00:00'),
      price: 0,
      discount: 0,
      description:
        'Ako ste primijetili da ne možete više lagano kao nekad umetnuti konac u iglu ili se naprežete čitajući knjigu, vrijeme je za posjet oftalmologu. Možda su vam potrebne naočale za čitanje, a oftalmološki pregled koristan je i ako nemate problema s vidom jer se njime mogu otkriti bolesti očiju koje ne moraju uvijek davati simptome, poput katarakte i glaukoma.',
      image: '/',
    },
  });

  const examination3 = await prisma.examination.create({
    data: {
      name: 'Besplatni sistematski pregled',
      institutionId: 1,
      time: new Date('2024-06-01T18:00:00'),
      price: 0,
      discount: 0,
      description:
        'Sistematski pregled je prevencija, a prevencija jamči dobro zdravlje i u godinama kad se zbog njega počinjemo brinuti. Možete ga ugovoriti kupnjom odgovarajuće police UNIQA dodatnog zdravstvenog osiguranja. Uz sistematski pregled, polica dodatnog zdravstvenog omogućuje vam korištenje zdravstvenih usluga koje su vam potrebne i medicinski indicirane, u terminu i u ustanovi po vašem izboru. Paket s odgovarajućim pokrićima odabirete sami.',
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

  const category4 = await prisma.category.upsert({
    where: { name: 'Oftamologija' },
    update: {},
    create: {
      name: 'Oftamologija',
      img: '../src/assets/categoryIcons/first-aid 1.png',
    },
  });

  const examinationCategory1 = await prisma.examination_Category.upsert({
    where: {
      categoryId_examinationId: {
        categoryId: 3,
        examinationId: 1,
      },
    },
    update: {},
    create: {
      categoryId: 3,
      examinationId: 1,
    },
  });

  const examinationCategory2 = await prisma.examination_Category.upsert({
    where: {
      categoryId_examinationId: {
        categoryId: 4,
        examinationId: 2,
      },
    },
    update: {},
    create: {
      categoryId: 4,
      examinationId: 2,
    },
  });

  const examinationCategory3 = await prisma.examination_Category.upsert({
    where: {
      categoryId_examinationId: {
        categoryId: 3,
        examinationId: 3,
      },
    },
    update: {},
    create: {
      categoryId: 3,
      examinationId: 3,
    },
  });

  const institutionCity1 = await prisma.institution_City.upsert({
    where: {
      cityId_institutionId: {
        cityId: 1,
        institutionId: 1,
      },
    },
    update: {},
    create: {
      institutionId: 1,
      cityId: 1,
    },
  });

  const institutionCity2 = await prisma.institution_City.upsert({
    where: {
      cityId_institutionId: {
        cityId: 2,
        institutionId: 2,
      },
    },
    update: {},
    create: {
      institutionId: 2,
      cityId: 2,
    },
  });

  const category5 = await prisma.category.upsert({
    where: { name: 'Mozak' },
    update: {},
    create: {
      name: 'Mozak',
      img: '../src/assets/categoryIcons/brain.png',
    },
  });

  const quiz3 = await prisma.quiz.upsert({
    where: { name: 'Um je bitan' },
    update: {},
    create: {
      name: 'Um je bitan',
      earnedPoints: 15,
      description: 'Um je bitan: Živčanom sustavu',
      text: 'Središnji živčani sustav, sastavljen od mozga i leđne moždine, ključan je za obradu informacija i upravljanje tjelesnim funkcijama. Mozak, kao centralna instanca, kontrolira pokrete, osjećaje, pamćenje i učenje. Sinapsa, mjesto komunikacije između neurona, omogućuje prijenos signala putem kemijskih ili električnih impulsa. Aksoni su produžeci neurona koji prenose impulse drugim stanicama, dok dendriti primaju signale od drugih neurona. Neuroni, temeljne građevne jedinice živčanog sustava, omogućuju prijenos i obradu informacija te kontrolu tjelesnih funkcija poput pamćenja i percepcije.',
    },
  });

  const quizCategory3 = await prisma.quiz_Category.upsert({
    where: {
      categoryId_quizId: {
        categoryId: 3,
        quizId: 3,
      },
    },
    update: {},
    create: {
      categoryId: 3,
      quizId: 3,
    },
  });

  const question7 = await prisma.quizQuestion.create({
    data: {
      question:
        'Koji od sljedećih organa nije dio središnjeg živčanog sustava?',
      possibleAnswers: ['Kralježnični živci', 'Leđna moždina', 'Srce', 'Mozak'],
      correctAnswer1: ['Srce'],
      type: 'multiple choice',
      quizId: 3,
    },
  });

  const question8 = await prisma.quizQuestion.create({
    data: {
      question: 'Nadopuni tekst',
      possibleAnswers: [
        'Kada se poticaj prenosi s jednog neurona na drugi, to se događa na mjestu koje se naziva ',
        '',
        'sinapsa',
        'akson',
        'neuron',
      ],
      correctAnswer1: ['sinapsa'],
      type: 'fill in one',
      quizId: 3,
    },
  });

  const question9 = await prisma.quizQuestion.create({
    data: {
      question: 'Spoji pojam i njegovu funkciju',
      possibleAnswers: [
        'Prima signal',
        'Prenosi signal',
        'Dendriti',
        'Aksoni',
        'Neuroni',
        'Sinapsa',
      ],
      correctAnswer1: ['Aksoni', 'Dendriti'],
      correctAnswer2: ['Neuroni', 'Sinapsa'],
      type: 'match',
      quizId: 3,
    },
  });

  const dailyMessage1 = await prisma.dailyMessage.upsert({
    where: {
      message: 'Smiji se uvijek, to je najbolji način da pobijediš sve bolesti',
    },
    update: {},
    create: {
      message: 'Smiji se uvijek, to je najbolji način da pobijediš sve bolesti',
    },
  });

  const dailyMessage2 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Zdravlje nije trka, već dugotrajan maraton - napravite pauzu kad vam je potrebno.',
    },
    update: {},
    create: {
      message:
        'Zdravlje nije trka, već dugotrajan maraton - napravite pauzu kad vam je potrebno.',
    },
  });

  const dailyMessage3 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Dobro zdravlje počinje malim koracima - probajte neku novu voćku ili povrće',
    },
    update: {},
    create: {
      message:
        'Dobro zdravlje počinje malim koracima - probajte neku novu voćku ili povrće',
    },
  });

  const dailyMessage4 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Oslobodite stres uz osmijeh - smijeh je odlična vježba za lice i dušu.',
    },
    update: {},
    create: {
      message:
        'Oslobodite stres uz osmijeh - smijeh je odlična vježba za lice i dušu.',
    },
  });

  const dailyMessage5 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Ponekad je najbolji lijek za umoran dan dobra knjiga i šalica toplog čaja.',
    },
    update: {},
    create: {
      message:
        'Ponekad je najbolji lijek za umoran dan dobra knjiga i šalica toplog čaja.',
    },
  });

  const dailyMessage6 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Ne zaboravite na svoj san - san je ključan za obnavljanje energije i oporavak tijela.',
    },
    update: {},
    create: {
      message:
        'Ne zaboravite na svoj san - san je ključan za obnavljanje energije i oporavak tijela.',
    },
  });

  const dailyMessage7 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Pustite omiljenu pjesmu i plešite kao da vas nitko ne gleda - dobaro za srce i dušu.',
    },
    update: {},
    create: {
      message:
        'Pustite omiljenu pjesmu i plešite kao da vas nitko ne gleda - dobaro za srce i dušu.',
    },
  });

  const dailyMessage11 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Pronađite vrijeme za uživanje u prirodi - svjež zrak i zelenilo čine čuda za zdravlje.',
    },
    update: {},
    create: {
      message:
        'Pronađite vrijeme za uživanje u prirodi - svjež zrak i zelenilo čine čuda za zdravlje.',
    },
  });

  const dailyMessage8 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Neka vaša mantra bude "naprijed, ali polako" - očekivanje brzih rezultata je kontraproduktivno.',
    },
    update: {},
    create: {
      message:
        'Neka vaša mantra bude "naprijed, ali polako" - očekivanje brzih rezultata je kontraproduktivno.',
    },
  });

  const dailyMessage9 = await prisma.dailyMessage.upsert({
    where: {
      message:
        'Zdravlje nije samo o prehrani i vježbanju - njegujte i svoje mentalno zdravlje.',
    },
    update: {},
    create: {
      message:
        'Zdravlje nije samo o prehrani i vježbanju - njegujte i svoje mentalno zdravlje.',
    },
  });

  const reward1 = await prisma.reward.upsert({
    where: { title: '15% popusta pri sljedećoj kupnji u bio&bio trgovinama' },
    update: {},
    create: {
      title: '15% popusta pri sljedećoj kupnji u bio&bio trgovinama',
      description:
        'Odi u sljedeću kupnju bez brige te uživaj u kvalitetnoj i raznovrsnoj prehrani.',
      message:
        'Odi u sljedeću kupnju bez brige, istražujući svježe namirnice i raznolike opcije za zdravu prehranu. Provedi svoje vrijeme u kupovini sa smirenošću, uživajući u odabiru visokokvalitetnih namirnica koje će ti donijeti blagostanje. Iskoristi svoj sljedeći odlazak u kupovinu kao priliku za istraživanje novih recepata i nutritivnih bogatstava za uravnoteženu prehranu',
      points: 200,
      img: '../src/assets/qrcode',
      category: {
        connect: { categoryId: 1 },
      },
    },
  });

  const reward2 = await prisma.reward.upsert({
    where: { title: '20% popusta u bio&bio trgovini' },
    update: {},
    create: {
      title: '20% popusta u bio&bio trgovini',
      description:
        'Aktiviraj kod i iskoristi 20% popusta u bilo kojoj bio&bio trgovini.',
      message:
        'Razveseli sebi i svojoj porodici kvalitetnim organskim proizvodima po sniženim cijenama. Osim toga, opusti se uz omiljenu knjigu i šalicu tople čaja. Isprobaj nove recepte i otkrij ukusne i zdrave obroke koje možeš pripremiti kod kuće.',
      points: 250,
      img: '../src/assets/qrcode',
      category: {
        connect: { categoryId: 1 },
      },
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
