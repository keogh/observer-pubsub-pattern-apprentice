function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
  return this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function (context) {
  var count = this.observers.count();
  for (var i = 0; i < count; i++) {
    this.observers.get(i).update(context);
  }
};