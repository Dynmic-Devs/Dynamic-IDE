var editor = ace.edit("editor");

editor.setTheme("ace/theme/monokai");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    fontSize: '20px'
});

editor.session.setMode("ace/mode/html");

var output = $("#output-frame")[0];
output.src = "data:text/html;charset=utf-8," + encodeURI(editor.getValue());


$("#run_button").on(
    'click',
    ()=>{
        output.src = "data:text/html;charset=utf-8," + encodeURI(editor.getValue());
    }
)
