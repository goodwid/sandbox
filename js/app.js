function thing(obj) {
  return {
    then (cb) {
      if (!obj) return {
        catch (cb) {
          if (cb) cb('woops!');
        }
      };
      if (cb) cb(obj);
    }
  };
}

const something = {name: 'foo'};

thing(something)
  .then(r => {
    r.thing = 17;
  })
  .catch(err => console.log(err));

console.log(something);
