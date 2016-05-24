System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Assets;
    return {
        setters:[],
        execute: function() {
            Assets = (function () {
                function Assets() {
                }
                Assets.getURL = function (b64Data, contentType, sliceSize) {
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
                    return URL.createObjectURL(new Blob(byteArrays, { type: contentType }));
                };
                Assets.icon_blank_16 = Assets.getURL("R0lGODlhEAAQAIAAAP///8nL0CH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThFQTQyN0U2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThFQTQyN0Y2QzE2MTFFNTkyNEJFMEM4RDdEMzg2MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEVBNDI3QzZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEVBNDI3RDZDMTYxMUU1OTI0QkUwQzhEN0QzODYyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAQABAAAAIfhG+hq4jM3IFLJhoswNly/XkcBpIiVaInlLJr9FZWAQA7", "image/gif");
                Assets.icon_folder_16 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAAD+ogD+yyj+xiX+ngD+sxf+thP/rw/+ySj+ySf+oAD/ySj+nwD+oAD9yij9ySj/nwD/uxv9yCj8owP8xCP8uRb9wiH/pAT/yijPEjbXAAAAF3RSTlMAFhkbHSw1QHJzd3h7fL2/wMzY2u3u+WZ66xsAAABFSURBVHgBYyACsHDx8vIwIgkIiAOBMDsbCLCCBEQlkIAgUEAMWUAMKCCCLCACFBBCFhCikgA/sgAfUICZkxsOOJiI8CsAigUMzqb3Iu0AAAAASUVORK5CYII=", "image/png");
                Assets.icon_palette_16 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACKFBMVEXq6urr6+vs6+vs6+zs7Oz5+fn6+vr7+/r7+/v8/Pz9/Pz////4+f/09vz8+f/79/rv9Pfu9PXx9fHz9PLt8Pjt8Pjw9/v08Pj18Pfx+vz1+fT2+vbm5/Dr5+/o7PTv9Pn1+vrv6+73+vjy8/HR1MjV1cni3NDo3tPQ2dfY3OH14+3x4+3HzK3Mza7gza/jzLHU0Lbryd/vyeC2yMi7x9DBzLLa0rrx0tHjz+G8zL3s08PVzN0RjV8VkjUahWQbdXUelFUhgYEkgX0unEMvg3YwZ5Aypis2mRw6cZ9BbZ5BrQJGrxBMZKBOiGVQaJxQpQlSYKtSnnRSqyZfvABlW6xmuABpSKNrvgBwYpR7UqqBxwCCQZqDfbCJTa6NuhGNywCOkkCOtkqQuwaYO5iaPqebSaacRKqgzgCkxQKnYXmowpWs1ACtMJqwQaqx1gC1Pqe7Ppa/ba3BzALCPKTEQpbHOaHILpLOw0vPyhLQtdTSxADUOaDUmgvUyZrU1wDU3QDU3wDYOKPbOKTbsEzcKpTduAzfZz3hrQrjj0zjnA7kSBfkUgblOJLldgznbpTpegDpiwDqRmrq3gDrzgDsvqPu2wDvOojwNpnx0gDyNaL0XAD1NE71qwD1vwD4nQD5wwD6cwP60gD7TgD7xwD9NI79VSH+RU7+dQD+qAD+tQD/PHT/Si//Uwn/YAD/ZAD/bwD/fQD/gwD/hwD/mgD/mwD/nAD/rwD/vwBkpMkpAAAAPHRSTlMAAAAAAAAAAAAAAAAhJCQnKCksLGBiZmhpam5vi4yPkpaXmJvR0dPV2tzf4Onp6uvt7e3v7+/y8vP19fhBwj3MAAAA20lEQVQY013PTUrDQBgG4Pf7ZjL5mRRtoRAQCvUCLj2CK9eewZN6gS6VShVxY0mrSSbz97nW5wYPWfyl4VHwZV2Jm08hwmhA2as78uOododTgjKyeLxZL7Kfh+Z275SGuW46/pEUcnjZTpGxvF93rCQmF8duBY3KtGJ8DMEl+SrBqEqbW+IciAuy0CCRLNzUloIkgobLQyWFtZFCjAM0XPg2QkXZ0DS3HsqE49Zonlwgya/vkXF+rj97z8Qim30PsnPqNg/ZnT09vX2okuyMuLxoKvFTf9Qo6X//F2caa2X9D1ICAAAAAElFTkSuQmCC", "image/png");
                Assets.icon_arrow_left_7x5 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAAAcAAAAFCAMAAAC+RAbqAAAAElBMVEX////IyMjJycnKysrLy8vMzMyNMQabAAAAAXRSTlMAQObYZgAAAB1JREFUeAFjYGBghWAWFjBmZmYGYwYmJghmYARhAAUIADcJQfU3AAAAAElFTkSuQmCC", "image/png");
                Assets.icon_close_6x5 = Assets.getURL("iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAMAAABRhm3UAAAAHlBMVEVHR0dKSkpNTU1QUFBTU1PIyMjJycnKysrLy8vMzMwo6GY1AAAABXRSTlMAAAAAAMJrBrEAAAAiSURBVAjXY+Rk+M3AysDIzMrAwPCbkQnI/s3AyAjhsYLlAFSABRrcSHg1AAAAAElFTkSuQmCC", "image/png");
                return Assets;
            }());
            exports_1("Assets", Assets);
        }
    }
});
//# sourceMappingURL=Assets.js.map