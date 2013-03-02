# MFM Pattern (Draft 0.1)
Implementation inspired on Addy Osmani's article 'Patterns For Large-Scale JavaScript Application Architecture' (http://addyosmani.com/largescalejavascript/).

## Application Layers
### Module
Modules are independent units of functionality that can exist on their own.

In the proposed architecture, modules have a very limited knowledge of what's going on in the rest of the system. Instead, we delegate this responsibility to a mediator via a facade.
This is by design because if a module only cares about letting the system know when something of interest happens without worrying if other modules are running, a system is capable of supporting adding, removing or replacing modules without the rest of the modules in the system falling over due to tight coupling.

In this case the Modules are the Knockout ViewModel piece.

### Facade
A facade serves as an abstraction to the application logic as well as to the mediator. It sits between the mediator and our modules - it's the only part of the system modules are aware of.

### Mediator
The Mediator acts only as a 'Pub/Sub' manager using the mediator pattern. The JavaScript library was downloaded from http://thejacklawson.com/Mediator.js/.

### Model
Contains all the business logic for the application.

## Application Flow
To have a better understanding about the initialization flow, please look into main.js

```javascript
var facade = new Facade(new Mediator(), {email: new EmailModel()});
var module = new ViewModel(facade);
module.init();
ko.applyBindings(module);
```

1. Facade gets initialized and associated with the Mediator and the Models that will execute the published messages.
2. Modules are instantiated and associated to the Facade. The Facade only provides the notify, listen, and ignore methods. The idea is to have the modules decoupled from the Mediator.
3. Module(s) get initialized. During initialization, members can be instantiated, and subscribers get registered to the Mediator.
4. Knockout kicks in.