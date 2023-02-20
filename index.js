const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlrender");

const questions = [
  {
    type: "list",
    name: "role",
    message: "What is team member's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the team member's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What the team member's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team member's email?",
  },
];