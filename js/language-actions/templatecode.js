class CodeRunner {
    constructor(input_editor, input_lang_name = "html",output_terminal_run=false, output_run_in_browser=true){
        this.language_name = input_lang_name;

        this.editor = input_editor;
        this.editor_mode = "ace/mode/" + input_lang_name;

        this.output_properties = {
            console_type  : output_terminal_run,
            run_in_browser: output_run_in_browser
        };
    }

    initialize(){
        this.editor.session.setMode(this.editor_mode);
        this.editor.session.setValue(boilerplate_code[this.language_name]);
    }

    getCode(){
        return this.editor.session.getValue();
    }

    async getOutput(){
        //To Implement 
        return {   
           META    : this.output_properties,
           CONTENT : "Unimplemented"
        }
    }
}
