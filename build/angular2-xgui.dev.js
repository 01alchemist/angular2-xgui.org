"format register";
System.register("xgui/src/controls/Label", ["angular2/angular2"], true, function(require, exports, module) {
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
  var Label = (function() {
    function Label() {
      this.label = this.label || "Untitled";
    }
    Object.defineProperty(Label.prototype, "label", {
      get: function() {
        return this._text;
      },
      set: function(value) {
        this._text = value;
      },
      enumerable: true,
      configurable: true
    });
    Label = __decorate([angular2_1.Component({
      selector: 'x-label',
      properties: ['text:text']
    }), angular2_1.View({
      template: '{{text}}',
      styles: ['x-label{' + 'display: inline-block;' + 'position: relative;' + 'padding-left: 5px;' + 'padding-right: 5px;' + 'width: auto;' + '}'],
      directives: [angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [])], Label);
    return Label;
  })();
  exports.Label = Label;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/assets/Assets", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var Assets = (function() {
    function Assets() {}
    Assets.icon_blank_16 = "data:image/gif;base64,R0lGODlhEAAQAIAAAP///8nL0CH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThFQTQyN0U2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThFQTQyN0Y2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEVBNDI3QzZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEVBNDI3RDZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAQABAAAAIfhG+hq4jM3IFLJhoswNly/XkcBpIiVaInlLJr9FZWAQA7";
    Assets.icon_folder_16 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAAD+ogD+yyj+xiX+ngD+sxf+thP/rw/+ySj+ySf+oAD/ySj+nwD+oAD9yij9ySj/nwD/uxv9yCj8owP8xCP8uRb9wiH/pAT/yijPEjbXAAAAF3RSTlMAFhkbHSw1QHJzd3h7fL2/wMzY2u3u+WZ66xsAAABFSURBVHgBYyACsHDx8vIwIgkIiAOBMDsbCLCCBEQlkIAgUEAMWUAMKCCCLCACFBBCFhCikgA/sgAfUICZkxsOOJiI8CsAigUMzqb3Iu0AAAAASUVORK5CYII=";
    return Assets;
  })();
  exports.Assets = Assets;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Icon", ["angular2/angular2", "xgui/src/controls/assets/Assets"], true, function(require, exports, module) {
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
  var Assets_1 = require("xgui/src/controls/assets/Assets");
  var Icon = (function() {
    function Icon(elementRef) {
      this._elementRef = elementRef;
      this.src = Assets_1.Assets.icon_blank_16;
    }
    Object.defineProperty(Icon.prototype, "src", {
      get: function() {
        return this._src;
      },
      set: function(value) {
        if (value != undefined) {
          this._src = value;
          this._elementRef.nativeElement.style.backgroundImage = "url(" + value + ")";
        } else {
          this._src = null;
          this._elementRef.nativeElement.style.backgroundImage = null;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Icon.prototype, "glyph", {
      get: function() {
        return this._glyph;
      },
      set: function(value) {
        if (value != undefined) {}
      },
      enumerable: true,
      configurable: true
    });
    Icon = __decorate([angular2_1.Component({
      selector: 'x-icon',
      properties: ['src:src']
    }), angular2_1.View({
      template: '',
      styles: ['x-icon{' + 'display: inline-block;' + 'position: relative;' + 'width: 16px;' + 'height: 16px;' + '}'],
      directives: [angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], Icon);
    return Icon;
  })();
  exports.Icon = Icon;
  global.define = __define;
  return module.exports;
});
System.register("xgui/src/controls/TreeItem", ["angular2/angular2", "xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/controls/assets/Assets"], true, function(require, exports, module) {
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
  var Label_1 = require("xgui/src/controls/Label");
  var Icon_1 = require("xgui/src/controls/Icon");
  var Assets_1 = require("xgui/src/controls/assets/Assets");
  var TreeItem = (function() {
    function TreeItem(elementRef) {
      this.toggle = new angular2_1.EventEmitter();
      this.select = new angular2_1.EventEmitter();
      this.defaultIcon = Assets_1.Assets.icon_folder_16;
      this.expanderClass = {
        "x-tree-expander": true,
        "x-tree-collapsed": !this._expanded,
        "x-tree-expanded": this._expanded
      };
      this._expanded = false;
      this._selected = false;
      this._elementRef = elementRef;
    }
    Object.defineProperty(TreeItem.prototype, "label", {
      get: function() {
        return this._data.label;
      },
      set: function(value) {
        this._data.label = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "data", {
      get: function() {
        return this._data;
      },
      set: function(value) {
        this._data = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "dataField", {
      get: function() {
        return this._dataField;
      },
      set: function(value) {
        this._dataField = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "selected", {
      get: function() {
        return this._selected;
      },
      set: function(value) {
        this._selected = value;
        if (value) {
          this._elementRef.nativeElement.classList.add("x-tree-item-selected");
        } else {
          this._elementRef.nativeElement.classList.remove("x-tree-item-selected");
        }
      },
      enumerable: true,
      configurable: true
    });
    TreeItem.prototype.hasDataProvider = function() {
      if (this.data.expanded) {
        this.expanderClass["x-tree-expanded"] = true;
        this.expanderClass["x-tree-collapsed"] = false;
      }
      this._expanded = this.data.expanded;
      return this.data[this.dataField] !== undefined;
    };
    TreeItem.prototype.getDataProvider = function(data) {
      return data[this.dataField];
    };
    TreeItem.prototype.onToggle = function(event) {
      this._expanded = !this._expanded;
      this.data.expanded = this._expanded;
      event.target.classList.remove(this._expanded ? "x-tree-collapsed" : "x-tree-expanded");
      event.target.classList.add(this._expanded ? "x-tree-expanded" : "x-tree-collapsed");
      this.toggle.next({
        expanded: this._expanded,
        data: this.data
      });
    };
    TreeItem.prototype.onSelect = function(event) {
      this.select.next({item: this});
    };
    TreeItem = __decorate([angular2_1.Component({
      selector: 'x-tree-item',
      properties: ['data:data', 'dataField:data-field'],
      events: ["toggle:toggle", "select:select"]
    }), angular2_1.View({
      template: '<div *ng-if="hasDataProvider()" [class]="expanderClass" (click)="onToggle($event)"></div>' + '<div class="x-tree-item-container" (^click)="onSelect($event)">' + '<x-icon class="x-tree-icon" [src]="data.icon || defaultIcon"></x-icon>' + '<x-label class="tree-label" [text]="data.label"></x-label>' + '</div>',
      styles: ['x-tree-item{' + 'display: inline-block;' + 'position: relative;' + 'padding-left: 5px;' + '}', 'x-tree-item:hover{' + 'background-color: #50524F;' + '}', '.x-tree-item-selected{' + 'background-color: #212121;' + '}', '.x-tree-expander{' + 'display: inline-block;' + 'width: 16px;' + 'height: 16px;' + 'font-size: 16px;' + 'text-align: center;' + 'font-family: FontAwesome;' + 'color: #5fa2dd;' + 'cursor: hand;' + '}', '.x-tree-item-container{' + 'display: inline-block;' + '}', '.x-tree-icon{' + 'top: 2px;' + '}', '.x-tree-collapsed:before{' + 'content: "\\f0da"' + '}', '.x-tree-expanded:before{' + 'content: "\\f0d7"' + '}', '.tree-label{' + 'top:-1px;' + 'cursor:default;' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, Label_1.Label, Icon_1.Icon]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], TreeItem);
    return TreeItem;
  })();
  exports.TreeItem = TreeItem;
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
      template: '<div class="button-label">{{ label }}</div>',
      styles: ['x-button{' + 'cursor: hand;' + 'margin: 5px;' + 'display: inline-block;' + 'position: relative;' + 'padding: 2px;' + 'height: 21px;' + 'background-color: #5D5D5D;' + '}', 'x-button:hover{' + 'background-color: #4C4C4C;' + '}', 'x-button:active{' + 'background-color: #3879D9;' + '}', '.button-label{display:block; padding: 2px 5px 2px 5px;}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass]
    }), __metadata('design:paramtypes', [])], Button);
    return Button;
  })();
  exports.Button = Button;
  global.define = __define;
  return module.exports;
});

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
      template: '<div class="input-label">{{ label }}</div>' + '<input type="number" step="1" class="input-value" value="{{ value }}" [style.width]="inputWidth" (keyup)="onInput($event, true)" (change)="onInput($event)"/>',
      styles: ['number-input{' + 'display: flex;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}', '.input-label{' + 'padding-right: 7px;' + '}', '.input-label:hover{' + 'cursor:col-resize;' + '}', '.input-value{' + 'width: auto;' + 'height: 17px;' + 'padding: 2px;' + 'display: flex;' + 'background-color: #50524F;' + 'color: #fff;' + 'font-size: 0.9em;' + 'border: 0px solid #262825;' + 'border-top: 1px solid #2F2F2F; ' + '}'],
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
      template: '<div class="label">{{ label }}</div> ' + '<div class="input-group"> ' + '<div *ng-for="#element of elements" [style.width]="inputWidth" class="input-element"> ' + '<number-input [label]="element.label" [value]="element.value" (change)="onInput($event)"></number-input>' + '</div>' + '</div>',
      styles: ['vector-input{' + 'display: block;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}', '.input-group{' + 'position: relative;' + 'display: flex;' + 'padding-top: 5px;' + 'padding-left: 5px;' + '}', '.input-element{' + 'font-size: 0.9em;' + 'position: relative;' + 'display: flex;' + 'padding-right: 10px;' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, NumberInput_1.NumberInput]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], VectorInput);
    return VectorInput;
  })();
  exports.VectorInput = VectorInput;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Tree", ["angular2/angular2", "xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/controls/TreeItem"], true, function(require, exports, module) {
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
  var Label_1 = require("xgui/src/controls/Label");
  var Icon_1 = require("xgui/src/controls/Icon");
  var TreeItem_1 = require("xgui/src/controls/TreeItem");
  var Tree = (function() {
    function Tree(elementRef) {
      this.select = new angular2_1.EventEmitter();
      this._level = 0;
      this._expandLevel = 0;
      this._elementRef = elementRef;
      this.dataField = "data";
    }
    Object.defineProperty(Tree.prototype, "selectedItem", {
      get: function() {
        return Tree._selectedItem;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Tree.prototype, "dataProvider", {
      get: function() {
        return this._dataProvider;
      },
      set: function(value) {
        this._dataProvider = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Tree.prototype, "dataField", {
      get: function() {
        return this._dataField;
      },
      set: function(value) {
        this._dataField = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Tree.prototype, "expandLevel", {
      get: function() {
        return this._expandLevel == Number.POSITIVE_INFINITY ? "all" : this._expandLevel == -1 ? "none" : this._expandLevel.toString();
      },
      set: function(value) {
        this._expandLevel = value == "all" ? Number.POSITIVE_INFINITY : value == "none" ? -1 : parseInt(value);
      },
      enumerable: true,
      configurable: true
    });
    Tree.prototype.isLevelExpanded = function() {
      return this._expandLevel == Number.POSITIVE_INFINITY || this._expandLevel > this._level;
    };
    Tree.prototype.isExpanded = function(data) {
      if (this.isLevelExpanded() && data.expanded == undefined) {
        data.expanded = true;
      }
      return data.expanded;
    };
    Tree.prototype.hasDataProvider = function(data) {
      return data[this.dataField] !== undefined;
    };
    Tree.prototype.getDataProvider = function(data) {
      return data[this.dataField];
    };
    Tree.prototype.toggle = function(event) {
      if (this.isLevelExpanded() && event.data.expanded == undefined) {
        event.data.expanded = true;
      }
    };
    Tree.prototype.expand = function() {
      this._expandLevel = this._level;
    };
    Tree.prototype.collapse = function() {
      this._expandLevel = this._level - 1;
    };
    Tree.prototype.handleSelection = function(event) {
      if (Tree._selectedItem) {
        Tree._selectedItem.selected = false;
      }
      Tree._selectedItem = event.item;
      Tree._selectedItem.selected = true;
      this.select.next(event);
    };
    Tree._selectedItem = null;
    Tree = __decorate([angular2_1.Component({
      selector: 'x-tree',
      properties: ['_level:_level', 'expandLevel:expand', 'dataField:data-field', 'dataProvider:data-provider'],
      events: ["select:select"]
    }), angular2_1.View({
      template: '<div class="x-tree-item" *ng-for="#data of dataProvider">' + '<x-tree-item [data]="data" [data-field]="dataField" (toggle)="toggle($event)" (select)="handleSelection($event)"></x-tree-item>' + '<div *ng-if="hasDataProvider(data) && (isExpanded(data))">' + '<x-tree class="child" [_level]="_level+1" [expand]="expandLevel" [data-provider]="getDataProvider(data)" [data-field]="dataField" (select)="handleSelection($event)"></x-tree>' + '</div>' + '</div>',
      styles: ['x-tree{' + 'display: block;' + 'position: relative;' + 'padding-left: 0px;' + 'width: auto;' + '}', 'x-tree .child{' + 'padding-left: 30px;' + '}', '.x-tree-item{' + 'display: block;' + 'position: relative;' + '}'],
      directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, Label_1.Label, Icon_1.Icon, TreeItem_1.TreeItem, Tree]
    }), __metadata('design:paramtypes', [angular2_1.ElementRef])], Tree);
    return Tree;
  })();
  exports.Tree = Tree;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/xcontrols", ["xgui/src/controls/Tree", "xgui/src/controls/TreeItem", "xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/controls/Button", "xgui/src/controls/CheckBox", "xgui/src/controls/VectorInput", "xgui/src/controls/NumberInput", "xgui/src/controls/assets/Assets"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/controls/Tree"));
  __export(require("xgui/src/controls/TreeItem"));
  __export(require("xgui/src/controls/Label"));
  __export(require("xgui/src/controls/Icon"));
  __export(require("xgui/src/controls/Button"));
  __export(require("xgui/src/controls/CheckBox"));
  __export(require("xgui/src/controls/VectorInput"));
  __export(require("xgui/src/controls/NumberInput"));
  __export(require("xgui/src/controls/assets/Assets"));
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