import * as readline from 'readline';
import * as fs from 'fs';


function createItem() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Quel est le nom de l\'élément que vous voulez créer dans le lexique ? ', (itemName: string) => {
    rl.close();
    if (itemName.trim() === '') {
      console.log('Le nom de l\'élément ne peut pas être vide');
      return;
    }

  
    const firstLetter = itemName.trim().charAt(0).toUpperCase();
    const folderPath = `./src/${firstLetter}/`;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const fileName = `${itemName.trim().toLowerCase()}.md`;
    const filePath = `${folderPath}/${fileName}`;
    if(fs.existsSync(filePath)) {
      console.log(`L'élément ${itemName.trim().toLowerCase()} existe déjà dans le dossier "${folderPath}"`);
      return;
    }
    const content = `### ${itemName.trim().charAt(0).toUpperCase() + itemName.trim().slice(1)} \n\n> Description`
    fs.writeFileSync(filePath, content);

    console.log(`L'élément ${itemName.trim().toLowerCase()} a été créé dans le dossier "${folderPath}".\nVous pouvez maintenant commencer à écrire la description de l'élément.`);
  });
}


createItem();
