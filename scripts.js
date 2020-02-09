// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = [];
    this.currentId = 0;
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
  this.contacts.push(contact);
  }

  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }
  
  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

  AddressBook.prototype.findContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
      //if (this.contacts[i]) {     // <-- This line is new!
        if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      //}                          // <-- This line is also new!
    };
    return false;
  }

  AddressBook.prototype.deleteContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
    //  if (this.contacts[i]) {     // <-- This line is new!
        if (this.contacts[i].id == id) {
          delete this.contacts[i];
          return true;
        }
    //  }                          // <-- This line is also new!
    };
    return false;
  }
  


var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
var contact3 = new Contact("Kim", "Nate", "503-555-0299");
var contact4 = new Contact("Meghan", "Smith", "503-555-0399");
addressBook.addContact(contact);
//addressBook.assignId();
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact4);



addressBook.findContact(3);
addressBook.deleteContact(3);


console.log(addressBook.contacts);
