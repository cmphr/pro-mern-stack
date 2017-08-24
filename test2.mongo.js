var db = new Mongo().getDB("playground");

db.employees.insert({name:{first:'Wilma',last:'Flintstone'}, age:32});
db.employees.insert({name:{first:'Fred',last:'Flintstone'}, age:36});

db.employees.find({age:32});
db.employees.find({'name.last':'Flintstone'});
