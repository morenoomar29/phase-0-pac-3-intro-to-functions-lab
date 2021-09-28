function shout(string) {
    "hello".toUpperCase();
    return string.toUpperCase();  
}

/*describe('shout(string)', function() {
    it('receives one argument and returns it in all caps', function() {
      expect(shout('hello')).toEqual('HELLO');
    })
  })
*/

function whisper(string) {
    "HELLO!".toLowerCase();
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string);
    console.log(string.toUpperCase());
}
logShout(hello);

function logWhisper(string) {
    console.log(string);
    console.log(string.toLowerCase());
}
logWhisper(HELLO);

function sayHiToGrandma(string) {
         if (string.toLowerCase() === string) {
            return "I can't hear you!";
         }
         if (string.toUpperCase() === string) {
            return "YES INDEED!";
         }
         if (string === `I love you, Grandma.`) {
            return "I love you, too.";
         }
    }

/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.");
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('logShout(string)', function() {
    it('takes a string argument and logs it in all caps using console.log()', function() {
      const spy = expect.spyOn(console, 'log').andCallThrough();
  
      logShout('hello');
  
      expect(spy).toHaveBeenCalledWith('HELLO');
  
      console.log.restore();
    })
  })

*/





















