// const { program } = require("commander");

// const app = program.command("kdt");
// app.action(() => {
//   console.log("wow!내가 만든 명렁어!");
// });

// program.parse(process.argv);

//npm commander.js 사용법 예시
// const { program } = require("commander");

// program.option("--first").option("-s, --separator <char>");

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
//node index.js -s /--first a/b/c
//[ 'a/b/c' ]

// const { Command } = require("commander");
// const program = new Command();

// program
//   .name("string-util")
//   .description("CLI to some JavaScript string utilities")
//   .version("0.8.0");

// program
//   .command("split")
//   .description("Split a string into substrings and display as an array")
//   .argument("<string>", "string to split")
//   .option("--first", "display just the first substring")
//   .option("-s, --separator <char>", "separator character", ",")
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();
//node index.js help split
//ode index.js split --separator=/ ?/!/@
// [ '?', '!', '@' ]

// CommonJS (.cjs) npm 예제코드
// const { Command } = require("commander");
// const program = new Command();
// //첫번째 인자로 옵션의 이름을, 두 번째 인자로 옵션의 설명
// //<>로 감싸진 값은 필수값을 의미.
// program
//   .option("-d, --debug", "output extra debugging")
//   .option("-s, --small", "small pizza size")
//   .option("-p, --pizza-type <type>", "flavour of pizza");

// //srgv 배열을 파싱하여 명령 줄 인자를 해석하고,
// program.parse(process.argv);
// //program.opts()사용하여 파싱 된 옵션 객체를 반환한다.
// const options = program.opts();

// //if문을 사용해서 옵션 객체의 각 프로퍼티를 검사하고, 해당 옵션에 대한 메세지를 출력한다.
// if (options.debug) console.log(options);
// console.log("pizza details:");
// if (options.small) console.log("- small pizza size");
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);
//node index.js --debug --small --pizza-type=cheese
//{ debug: true, small: true, pizzaType: 'cheese' }
//pizza details:
//- small pizza size
//- cheese

const { Command } = require("commander");
const inquirer = require("inquirer");
const fs = require("fs");

const program = new Command();

program
  .option("-t, --title <title>", "HTML page title")
  .option("-r, --root", "Use top-level <div> with ID 'root'")
  .option("-b, --body <body>", "Body content for the HTML page");

program.parse(process.argv);

const options = program.opts();

const Q = [
  {
    type: "input",
    name: "filename",
    message: "HTML 파일 명을 입력하시오",
    //validate 입력값을 인자로 받아 검증 결과를 반한 true면 유효
    //예시
    // function validateNumber(input) {
    //   const isValid = !isNaN(input) && input !== "";
    //   return isValid || "숫자가 아닙니다.";
    // } input 숫자인지 검증해서 true나 실패메세지 반환
    //isValid 변수에는 true, false 값이 저장됨.

    //입력값이 빈 문자열인지 확인
    validate: (value) => {
      if (value.length) {
        return true;
      }
    },
  },
];
