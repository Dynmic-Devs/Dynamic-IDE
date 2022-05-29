var editor = ace.edit("editor");
var output = $("#output-frame")[0];

output.src = "data:text/html;charset=utf-8," + encodeURI(editor.getValue());

editor.setTheme("ace/theme/monokai");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    fontSize: '20px'
});

languages['html'].initialize();

$("#run_button").on(
    'click',
    ()=>{
        output.src = "data:text/html;charset=utf-8," + encodeURI(languages[$('#selected_language')[0].value].run());
    }
)

// var console = {
//     __on: {},
//     addEventListener: function (name, callback) {
//         this.__on[name] = (this.__on[name] || []).concat(callback);
//         return this;
//     },
//     dispatchEvent: function (name, value) {
//         this.__on[name] = (this.__on[name] || []);
//         for (var i = 0, n = this.__on[name].length; i < n; i++) {
//             this.__on[name][i].call(this, value);
//         }
//         return this;
//     },
//     log: function () {
//         var a = [];
//         // For V8 optimization
//         for (var i = 0, n = arguments.length; i < n; i++) {
//             a.push(arguments[i]);
//         }
//         this.dispatchEvent("log", a);
//     }
// };
