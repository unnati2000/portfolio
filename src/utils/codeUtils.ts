import { IconType } from 'react-icons';
import { DiReact, DiPython, DiJava, DiDart } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandGolang } from 'react-icons/tb';

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
    language: 'javascript',
    code: `import React from 'react';

const App = ()=>{
  return <div>
   <p> Hi, I am Unnati Bamania </p>

   <button>
      About me
   </button>
  </div>;
}

export default App; 
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
    code: `import java.util.Scanner;

public class HelloWorld {

    public static void main(String[] args) {
        System.out.print("Hi! I am Unnati Bamania");
    }
}
`,
  },
  {
    index: 3,
    Icon: SiCplusplus,
    name: 'C++',
    language: 'cpp',
    code: `
#include <iostream>

int main(){
  cout<<"Hi! I'm Unnati Bamania"<<endl;
  return 0;
}
    `,
  },
  {
    index: 4,
    Icon: TbBrandGolang,
    name: 'Golang',
    language: 'go',
    code: `
package main
import "fmt"
  func main() {
    fmt.Println("Hi! I'm Unnati Bamania")
  }
    `,
  },
  {
    index: 5,
    Icon: DiDart,
    name: 'Dart',
    language: 'dart',
    code: `
void main(){
  
  print("Hi! I'm Unnati Bamania");
}
    `,
  },
];
