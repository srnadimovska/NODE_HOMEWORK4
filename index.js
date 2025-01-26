const functions = require('./functions');

(async () => {
    try {
        // console.log(functions);
        // DODAVANJE NA STUDENT VO NIZA
        console.log("DODAVANJE STUDENT VO NIZATA");
        const studentsData = await functions.fileRead('students.json');
        const students = JSON.parse(studentsData);
        const studentAdd = {redenbroj: 11, ime:'Stefan', prezime:'Stefanovski', prosek: 8.5, grad:'Struga'};
    
    students.push(studentAdd);
    await functions.fileWrite('students.json' , JSON.stringify(students));

    console.log('Nova niza:', JSON.stringify(students));

// PROMENA NA PODATOK ZA STUDENT

        console.log("PROMENA NA DATA ZA STUDENT VO NIZATA");
        const studenti = await functions.fileRead('students.json');
        const studentiNiza = JSON.parse(studenti);
        console.log('Ova e starata niza od studenti', studentiNiza);

        const noviStudenti = studentiNiza.map(student => {
            if (student.redenbroj == 3) {
                student.ime = 'Monika';
            }
            return student;
        });
        
        await functions.fileWrite('students.json', JSON.stringify(noviStudenti));

        console.log(`Ova e novata niza od studenti ${JSON.stringify(noviStudenti)}`);

//     BRISENJE NA STUDENT OD NIZATA

        console.log('BRISENJE NA STUDENT OD NIZATA');
        const studentii = await functions.fileRead('students.json');
        const staristudenti = JSON.parse(studentii);
        const novistudenti = staristudenti.filter (student => {
            if (student.redenbroj !== 10) {
                return true;
            } return false;    
        });

        await functions.fileWrite('students.json' , JSON.stringify(novistudenti));
        console.log(`Ova e nizata so novi studenti ${JSON.stringify(novistudenti)}`);

    } catch (err) {
        console.log(err);
    }

}) ();


