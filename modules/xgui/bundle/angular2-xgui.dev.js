"format register";


System.register("xgui/src/assets/Assets", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var Assets = (function() {
    function Assets() {}
    Assets.getURL = function(b64Data, contentType, sliceSize) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      return URL.createObjectURL(new Blob(byteArrays, {type: contentType}));
    };
    Assets.icon_blank_16 = Assets.getURL("R0lGODlhEAAQAIAAAP///8nL0CH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThFQTQyN0U2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThFQTQyN0Y2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEVBNDI3QzZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEVBNDI3RDZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAQABAAAAIfhG+hq4jM3IFLJhoswNly/XkcBpIiVaInlLJr9FZWAQA7", "image/gif");
    Assets.icon_folder_16 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAAD+ogD+yyj+xiX+ngD+sxf+thP/rw/+ySj+ySf+oAD/ySj+nwD+oAD9yij9ySj/nwD/uxv9yCj8owP8xCP8uRb9wiH/pAT/yijPEjbXAAAAF3RSTlMAFhkbHSw1QHJzd3h7fL2/wMzY2u3u+WZ66xsAAABFSURBVHgBYyACsHDx8vIwIgkIiAOBMDsbCLCCBEQlkIAgUEAMWUAMKCCCLCACFBBCFhCikgA/sgAfUICZkxsOOJiI8CsAigUMzqb3Iu0AAAAASUVORK5CYII=", "image/png");
    Assets.icon_palette_16 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACKFBMVEXq6urr6+vs6+vs6+zs7Oz5+fn6+vr7+/r7+/v8/Pz9/Pz////4+f/09vz8+f/79/rv9Pfu9PXx9fHz9PLt8Pjt8Pjw9/v08Pj18Pfx+vz1+fT2+vbm5/Dr5+/o7PTv9Pn1+vrv6+73+vjy8/HR1MjV1cni3NDo3tPQ2dfY3OH14+3x4+3HzK3Mza7gza/jzLHU0Lbryd/vyeC2yMi7x9DBzLLa0rrx0tHjz+G8zL3s08PVzN0RjV8VkjUahWQbdXUelFUhgYEkgX0unEMvg3YwZ5Aypis2mRw6cZ9BbZ5BrQJGrxBMZKBOiGVQaJxQpQlSYKtSnnRSqyZfvABlW6xmuABpSKNrvgBwYpR7UqqBxwCCQZqDfbCJTa6NuhGNywCOkkCOtkqQuwaYO5iaPqebSaacRKqgzgCkxQKnYXmowpWs1ACtMJqwQaqx1gC1Pqe7Ppa/ba3BzALCPKTEQpbHOaHILpLOw0vPyhLQtdTSxADUOaDUmgvUyZrU1wDU3QDU3wDYOKPbOKTbsEzcKpTduAzfZz3hrQrjj0zjnA7kSBfkUgblOJLldgznbpTpegDpiwDqRmrq3gDrzgDsvqPu2wDvOojwNpnx0gDyNaL0XAD1NE71qwD1vwD4nQD5wwD6cwP60gD7TgD7xwD9NI79VSH+RU7+dQD+qAD+tQD/PHT/Si//Uwn/YAD/ZAD/bwD/fQD/gwD/hwD/mgD/mwD/nAD/rwD/vwBkpMkpAAAAPHRSTlMAAAAAAAAAAAAAAAAhJCQnKCksLGBiZmhpam5vi4yPkpaXmJvR0dPV2tzf4Onp6uvt7e3v7+/y8vP19fhBwj3MAAAA20lEQVQY013PTUrDQBgG4Pf7ZjL5mRRtoRAQCvUCLj2CK9eewZN6gS6VShVxY0mrSSbz97nW5wYPWfyl4VHwZV2Jm08hwmhA2as78uOododTgjKyeLxZL7Kfh+Z275SGuW46/pEUcnjZTpGxvF93rCQmF8duBY3KtGJ8DMEl+SrBqEqbW+IciAuy0CCRLNzUloIkgobLQyWFtZFCjAM0XPg2QkXZ0DS3HsqE49Zonlwgya/vkXF+rj97z8Qim30PsnPqNg/ZnT09vX2okuyMuLxoKvFTf9Qo6X//F2caa2X9D1ICAAAAAElFTkSuQmCC", "image/png");
    Assets.icon_arrow_left_7x5 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAAAcAAAAFCAMAAAC+RAbqAAAAElBMVEX////IyMjJycnKysrLy8vMzMyNMQabAAAAAXRSTlMAQObYZgAAAB1JREFUeAFjYGBghWAWFjBmZmYGYwYmJghmYARhAAUIADcJQfU3AAAAAElFTkSuQmCC", "image/png");
    Assets.icon_close_6x5 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAMAAABRhm3UAAAAHlBMVEVHR0dKSkpNTU1QUFBTU1PIyMjJycnKysrLy8vMzMwo6GY1AAAABXRSTlMAAAAAAMJrBrEAAAAiSURBVAjXY+Rk+M3AysDIzMrAwPCbkQnI/s3AyAjhsYLlAFSABRrcSHg1AAAAAElFTkSuQmCC", "image/png");
    return Assets;
  })();
  exports.Assets = Assets;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/skins/Skin", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var Skin = (function() {
    function Skin() {}
    return Skin;
  })();
  exports.Skin = Skin;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/skins/dracula/Dracula", ["xgui/src/skins/Skin"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Skin_1 = require("xgui/src/skins/Skin");
  var Dracula = (function(_super) {
    __extends(Dracula, _super);
    function Dracula() {
      _super.call(this);
      this.panel = {styles: ['x-panel{' + 'min-width:212px;' + 'max-width:1370px;' + 'min-height:148px;' + 'max-height:805px;' + 'display: block;' + 'border: 1px solid #282828;' + '}', '.stack-header{' + 'display:block;' + 'width:inherit;' + 'height:11px;' + 'border-top: #474747 1px solid;' + 'border-bottom: #282828 1px solid;' + 'background-color: #323232;' + '}', '.panel-title{' + 'width:100px;' + '}']};
    }
    return Dracula;
  })(Skin_1.Skin);
  exports.Dracula = Dracula;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/utils/StyleUtils", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var StyleUtils = (function() {
    function StyleUtils() {}
    StyleUtils.addStyle = function(css) {
      var style = document.createElement('style');
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.getElementsByTagName('head')[0].appendChild(style);
    };
    return StyleUtils;
  })();
  exports.StyleUtils = StyleUtils;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Icon", ["angular2/core", "xgui/src/assets/Assets", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var Assets_1 = require("xgui/src/assets/Assets");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
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
    Icon = __decorate([core_1.Component({
      selector: 'x-icon',
      properties: ['src:src']
    }), core_1.View({template: ''}), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])], Icon);
    return Icon;
    var _a;
  })();
  exports.Icon = Icon;
  var css = 'x-icon{' + 'display: inline-block;' + 'position: relative;' + 'width: 16px;' + 'height: 16px;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/CheckBox", ["angular2/core", "angular2/common"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var CheckBox = (function() {
    function CheckBox() {
      this.click = new core_1.EventEmitter();
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
    CheckBox = __decorate([core_1.Component({
      selector: 'x-checkbox',
      properties: ['label:label'],
      events: ["click:click"]
    }), core_1.View({
      template: '<div class="x-checkbox">' + '<div *ngIf="label" class="checkbox-label">{{ label }}</div> ' + '<input class="x-checkbox-input" type="checkbox"/>' + '</div>',
      styles: ['.x-checkbox{' + 'cursor: pointer;' + 'margin: 5px;' + 'display: inline-block;' + 'position: relative;' + 'padding: 2px;' + 'height: 21px;' + '}', '.x-checkbox:hover{' + '}', '.x-checkbox:active{' + '}', '.x-checkbox-input{' + 'cursor: pointer;' + 'padding: 2px;' + 'display: inline-block;' + 'background-color: #50524F;' + 'color: #fff;' + 'font-size: 0.9em;' + 'border: 0px solid #262825;' + 'border-top: 1px solid #2F2F2F; ' + '}', '.checkbox-label{' + 'display:inline-block; ' + 'padding: 2px 5px 2px 5px;' + '}'],
      directives: [common_1.NgFor, common_1.NgIf]
    }), __metadata('design:paramtypes', [])], CheckBox);
    return CheckBox;
  })();
  exports.CheckBox = CheckBox;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/NumberInput", ["angular2/core", "angular2/common", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
  var NumberInput = (function() {
    function NumberInput(elementRef) {
      this.change = new core_1.EventEmitter();
      this._elementRef = elementRef;
      this.value = this.value || 0;
    }
    NumberInput.prototype.ngAfterViewInit = function() {};
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
      this.change.emit({
        label: this._label,
        value: value
      });
    };
    NumberInput = __decorate([core_1.Component({
      selector: 'number-input',
      properties: ['value:value', 'label:label'],
      events: ["change:change"]
    }), core_1.View({
      template: '<div class="input-label">{{ label }}</div>' + '<input type="number" step="1" class="input-value" value="{{ value }}" [style.width]="inputWidth" (keyup)="onInput($event, true)" (change)="onInput($event)"/>',
      styles: ['.input-label{' + 'padding-right: 7px;' + '}', '.input-label:hover{' + 'cursor:col-resize;' + '}', '.input-value{' + 'width: auto;' + 'height: 17px;' + 'padding: 2px;' + 'display: flex;' + 'background-color: #50524F;' + 'color: #fff;' + 'font-size: 0.9em;' + 'border: 0px solid #262825;' + 'border-top: 1px solid #2F2F2F; ' + '}'],
      directives: [common_1.NgFor, common_1.NgIf]
    }), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])], NumberInput);
    return NumberInput;
    var _a;
  })();
  exports.NumberInput = NumberInput;
  var css = 'number-input{' + 'display: flex;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/VectorInput", ["angular2/core", "angular2/common", "xgui/src/controls/NumberInput", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var NumberInput_1 = require("xgui/src/controls/NumberInput");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
  var VectorInput = (function() {
    function VectorInput(elementRef) {
      this.change = new core_1.EventEmitter();
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
      this.change.emit({
        value: value,
        element: element,
        vector: this.vector
      });
    };
    VectorInput = __decorate([core_1.Component({
      selector: 'vector-input',
      properties: ['vector:vector', 'label:label'],
      events: ['change:change']
    }), core_1.View({
      template: '<div class="label">{{ label }}</div> ' + '<div class="input-group"> ' + '<div *ngFor="#element of elements" [style.width]="inputWidth" class="input-element"> ' + '<number-input [label]="element.label" [value]="element.value" (change)="onInput($event)"></number-input>' + '</div>' + '</div>',
      styles: ['.input-group{' + 'position: relative;' + 'display: flex;' + 'padding-top: 5px;' + 'padding-left: 5px;' + '}', '.input-element{' + 'font-size: 0.9em;' + 'position: relative;' + 'display: flex;' + 'padding-right: 10px;' + '}'],
      directives: [common_1.NgFor, common_1.NgIf, NumberInput_1.NumberInput]
    }), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])], VectorInput);
    return VectorInput;
    var _a;
  })();
  exports.VectorInput = VectorInput;
  var css = 'vector-input{' + 'display: block;' + 'position: relative;' + 'padding: 5px;' + 'width: auto;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/TreeItem", ["angular2/core", "angular2/common", "xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/assets/Assets", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var Label_1 = require("xgui/src/controls/Label");
  var Icon_1 = require("xgui/src/controls/Icon");
  var Assets_1 = require("xgui/src/assets/Assets");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
  var TreeItem = (function() {
    function TreeItem(elementRef) {
      this.toggle = new core_1.EventEmitter();
      this.select = new core_1.EventEmitter();
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
      this.toggle.emit({
        expanded: this._expanded,
        data: this.data
      });
    };
    TreeItem.prototype.onSelect = function(event) {
      this.select.emit({item: this});
    };
    TreeItem = __decorate([core_1.Component({
      selector: 'x-tree-item',
      properties: ['data:data', 'dataField:data-field'],
      events: ["toggle:toggle", "select:select"]
    }), core_1.View({
      template: '<div *ngIf="hasDataProvider()" [ngClass]="expanderClass" (click)="onToggle($event)"></div>' + '<div class="x-tree-item-container" (^click)="onSelect($event)">' + '<x-icon class="x-tree-icon" [src]="data.icon || defaultIcon"></x-icon>' + '<x-label class="tree-label" [text]="data.label"></x-label>' + '</div>',
      styles: ['.x-tree-item-selected{' + 'background-color: #135996;' + '}', '.x-tree-expander{' + 'display: inline-block;' + 'width: 16px;' + 'height: 16px;' + 'font-size: 16px;' + 'text-align: center;' + 'font-family: FontAwesome;' + 'color: #5fa2dd;' + 'cursor: pointer;' + '}', '.x-tree-item-container{' + 'display: inline-block;' + '}', '.x-tree-icon{' + 'top: 2px;' + '}', '.x-tree-collapsed:before{' + 'content: "\\f0da"' + '}', '.x-tree-expanded:before{' + 'content: "\\f0d7"' + '}', '.tree-label{' + 'top:-1px;' + 'cursor:default;' + '}'],
      directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass, Label_1.Label, Icon_1.Icon]
    }), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])], TreeItem);
    return TreeItem;
    var _a;
  })();
  exports.TreeItem = TreeItem;
  var css = 'x-tree-item{' + 'display: inline-block;' + 'position: relative;' + 'padding-left: 5px;' + '}' + 'x-tree-item:hover{' + 'background-color: #3E698E;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Tree", ["angular2/core", "angular2/common", "xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/controls/TreeItem", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var Label_1 = require("xgui/src/controls/Label");
  var Icon_1 = require("xgui/src/controls/Icon");
  var TreeItem_1 = require("xgui/src/controls/TreeItem");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
  var Tree = (function() {
    function Tree(elementRef) {
      this.select = new core_1.EventEmitter();
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
    Tree = __decorate([core_1.Component({
      selector: 'x-tree',
      properties: ['_level:_level', 'expandLevel:expand', 'dataField:data-field', 'dataProvider:data-provider'],
      events: ["select:select"]
    }), core_1.View({
      template: '<div class="x-tree-item" *ngFor="#data of dataProvider">' + '<x-tree-item [data]="data" [data-field]="dataField" (toggle)="toggle($event)" (select)="handleSelection($event)"></x-tree-item>' + '<div *ngIf="hasDataProvider(data) && (isExpanded(data))">' + '<x-tree class="child" [_level]="_level+1" [expand]="expandLevel" [data-provider]="getDataProvider(data)" [data-field]="dataField" (select)="handleSelection($event)"></x-tree>' + '</div>' + '</div>',
      styles: ['.x-tree-item{' + 'display: block;' + 'position: relative;' + '}'],
      directives: [common_1.NgFor, common_1.NgIf, Label_1.Label, Icon_1.Icon, TreeItem_1.TreeItem, Tree]
    }), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])], Tree);
    return Tree;
    var _a;
  })();
  exports.Tree = Tree;
  var css = 'x-tree{' + 'display: block;' + 'position: relative;' + 'padding-left: 0px;' + 'width: auto;' + '}' + 'x-tree .child{' + 'padding-left: 30px;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/skins/SkinManager", ["angular2/core", "xgui/src/skins/dracula/Dracula"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var Dracula_1 = require("xgui/src/skins/dracula/Dracula");
  var SkinManager = (function() {
    function SkinManager(_viewManager) {
      this._viewManager = _viewManager;
      if (self) {
        throw {
          code: 0,
          name: "Singleton Error",
          message: "ComponentManager is singleton, someone already created it"
        };
      }
    }
    SkinManager.prototype.init = function() {
      this.skins = [new Dracula_1.Dracula()];
      this.defaultSkin = this.skins[0];
    };
    SkinManager = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [(typeof(_a = typeof core_1.AppViewManager !== 'undefined' && core_1.AppViewManager) === 'function' && _a) || Object])], SkinManager);
    return SkinManager;
    var _a;
  })();
  exports.SkinManager = SkinManager;
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Label", ["angular2/core", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
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
    Label = __decorate([core_1.Component({
      selector: 'x-label',
      properties: ['text:text']
    }), core_1.View({template: '{{text}}'}), __metadata('design:paramtypes', [])], Label);
    return Label;
  })();
  exports.Label = Label;
  var css = 'x-label{' + 'display: inline-block;' + 'position: relative;' + 'padding-left: 5px;' + 'padding-right: 5px;' + 'width: auto;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/Button", ["angular2/core", "angular2/common", "xgui/src/utils/StyleUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = require("angular2/core");
  var common_1 = require("angular2/common");
  var StyleUtils_1 = require("xgui/src/utils/StyleUtils");
  var Button = (function() {
    function Button() {
      this.click = new core_1.EventEmitter();
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
    Button = __decorate([core_1.Component({
      selector: 'x-button',
      properties: ['label:label'],
      events: ["click:click"]
    }), core_1.View({
      template: '<div class="button-label">{{ label }}</div>',
      styles: ['.button-label{display:block; padding: 2px 5px 2px 5px;}'],
      directives: [common_1.NgFor, common_1.NgIf]
    }), __metadata('design:paramtypes', [])], Button);
    return Button;
  })();
  exports.Button = Button;
  var css = 'x-button{' + 'cursor: pointer;' + 'margin: 5px;' + 'display: inline-block;' + 'position: relative;' + 'padding: 2px;' + 'height: 21px;' + 'background-color: #5D5D5D;' + '}' + 'x-button:hover{' + 'background-color: #4C4C4C;' + '}' + 'x-button:active{' + 'background-color: #3879D9;' + '}';
  StyleUtils_1.StyleUtils.addStyle(css);
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/skins/xskin", ["xgui/src/skins/Skin", "xgui/src/skins/dracula/Dracula", "xgui/src/skins/SkinManager"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/skins/Skin"));
  __export(require("xgui/src/skins/dracula/Dracula"));
  __export(require("xgui/src/skins/SkinManager"));
  global.define = __define;
  return module.exports;
});

System.register("xgui/src/controls/xcontrols", ["xgui/src/controls/Label", "xgui/src/controls/Icon", "xgui/src/controls/Button", "xgui/src/controls/CheckBox", "xgui/src/controls/NumberInput", "xgui/src/controls/VectorInput", "xgui/src/controls/TreeItem", "xgui/src/controls/Tree"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/controls/Label"));
  __export(require("xgui/src/controls/Icon"));
  __export(require("xgui/src/controls/Button"));
  __export(require("xgui/src/controls/CheckBox"));
  __export(require("xgui/src/controls/NumberInput"));
  __export(require("xgui/src/controls/VectorInput"));
  __export(require("xgui/src/controls/TreeItem"));
  __export(require("xgui/src/controls/Tree"));
  global.define = __define;
  return module.exports;
});

System.register("xgui/xgui-core", ["xgui/src/assets/Assets", "xgui/src/skins/xskin", "xgui/src/controls/xcontrols"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export(require("xgui/src/assets/Assets"));
  __export(require("xgui/src/skins/xskin"));
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