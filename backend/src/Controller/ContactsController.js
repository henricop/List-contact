const Contact = require('../model/contatos');


module.exports = {
  //searches and shows all contacts
  async index(req, res) {
    const allContact = await Contact.findAll();
    return res.json(allContact);
  },
  // searches and shows one contact through name_contact
  async indexbyOne(req, res) {
    const { name_contact } = req.body;
    const searchContact = await Contact.findOne({
      where: {
        name_contact
      }
    })
    return res.json(searchContact);
  },
  // create a new contact 
  async create(req, res) {
    const { name_contact, email, bairro, rua, number_contact, frase } = req.body;
    const newContact = await Contact.create({
      name_contact,
      email,
      bairro,
      rua,
      number_contact,
      frase
    });
    return res.json(newContact);
  },
  // delete a contact through email
  async delete(req, res) {
    const { email } = req.body;
    await Contact.destroy({
      where: {
        email
      }
    });
    return res.status(204).send("Contact has been deleted");
  },
  // Seaches a contact and make changes 
  async updateList(req, res) {
    const { email } = req.body;
    const updateContact = await Contact.findOne({
      where: {
        email,
      }
    });
    const updateDone = updateContact.update({
      "name_contact": "testUP",
      "email": "testUP",
      "bairro": "dotest",
      "rua": "testada",
      "number_contact": 55,
      "frase": "once away"
    })

    return res.json(updateDone);
  }

}