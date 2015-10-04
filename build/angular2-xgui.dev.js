"format register";
System.register("xgui/src/controls/CheckBox", ["angular2/angular2"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
      case 2:
        return decorators.reduceRight(function(o, d) {
          return (d && d(o)) || o;
        }, target);
      case 3:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key)), void 0;
        }, void 0);
      case 4:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key, o)) || o;
        }, desc);
    }
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var angular2_1 = require("angular2/angular2");
  var CheckBox = (function() {
    function CheckBox() {
      this.click = new angular2_1.EventEmitter();
    }
    Object.defineProperty(CheckBox.prototype, "label", {
      get: function() {
        return this._label;
      },
      set: function(value) {
        this._label = value;
      },
      enumerable: true,
      configurable: true
    });
    CheckBox = __decorate([angular2_1.Component({
      selector: 'x-checkbox',
      properties: ['label:label'],
      events: ["click:click"]
    }), angular2_1.View({
      template: '<div class="x-checkbox">' + '<div *ng-if="label" class="checkbox-label">{{ label }}</div> ' + '<input class="x-checkbox-input" type="checkbox"/>' + '</div>',
      styles: ['.x-checkbox{' + 'cursor: hand;' + 'margin: 5px;' + 'display: inline-block;' + 'position: relative;' + 'padding: 2px;' + 'height: 21px;' + '}', '.x-checkbox:hover{' + '}', '.x-checkbox:active{' + '}', '.x-checkbox-input{' + 'cursor: hand;' + 'padding: 2px;' + 'display: inline-block;' + 'background-color: #50524F;' + 'color: #fff;' + 'font-size: 0.9em;' + 'border: 0px solid #262825;' + 'border-top: 1px solid #2F2F2F; ' + '}', '.checkbox-label{' + 'display:inline-block; ' + 'padding: 2px 5px 2px 5px;' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [])], CheckBox);
    return CheckBox;
  })();
  exports.CheckBox = CheckBox;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/NumberInput", ["angular2/angular2"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
      case 2:
        return decorators.reduceRight(function(o, d) {
          return (d && d(o)) || o;
        }, target);
      case 3:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key)), void 0;
        }, void 0);
      case 4:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key, o)) || o;
        }, desc);
    }
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var angular2_1 = require("angular2/angular2");
  var NumberInput = (function() {
    function NumberInput(elementRef) {
      this.change = new angular2_1.EventEmitter();
      this._elementRef = elementRef;
      this.value = this.value || 0;
    }
    Object.defineProperty(NumberInput.prototype, "label", {
      get: function() {
        return this._label;
      },
      set: function(value) {
        this._label = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NumberInput.prototype, "inputWidth", {
      get: function() {
        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 80;
        var labelRef = this._elementRef.nativeElement.getElementsByClassName("input-label")[0];
        this._inputWidth = this.availableWidth - (15 + labelRef.offsetWidth);
        return this._inputWidth;
      },
      set: function(value) {
        this._inputWidth = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NumberInput.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(_value) {
        this._value = _value;
      },
      enumerable: true,
      configurable: true
    });
    NumberInput.prototype.onInput = function(event, isKeyInput) {
      if (isKeyInput === void 0) {
        isKeyInput = false;
      }
      var target = event.target;
      var value = target.value;
      if (value === "") {
        target.value = this._value;
      } else {
        var split = value.split(".");
        var step = target.step;
        if (split.length > 1) {
          var fractions = split[1];
          var length = fractions.length;
          if (length == 0 && !isKeyInput) {
            target.value = split[0];
            step = 1;
          } else {
            var _step = ".";
            while (length > 1) {
              _step += "0";
              length--;
            }
            _step += "1";
            _step = parseFloat(_step);
            if (target.step > _step || isKeyInput) {
              step = _step;
            }
          }
        }
        target.step = step;
        value = parseFloat(value);
      }
      this.value = value;
      this.change.next({
        label: this._label,
        value: value
      });
    };
    NumberInput = __decorate([angular2_1.Component({
      selector: 'number-input',
      properties: ['value:value', 'label:label'],
      events: ["change:change"]
    }), angular2_1.View({
      template: '<div class="number-input">' + '<div class="input-label">{{ label }}</div>' + '<input type="number" step="1" class="input-value" value="{{ value }}"' + '[style.width]="inputWidth"' + '(keyup)="onInput($event, true)"' + '(change)="onInput($event)"/>' + '</div>',
      styles: ['.number-input{' + 'display: flex;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}', '.input-label{' + 'padding-right: 7px;' + '}', '.input-label:hover{' + 'cursor:col-resize;' + '}', '.input-value{' + 'width: auto;' + 'height: 17px;' + 'padding: 2px;' + 'display: flex;' + 'background-color: #50524F;' + 'color: #fff;' + 'font-size: 0.9em;' + 'border: 0px solid #262825;' + 'border-top: 1px solid #2F2F2F; ' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], NumberInput);
    return NumberInput;
  })();
  exports.NumberInput = NumberInput;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/VectorInput", ["angular2/angular2", "xgui/src/controls/NumberInput"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
      case 2:
        return decorators.reduceRight(function(o, d) {
          return (d && d(o)) || o;
        }, target);
      case 3:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key)), void 0;
        }, void 0);
      case 4:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key, o)) || o;
        }, desc);
    }
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var angular2_1 = require("angular2/angular2");
  var NumberInput_1 = require("xgui/src/controls/NumberInput");
  var VectorInput = (function() {
    function VectorInput(elementRef) {
      this.change = new angular2_1.EventEmitter();
      this._elementRef = elementRef;
      this.vector = this.vector || {
        X: 0,
        Y: 0,
        Z: 0
      };
    }
    Object.defineProperty(VectorInput.prototype, "label", {
      get: function() {
        return this._label;
      },
      set: function(value) {
        this._label = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(VectorInput.prototype, "inputWidth", {
      get: function() {
        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 250;
        this._inputWidth = (this.availableWidth - (10 + (this.elements.length * 10))) / this.elements.length;
        return this._inputWidth;
      },
      set: function(value) {
        this._inputWidth = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(VectorInput.prototype, "vector", {
      get: function() {
        return this._vector;
      },
      set: function(value) {
        this._vector = value;
        this.elements = [];
        for (var element in this._vector) {
          if (this._vector.hasOwnProperty(element)) {
            this.elements.push({
              label: element.toUpperCase(),
              value: this.vector[element]
            });
          }
        }
      },
      enumerable: true,
      configurable: true
    });
    VectorInput.prototype.onInput = function(event) {
      var value = event.value;
      var element = event.label.toLowerCase();
      this.vector[element] = value;
      this.change.next({
        value: value,
        element: element,
        vector: this.vector
      });
    };
    VectorInput = __decorate([angular2_1.Component({
      selector: 'vector-input',
      properties: ['vector:vector', 'label:label'],
      events: ["change:change"]
    }), angular2_1.View({
      template: '<div class="vector-input">' + '<div class="label">{{ label }}</div> ' + '<div class="input-group"> ' + '<div *ng-for="#element of elements" [style.width]="inputWidth" class="input-element"> ' + '<number-input [label]="element.label" [value]="element.value"' + '(change)="onInput($event)"></number-input>' + '</div>' + '</div>' + '</div>',
      styles: ['.vector-input{' + 'display: block;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}', '.input-group{' + 'position: relative;' + 'display: flex;' + 'padding-top: 5px;' + 'padding-left: 5px;' + '}', '.input-element{' + 'font-size: 0.9em;' + 'position: relative;' + 'display: flex;' + 'padding-right: 10px;' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, NumberInput_1.NumberInput]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], VectorInput);
    return VectorInput;
  })();
  exports.VectorInput = VectorInput;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Button", ["angular2/angular2"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
      case 2:
        return decorators.reduceRight(function(o, d) {
          return (d && d(o)) || o;
        }, target);
      case 3:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key)), void 0;
        }, void 0);
      case 4:
        return decorators.reduceRight(function(o, d) {
          return (d && d(target, key, o)) || o;
        }, desc);
    }
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var angular2_1 = require("angular2/angular2");
  var Button = (function() {
    function Button() {
      this.click = new angular2_1.EventEmitter();
    }
    Object.defineProperty(Button.prototype, "label", {
      get: function() {
        return this._label;
      },
      set: function(value) {
        this._label = value;
      },
      enumerable: true,
      configurable: true
    });
    Button = __decorate([angular2_1.Component({
      selector: 'x-button',
      properties: ['label:label'],
      events: ["click:click"]
    }), angular2_1.View({
      template: '<div class="x-button">' + '<div class="button-label">{{ label }}</div> ' + '</div>',
      styles: ['.x-button{' + 'cursor: hand;' + 'margin: 5px;' + 'display: inline-block;' + 'position: relative;' + 'padding: 2px;' + 'height: 21px;' + 'background-color: #5D5D5D;' + '}', '.x-button:hover{' + 'background-color: #4C4C4C;' + '}', '.x-button:active{' + 'background-color: #3879D9;' + '}', '.button-label{display:block; padding: 2px 5px 2px 5px;}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [])], Button);
    return Button;
  })();
  exports.Button = Button;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/xcontrols", ["xgui/src/controls/Button", "xgui/src/controls/CheckBox", "xgui/src/controls/NumberInput", "xgui/src/controls/VectorInput"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/controls/Button"));
  __export(require("xgui/src/controls/CheckBox"));
  __export(require("xgui/src/controls/NumberInput"));
  __export(require("xgui/src/controls/VectorInput"));
  global.define = __define;
  return module.exports;
});

System.register("xgui/xgui-core", ["xgui/src/controls/xcontrols"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/controls/xcontrols"));
  global.define = __define;
  return module.exports;
});

System.register("xgui/angular2-xgui", ["xgui/xgui-core"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/xgui-core"));
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=angular2-xgui.dev.js.map