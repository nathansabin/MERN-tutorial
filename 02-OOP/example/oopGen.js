const fs = require('fs');

// will create another oop
class oopOop {
    mkdir() {
        try {
            if (!fs.existsSync('./oop')) {
              fs.mkdirSync('./oop');
            }
          } catch (err) {
            console.error(err);
          }
    } 

    touchOop(file, data) {
      fs.appendFile(file, data, (err) => {
        if (err) {
          return err;
        }
      });
    }

    grabCode() {
      fs.readFile('./oopText.txt', (err, data) => {
        if (err) {
          return err;
        } 
        return data;
      });
    }
}

// Oop = new oopOop();

const testFile = async () => {
  const Oop = new oopOop();

  await Oop.mkdir();
  // const text = Oop.grabCode();
  Oop.touchOop("example.js", "var word = \"hello World!\":");
};

testFile();

// module.exports = Oop;
