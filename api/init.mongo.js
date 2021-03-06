// Initialisation of db run this command in api folder: node init.mongo.js

// Atlas URL - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/task_tracker?retryWrites=true';
const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://mampionona:daddy4806@cluster0.tksr3.mongodb.net/task_tracker?retryWrites=true';

async function resetMongo() {
  console.log('\n--- initialising Mongodb --- \n');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDb');
    // connect to db
    const db = client.db();
    // asign documents to variables
    const collectionFiches = db.collection('fiches');
    const collectionCounter = db.collection('counter');
    const collectionTypeTaches = db.collection('typeTache');
    const collectionStatCom = db.collection('statCom');
    const collectionStatIvpn = db.collection('statIvpn');
    const collectionTaskCase = db.collection('taskCase');
    const collectionUsers = db.collection('users');

    const initialCounter = [
      {
        _id: 'fiches',
        current: 7,
      },
      {
        _id: 'typeTache',
        current: 49,
      },
      {
        _id: 'statCom',
        current: 10,
      },
      {
        _id: 'statIvpn',
        current: 5,
      },
      {
        _id: 'taskCase',
        current: 3,
      },
      {
        _id: 'users',
        current: 0,
      },
    ];
    const initialFiches = [
      {
        user: {
          name: 'Mampionona RAMAHAZOMANANA',
          given_name: 'Mampionona',
          family_name: 'RAMAHAZOMANANA',
          nickname: 'ramamps33',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ramamps33@gmail.com',
        },
        id: 1,
        typeTrav: 'Contenu',
        numFiche: '15454',
        statuCom: 'Abandon',
        statuIvpn: 'I',
        cat: 'securit?? des locaux et des machines',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=174711&w=1232305TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Normal',
        submiteState: 'isSubmited',
        nbBefor: 5,
        nbAft: 50,
        startDate: new Date('2019-01-15'),
        validDate: new Date('2019-01-16'),
        elapstedTime: 35645,
        productivity: 100,
        processing: 'isOff',
        comment: 'Faire valider par Yann',
        lastUpdate: new Date('2021-03-18'),
      },

      {
        user: {
          name: 'Mampionona RAMAHAZOMANANA',
          given_name: 'Mampionona',
          family_name: 'RAMAHAZOMANANA',
          nickname: 'ramamps33',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ramamps33@gmail.com',
        },
        id: 2,
        typeTrav: 'MAJPrio',
        numFiche: '4545',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=174711&w=1232305TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Paf',
        submiteState: 'isSubmited',
        nbBefor: 5,
        nbAft: 50,
        cat: 'Conditionnement et embalage',
        startDate: new Date('2003-04-30'),
        validDate: new Date('2003-05-01'),
        elapstedTime: 87551,
        productivity: 102,
        processing: 'isOff',
        comment: 'Ne pas ajouter gamme out',
        lastUpdate: new Date('2021-12-17'),
      },
      {
        user: {
          name: 'Mampionona RAMAHAZOMANANA',
          given_name: 'Mampionona',
          family_name: 'RAMAHAZOMANANA',
          nickname: 'ramamps33',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ramamps33@gmail.com',
        },
        id: 3,
        typeTrav: 'AUTOVALIDCREAPrio',
        numFiche: '188595',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=188595&w=1636487TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Sby',
        submiteState: 'isUnsubmited',
        nbBefor: 0,
        nbAft: 22,
        cat: "production et distribution d'??nergie",
        startDate: new Date('2021-01-15'),
        validDate: new Date('2019-01-17'),
        elapstedTime: 9028800,
        productivity: 103,
        processing: 'isPlay',
        comment: 'Voir avec Jhone',
        lastUpdate: new Date('2021-12-18'),
      },
      {
        user: {
          name: 'Mampionona RAMAHAZOMANANA',
          given_name: 'Mampionona',
          family_name: 'RAMAHAZOMANANA',
          nickname: 'ramamps33',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ramamps33@gmail.com',
        },
        id: 4,
        typeTrav: 'AUTOVALIDCREAPrio',
        numFiche: '126963',
        statuCom: 'D??grad??',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/restricted/FicheSociete.php?&s=126963&w=1277939TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Normal',
        submiteState: 'isUnsubmited',
        nbBefor: 11,
        nbAft: 11,
        cat: 'Mesure et essaye',
        startDate: new Date('2021-07-20'),
        validDate: new Date('2021-07-30'),
        elapstedTime: 977541,
        productivity: 100,
        processing: 'isOff',
        comment: 'Cette fiche est sous consigne avec Jhon',
        lastUpdate: new Date('2021-12-18'),
      },
      {
        user: {
          name: 'Mampionona RAMAHAZOMANANA',
          given_name: 'Mampionona',
          family_name: 'RAMAHAZOMANANA',
          nickname: 'ramamps33',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ramamps33@gmail.com',
        },
        id: 5,
        typeTrav: 'Cr??aPrio',
        numFiche: '239657',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=239657&w=1789817fs!RiGhtOwtSrCing&droit=stag&user=Mampionona',
        state: 'Normal',
        submiteState: 'isUnsubmited',
        nbBefor: 11,
        nbAft: 11,
        cat: 'Machine outil',
        startDate: new Date('2021-12-15'),
        validDate: new Date('2021-12-17'),
        elapstedTime: 3600,
        comment: 'Cette fiche est sous consigne',
        productivity: 98,
        processing: 'isOff',
      },
      {
        user: {
          name: 'Mino Aur??lie RAVOLARIMANASOA',
          given_name: 'Mino Aur??lie',
          family_name: 'RAVOLARIMANASOA',
          nickname: 'ravolami',
          picture:
            'https://lh3.googleusercontent.com/a-/AOh14GhNIqDekuddjj1nn6MOLV2bx9TzVTbalcolSsL6wg=s96-c',
          sub: 'google-oauth2|100620047698438001642',
          email: 'ravolami@gmail.com',
        },
        id: 6,
        typeTrav: 'MAJPrio',
        numFiche: '14922',
        statuCom: 'Abonn??',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=14922&w=98456ERfs!RiGhtOwtSrCing&droit=stag&user=mampionona',
        state: 'Normal',
        submiteState: 'isUnsubmited',
        nbBefor: 178,
        nbAft: 164,
        cat: 'Machine agro alimentaire',
        startDate: new Date('2000-03-03'),
        validDate: new Date('2000-03-04'),
        elapstedTime: 32545,
        productivity: 100,
        comment: 'test ...',
        processing: 'isPlay',
        lastUpdate: new Date('Mon Dec 20 2021 13:05:33 GMT+0300'),
      },
    ];
    const initTypeTaches = [
      {
        id: 1,
        name: 'Contenu',
        objectif: 16,
      },
      {
        id: 2,
        name: 'Contenu (Zapp??)',
        objectif: 80,
      },
      {
        id: 3,
        name: 'Contenu +20',
        objectif: 15.5,
      },
      {
        id: 4,
        name: 'ContenuFullCr??a',
        objectif: 15,
      },
      {
        id: 5,
        name: 'ContenuFullCr??aPrio',
        objectif: 15,
      },
      {
        id: 6,
        name: 'ContenuFullMAJ',
        objectif: 15.5,
      },
      {
        id: 7,
        name: 'ContenuFullMAJPrio',
        objectif: 15.5,
      },
      {
        id: 8,
        name: 'Cr??a',
        objectif: 6.5,
      },
      {
        id: 9,
        name: 'Cr??aLight',
        objectif: 8.5,
      },
      {
        id: 10,
        name: 'Cr??aLightPrio',
        objectif: 8.5,
      },
      {
        id: 11,
        name: 'Cr??aPrio',
        objectif: 6.5,
      },
      {
        id: 12,
        name: 'MAJ',
        objectif: 8,
      },
      {
        id: 13,
        name: 'MAJLight',
        objectif: 10,
      },
      {
        name: 'MAJLightPrio',
        objectif: 10,
        id: 14,
      },
      {
        name: 'MAJPrio',
        objectif: 8,
        id: 15,
      },
      {
        name: 'MAJFullPrio',
        objectif: 6.5,
        id: 16,
      },
      {
        name: 'MAJFull',
        objectif: 6.5,
        id: 17,
      },
      {
        name: 'MAJSPEC',
        objectif: 10,
        id: 18,
      },
      {
        name: 'PDF',
        objectif: 20,
        id: 19,
      },
      {
        name: 'MAJ BOOST',
        objectif: 80,
        id: 20,
      },
      {
        name: 'Jugement',
        objectif: 50,
        id: 21,
      },
      {
        name: 'REASSOPROD',
        objectif: 60,
        id: 22,
      },
      {
        name: 'AUTOVALIDCREA',
        objectif: 6.5,
        id: 23,
      },
      {
        name: 'AUTOVALIDMAJ',
        objectif: 8,
        id: 24,
      },
      {
        name: 'RFQ',
        objectif: 10,
        id: 25,
      },
      {
        name: 'MAJ Prix',
        objectif: 15,
        id: 26,
      },
      {
        name: 'Projet Prix',
        objectif: 12,
        id: 27,
      },
      {
        name: 'VALIDCLIENT',
        objectif: 2,
        id: 28,
      },
      {
        name: 'VALIDOUT',
        objectif: 5,
        id: 29,
      },
      {
        name: 'Matching Grille Tarifaire',
        objectif: 10,
        id: 30,
      },
      {
        name: 'Matching PDF',
        objectif: 5,
        id: 31,
      },
      {
        name: 'CREADemo',
        objectif: 60,
        id: 32,
      },
      {
        id: 33,
        name: 'MAJT',
        objectif: 5,
      },
      {
        id: 34,
        name: 'MAJNew',
        objectif: 3,
      },
      {
        id: 35,
        name: 'AUTOVALIDCREADemo',
        objectif: 60,
      },
      {
        id: 36,
        name: 'AUTOVALIDCREADemoLIGHT',
        objectif: 65,
      },
      {
        id: 37,
        name: 'AUTOVALIDCREADemoFULL',
        objectif: 65,
      },
      {
        id: 38,
        name: 'AUTOVALIDMAJT',
        objectif: 5,
      },
      {
        id: 39,
        name: 'AUTOVALIDMAJTLIGHT',
        objectif: 10,
      },
      {
        id: 40,
        name: 'AUTOVALIDMAJTFULL',
        objectif: 15,
      },
      {
        id: 41,
        name: 'AUTOVALIDMAJNew',
        objectif: 3,
      },
      {
        id: 42,
        name: 'AUTOVALIDCREAPrio',
        objectif: 6.5,
      },
      {
        id: 43,
        name: 'AUTOVALIDCREALIGHTPrio',
        objectif: 8.5,
      },
      {
        id: 44,
        name: 'AUTOVALIDCREAFULLPrio',
        objectif: 15,
      },
      {
        id: 45,
        name: 'AUTOVALIDMAJPrio',
        objectif: 8,
      },
      {
        id: 46,
        name: 'AUTOVALIDMAJLIGHTPrio',
        objectif: 10,
      },
      {
        id: 47,
        name: 'AUTOVALIDMAJFULLPrio',
        objectif: 15,
      },
      {
        id: 48,
        name: 'Empty Type',
        objectif: 0,
      },
    ];
    const initialStatCom = [
      {
        id: 1,
        name: '---',
      },
      {
        id: 2,
        name: 'Abondon',
      },
      {
        id: 3,
        name: 'Abonn??',
      },
      {
        id: 4,
        name: 'D??grad??',
      },
      {
        id: 5,
        name: 'D??grad?? Definitif',
      },
      {
        id: 6,
        name: 'Essai',
      },
      {
        id: 7,
        name: 'EssaiNouveau',
      },
      {
        id: 8,
        name: 'Essai Payant',
      },
      {
        id: 9,
        name: 'Retir??',
      },
    ];

    const initialStatIvpn = [
      { id: 1, name: 'I' },
      { id: 2, name: 'V' },
      { id: 3, name: 'P' },
      { id: 4, name: 'N' },
    ];

    const initialTaskCase = [
      { id: 1, state: 'Normal' },
      { id: 2, state: 'Sby' },
      { id: 3, state: 'Paf' },
    ];

    // Delete and re insert new collections
    await collectionFiches.deleteMany({});
    await collectionFiches.insertMany(initialFiches);

    await collectionCounter.deleteMany({});
    await collectionCounter.insertMany(initialCounter);

    await collectionTypeTaches.deleteMany({});
    await collectionTypeTaches.insertMany(initTypeTaches);

    await collectionStatCom.deleteMany({});
    await collectionStatCom.insertMany(initialStatCom);

    await collectionStatIvpn.deleteMany({});
    await collectionStatIvpn.insertMany(initialStatIvpn);

    await collectionTaskCase.deleteMany({});
    await collectionTaskCase.insertMany(initialTaskCase);

    const resultFiches = await collectionFiches.find({}).toArray();
    const resultCounter = await collectionCounter.find({}).toArray();
    const resultTypeTaches = await collectionTypeTaches.find({}).toArray();
    const resultStatCom = await collectionStatCom.find({}).toArray();
    const resultStatIvpn = await collectionStatIvpn.find({}).toArray();
    const resultTaskCase = await collectionTaskCase.find({}).toArray();
    console.log(
      'Result of insert: \n',
      resultFiches,
      '----- \n ',
      resultCounter,
      '----- \n',
      resultTypeTaches,
      '----- \n',
      resultStatCom,
      '----- \n',
      resultStatIvpn,
      '----- \n',
      resultTaskCase
    );
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

resetMongo();
