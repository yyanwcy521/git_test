var f1 = new Foo();

f1.a = 10;
Foo.prototype.a = 100;
Foo.prototype.b = 200;

var item;
for (inem in f1) {
    if (f1.hasOwnProperty(item)){
        console.log(item);
    }

}