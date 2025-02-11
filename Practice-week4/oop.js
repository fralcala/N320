class Book {
  pages = 0;

  constructor(pages = 0) {
    this.page = pages;
  }

  getPageCount() {
    return `This book has ${this.page} pages.`;
  }

  setNewOwner(newOwnerName) {
    this.#owner = newOwnerName;
  }

  getOwner() {
    return `This book belongs to ${this.#owner}`;
  }

  #pullMethodForOragamiCranes() {
    // fancy logic
    return (pages) => {
      return;
    };
  }
}

const myBook = new Book(25);

console.log("My book pages: ", myBook.pages);

console.log("My book getPageCount: ", myBook.getPageCount());

addLineBreaks(2);

console.log("My book owner (directly):", myBook.owner);

class FictionalBook extends Book {
  getFictionalParts() {
    return "The magic!";
  }
}

const myFicBook = new FictionalBook(200);

console.log("My fictional book pages: ", myFicBook.getPageCount());

console.log("My fictional book fun parts: ", myFicBook.getFictionalParts());

addLineBreaks(2);

console.log("polymorphism");

class Notification {
  static supportEmail = "fralcala@iu.edu";

  sendAlert() {
    return `Alert sent through notification`;
  }

  reportBug() {
    return `Reporting a bug to ${Notification.supportEmail}`;
  }
}

class EmailNotification extends Notification {
  sendAlert() {
    return `Alert sent through email notification`;
  }
}

class SMSNotification extends Notification {
  sendAlert() {
    return `Alert sent through sms notification`;
  }
}

console.log("original Bug Report: ", myEmailService.reportBug());

// Even though the email was changed the original one is used since it was set to static
myEmailService.changeSupportEmail("other@email.com");

console.log("New Bug Report", smsService.reportBug());

addLineBreaks(2);

class NonFictionBook extends Book {
  constructor(owner, pages) {
    super(pages);
    super.setNewOwner(owner);
  }

  //   used to change logic of
  setNewOwner(newOwnerName) {
    super.setNewOwner(newOwnerName);
    // other stuff
  }
}
const myNonFicBook = new NonFictionBook("Bob", 475);
