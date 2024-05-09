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

  //probat stavit da je ovo <svg xmlns="http://www.w3.org/2000/svg" width="107" height="110" viewBox="0 0 107 110" fill="none"><g clip-path="url(#clip0_281_2514)"><path d="M109.578 28.6242L100.769 29.2628L109.159 19.5617C109.639 19.0067 110.005 18.3625 110.236 17.6661C110.467 16.9696 110.559 16.2344 110.506 15.5025C110.452 14.7707 110.256 14.0564 109.927 13.4005C109.598 12.7447 109.142 12.16 108.587 11.68C108.032 11.2 107.388 10.8341 106.692 10.603C105.995 10.372 105.26 10.2803 104.528 10.3334C103.796 10.3865 103.082 10.5831 102.426 10.9122C101.77 11.2413 101.186 11.6964 100.706 12.2514L92.3162 21.9525L91.6776 13.1436C91.5706 11.6681 90.8819 10.2955 89.7629 9.32776C88.6439 8.36004 87.1863 7.87647 85.7107 7.98344C84.2352 8.09041 82.8626 8.77915 81.8949 9.89816C80.9271 11.0172 80.4436 12.4748 80.5505 13.9503L81.4244 26.0046C75.4017 23.7976 68.8501 23.4751 62.6398 25.0799C56.4295 26.6847 50.8544 30.141 46.6549 34.9895C29.1929 54.8095 18.2955 99.0925 17.0812 104.2C16.546 105.658 16.3848 107.227 16.6121 108.764C16.8395 110.3 17.4481 111.755 18.3826 112.996C19.3171 114.237 20.5475 115.224 21.9615 115.866C23.3755 116.509 24.928 116.788 26.4773 116.676C27.7945 116.578 29.0762 116.202 30.2377 115.574C33.6985 114.195 55.9507 105.162 74.6895 92.8603L74.9298 92.7031C82.5361 87.6914 89.5441 82.1406 94.4578 76.3733C98.6593 71.5141 101.281 65.49 101.972 59.1036C102.664 52.7171 101.394 46.2715 98.3305 40.6251L110.385 39.7513C111.86 39.6443 113.233 38.9555 114.201 37.8365C115.168 36.7175 115.652 35.2599 115.545 33.7844C115.438 32.3089 114.749 30.9363 113.63 29.9685C112.511 29.0008 111.054 28.5172 109.578 28.6242ZM85.9961 69.073L85.9575 69.1178C82.4757 73.2292 77.642 77.2708 72.2225 81.0753L60.6817 71.0946C59.5607 70.1252 58.1006 69.6408 56.6225 69.748C55.1444 69.8551 53.7694 70.5451 52.8 71.666C51.8306 72.787 51.3462 74.2471 51.4533 75.7252C51.5605 77.2033 52.2504 78.5783 53.3714 79.5477L62.4311 87.3826C48.8977 95.4339 34.5139 101.72 28.5744 104.201C31.0335 94.599 39.5356 63.8843 51.5978 46.7256L66.863 59.927C67.9839 60.8965 69.4441 61.3809 70.9222 61.2737C72.4003 61.1665 73.7753 60.4766 74.7447 59.3557C75.7141 58.2347 76.1985 56.7746 76.0913 55.2965C75.9842 53.8184 75.2942 52.4434 74.1733 51.474L59.286 38.5993C63.4113 35.8811 68.3811 34.7479 73.2771 35.4092C78.173 36.0705 82.6641 38.4815 85.9205 42.1967C89.1769 45.912 90.9785 50.6804 90.9924 55.6207C91.0063 60.5611 89.2316 65.3395 85.9961 69.073Z" fill="#5C93C9"/></g><defs><clipPath id="clip0_281_2514"><rect width="119" height="119" fill="white" transform="translate(0 8.60437) rotate(-4.14644)"/></clipPath></defs></svg>

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

  const institution2 = await prisma.institution.create({
    data: {
      name: 'Sportska medicina Diomed',
    },
  });

  const city1 = await prisma.city.create({
    data: {
      name: 'Zagreb',
    },
  });

  const city2 = await prisma.city.create({
    data: {
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

  const examinationCategory1 = await prisma.examination_Category.create({
    data: {
      examinationId: 1,
      categoryId: 3,
    },
  });

  const examinationCategory2 = await prisma.examination_Category.create({
    data: {
      examinationId: 2,
      categoryId: 4,
    },
  });

  const examinationCategory3 = await prisma.examination_Category.create({
    data: {
      examinationId: 3,
      categoryId: 3,
    },
  });

  const institutionCity1 = await prisma.institution_City.create({
    data: {
      institutionId: 1,
      cityId: 1,
    },
  });

  const institutionCity2 = await prisma.institution_City.create({
    data: {
      institutionId: 2,
      cityId: 2,
    },
  });

  const category5 = await prisma.category.upsert({
    where: { name: 'Mozak' },
    update: {},
    create: {
      name: 'Mozak',
      img: '../src/assets/categoryIcons/icon _Cognitive_.png',
    },
  });

  const quiz3 = await prisma.quiz.upsert({
    where: { name: 'Um je bitan' },
    update: {},
    create: {
      name: 'Um je bitan',
      earnedPoints: 15,
      description: 'Um je bitan: Kviz o živčanom sustavu',
      text: 'Središnji živčani sustav, sastavljen od mozga i leđne moždine, ključan je za obradu informacija i upravljanje tjelesnim funkcijama. Mozak, kao centralna instanca, kontrolira pokrete, osjećaje, pamćenje i učenje. Sinapsa, mjesto komunikacije između neurona, omogućuje prijenos signala putem kemijskih ili električnih impulsa. Aksoni su produžeci neurona koji prenose impulse drugim stanicama, dok dendriti primaju signale od drugih neurona. Neuroni, temeljne građevne jedinice živčanog sustava, omogućuju prijenos i obradu informacija te kontrolu tjelesnih funkcija poput pamćenja i percepcije.',
    },
  });

  const quizCategory3 = await prisma.quiz_Category.create({
    data: {
      quizId: 3,
      categoryId: 5,
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
      question:
        'Rasporedite pojmove prema njihovim funkcijama u živčanom sustavu.',
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

  const dailyMessage1 = await prisma.dailyMessage.create({
    data: {
      message: 'Smiji se uvijek, to je najbolji način da pobijediš sve bolesti',
    },
  });

  const dailyMessage2 = await prisma.dailyMessage.create({
    data: {
      message:
        'Zdravlje nije trka, već dugotrajan maraton - napravite pauzu kad vam je potrebno.',
    },
  });

  const dailyMessage3 = await prisma.dailyMessage.create({
    data: {
      message:
        'Dobro zdravlje počinje malim koracima - možda danas probajte neku novu voćku ili povrće',
    },
  });

  const dailyMessage4 = await prisma.dailyMessage.create({
    data: {
      message:
        'Oslobodite stres uz osmijeh - smijeh je odlična vježba za lice i dušu.',
    },
  });

  const dailyMessage5 = await prisma.dailyMessage.create({
    data: {
      message:
        'Ponekad je najbolji lijek za umorni dan dobra knjiga i šalica toplog čaja.',
    },
  });

  const dailyMessage6 = await prisma.dailyMessage.create({
    data: {
      message:
        'Ne zaboravite na svoj san - dobar san je ključan za obnavljanje energije i oporavak tijela.',
    },
  });

  const dailyMessage7 = await prisma.dailyMessage.create({
    data: {
      message:
        'Pustite omiljenu pjesmu i plešite kao da vas nitko ne gleda - pokret je dobar za srce i dušu.',
    },
  });
  const dailyMessage11 = await prisma.dailyMessage.create({
    data: {
      message:
        'Dopustite sebi vrijeme za uživanje u prirodi - svjež zrak i zelenilo mogu čuda učiniti za vaše zdravlje.',
    },
  });

  const dailyMessage8 = await prisma.dailyMessage.create({
    data: {
      message:
        'Neka vaša mantra bude "naprijed, ali polako" - pritisak za brzim rezultatima može biti kontraproduktivan.',
    },
  });

  const dailyMessage9 = await prisma.dailyMessage.create({
    data: {
      message:
        'Zdravlje nije samo o prehrani i vježbanju - njegujte i svoje mentalno zdravlje kroz meditaciju ili jednostavno opuštanje.',
    },
  });

  const dailyMessage10 = await prisma.dailyMessage.create({
    data: {
      message:
        'Zdrav način života je ravnoteža između onoga što morate, onoga što želite i onoga što vas čini sretnim.',
    },
  });

  const reward1 = await prisma.reward.create({
    data: {
      categoryId: 1,
      title: '15% popusta pri sljedećoj kupnji u bio&bio trgovinama',
      description:
        'Odi u sljedeću kupnju bez brige te uživaj u kvalitetnoj i raznovrsnoj prehrani.',
      message:
        'Odi u sljedeću kupnju bez brige, istražujući svježe namirnice i raznolike opcije za zdravu prehranu. Provedi svoje vrijeme u kupovini sa smirenošću, uživajući u odabiru visokokvalitetnih namirnica koje će ti donijeti blagostanje. Iskoristi svoj sljedeći odlazak u kupovinu kao priliku za istraživanje novih recepata i nutritivnih bogatstava za uravnoteženu prehranu',
      points: 200,
      img: '../src/assets/qrcode',
    },
  });

  const reward2 = await prisma.reward.create({
    data: {
      categoryId: 1,
      title: '20% popusta u bio&bio trgovini',
      description:
        'Aktiviraj kod i iskoristi 20% popusta u bilo kojoj bio&bio trgovini.',
      message:
        'Razveseli sebi i svojoj porodici kvalitetnim organskim proizvodima po sniženim cijenama. Osim toga, opusti se uz omiljenu knjigu i šalicu tople čaja. Isprobaj nove recepte i otkrij ukusne i zdrave obroke koje možeš pripremiti kod kuće.',
      points: 250,
      img: '../src/assets/qrcode',
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
