const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allBooks = await contacts.listContacts();
      return console.log(allBooks);

    case "getById":
      const oneBook = await contacts.getContactById(id);
      return console.log(oneBook);

    case "add":
      const newBook = await contacts.addContact(name, email, phone);
      return console.log(newBook);

    case "deleteById":
      const deleteBook = await contacts.removeContact(id);
      return console.log(deleteBook);
  }
};

invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "rsKkOQUi80UsgVPCcLZZW" });
invokeAction({
  action: "add",
  name: "Slava Koshmal",
  email: "Slava98@ukr.net",
  phone: "(096) 795-4422",
});
invokeAction({ action: "deleteById", id: "NTfoE76KMCNCcmzKgmlXI" });
