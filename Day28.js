// Create a proxy object that intercepts and logs all property access.
// Solution Approach:
// Use the Proxy object to create a wrapper around another object.
const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler3 = {
    get(target, prop, receiver) {
      if (prop === "message2") {
        return "world";
      }
      return Reflect.get(...arguments);
    },
  };
  
  const proxy3 = new Proxy(target, handler3);
  
  console.log(proxy3.message1); // hello
  console.log(proxy3.message2); // world  