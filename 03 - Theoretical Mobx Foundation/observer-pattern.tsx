interface Observer {
  update: () => void;
}

class ConcreteObserverA implements Observer {
  update() {
    console.log(this.constructor.name, " Has been updated");
  }
}
class ConcreteObserverB implements Observer {
  update() {
    console.log(this.constructor.name, " Has been updated");
  }
}

class Subject {
  private observerCollection: Observer[] = [];
  private _name = "";

  get name() {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
    this.notifyObservers();
  }

  register(...o: Observer[]) {
    this.observerCollection.push(...o);
  }

  unregister(o: Observer) {
    this.observerCollection = this.observerCollection.filter(
      (obs) => obs !== o
    );
  }

  notifyObservers() {
    this.observerCollection.forEach((o) => o.update());
  }
}

const sub = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

sub.register(observerA, observerB);
sub.name = "Diego";
