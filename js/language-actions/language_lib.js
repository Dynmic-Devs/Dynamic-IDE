language_list = [
    'c_cpp','csharp','csound_score','css',
    'dart','django','dockerfile','gitignore',
    'golang','html_elixir','html','html_ruby',
    'java','javascript','json5','jsoniq',
    'json','jsp','jsx','julia','kotlin',
    'latex','makefile','markdown','mysql',
    'nginx','perl','pgsql','php','php_laravel_blade',
    'plain_text','powershell','properties',
    'python','r','ruby','rust','sass','scss',
    'sh','sql','sqlserver','svg','swift',
    'text','toml','typescript','vbscript',
    'xml','yaml',
]

boilerplate_html = `\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>TEST Heading</h1>
    <h3>Sample Sub-Heading</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa quae sint illo quaerat, aut, assumenda commodi doloremque enim placeat corrupti optio pariatur rem voluptate doloribus. Quo dolorem in ipsam!</p>
    <p>necessitatibus eligendi aspernatur totam, amet eveniet quia. Molestias in quidem itaque doloribus eos obcaecati earum laborum, necessitatibus magni, odit corrupti? ipsum</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad ex quisquam, quibusdam assumenda esse voluptatem dolore et rerum maiores atque voluptates fugiat officiis ducimus praesentium id placeat sapiente velit.</p>
</body>
</html>\
`

boilerplate_js = `\
var mytext = "This is Javascript";

function print_this(args){
    console.log(args);
}

print_this(mytext);
\
`

boilerplate_python = `\
mytext = "This is Python";

def print_this(args):
    print(args)

print_this(mytext);\
`

boilerplate_java = `\
Class Main{
    public static void print_this(String args){
        System.out.println(args);
    }
    public static void main( String[] args*, String kwargs**){
        String mytext = "This is Java";
    }
}\
`


boilerplate_c_cpp = `\
#include <iostream>
#include <string>

void print_this(std::string args){
    std::cout << args;
}

int main()
{
    std::string mytext = "This is CPP";
    print_this(mytext);

    return 0;
}\
`

boilerplate = {
    'html' : boilerplate_html,
    'js' : boilerplate_js,
    'python' : boilerplate_python,
    'java' : boilerplate_java,
    'c_cpp' : boilerplate_c_cpp
}
