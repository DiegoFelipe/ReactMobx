const target = {
  message1: "Message one here",
  message2: "Message two here",
};

const handler = {
  set: function (obj: typeof target, prop: keyof typeof target, value: string) {
    console.log(prop, " Has changed");
    obj[prop] = value;
    return true;
  },
  get: function (obj: typeof target, prop: keyof typeof target) {
    return obj[prop];
  },
};

const proxy = new Proxy(target, handler);
proxy.message2 = "adsasdas";
