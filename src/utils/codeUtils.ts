import { IconType } from 'react-icons';
import { DiReact, DiPython, DiJava, DiRust } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';

interface LanguageProps {
  index: number;
  Icon: IconType;
  name: string;
  language: string;
  code: string;
}

export const programmingLanguages: LanguageProps[] = [
  {
    index: 0,
    Icon: DiReact,
    name: 'React',
    language: 'Javascript',
    code: `import React from 'react';
        const App = ()=>{
            return <div>
                Hi, I'm Unnati Bamania
            </div>;
        }
    `,
  },
  {
    index: 1,
    Icon: DiPython,
    name: 'Python',
    language: 'python',
    code: `print("Hi, I'm Unnati Bamania")`,
  },
  {
    index: 2,
    Icon: DiJava,
    name: 'Java',
    language: 'java',
    code: `System.out.println("Hi I'm Unnati Bamania")`,
  },
  {
    index: 3,
    Icon: SiCplusplus,
    name: 'C++',
    language: 'c++',
    code: `
        #include <iostream>
        int main(){
            cout<<"Hi! I'm Unnati Bamania"<<endl;
        }
    `,
  },
  {
    index: 4,
    Icon: DiRust,
    name: 'Rust',
    language: 'rust',
    code: `
        #include <iostream>
        int main(){
            cout<<"Hi! I'm Unnati Bamania"<<endl;
        }
    `,
  },
  {
    index: 5,
    Icon: AiFillHtml5,
    name: 'HTML',
    language: 'html',
    code: `
       <html>
        <head></head>
        <body>
          <h1>Hi, I'm Unnati</h1>
        </body>
       </html>
    `,
  },
];
