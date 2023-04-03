import { IconType } from 'react-icons';
import { DiReact, DiPython, DiJava } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';

interface LanguageProps {
  index: number;
  Icon: IconType;
  name: string;
  language: string;
  code: string;
}

export const programmingLanguages: LanguageProps[] = [
  {
    index: 1,
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
    index: 2,
    Icon: DiPython,
    name: 'Python',
    language: 'python',
    code: `print("Hi, I'm Unnati Bamania")`,
  },
  {
    index: 3,
    Icon: DiJava,
    name: 'Java',
    language: 'java',
    code: `System.out.println("Hi I'm Unnati Bamania")`,
  },
  {
    index: 4,
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
];
