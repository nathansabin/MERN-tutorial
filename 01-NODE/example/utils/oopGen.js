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
    touchOop(name, data) {
      fs.writeFile(`./output/${name}.js`, data, (err) => {
        if (err) console.log(err);
      });
    }
    async grabCode() {
      try {
        const content = await fs.readFileSync('./oopText.txt', 'utf8');
        return content;
      } catch (err) {
        throw err;
      }
    }
}

const Oop = new oopOop();

module.exports = Oop;
