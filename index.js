const contacts = require("./contacts");
const { program } = require("commander");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const allContacts = await contacts.listContacts();
          return console.table(allContacts);

    case 'get':
          const oneContact = await contacts.getContactById(id);
          return console.log(oneContact);

    case 'add':
        const newContact = await contacts.addContact(name, email, phone);
        return console.log(newContact);

    case 'remove':
          const removeContact = await contacts.removeContact(id);
          return console.log(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}



// const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const argv = program.opts();
invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "add", name: "Liz", email: "fjh@mail.com", phone: "123456" });

// const path = require("path");
// const fs = require("fs/promises");



// (async () => {
//     try {
      
// const contactsPath = path.join('db','contacts.json');
//         // console.log(contactsPath);
//         const readFile = await fs.readFile(contactsPath);
//         // console.log(readFile.toString());
//         const json = JSON.parse(readFile)
//         console.log(json);


//     } catch (err) {
//         console.log(err);
//   }  
// })();