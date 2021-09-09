#!/usr/bin/env deno
// deno-language: js

import parseArgs from 'https://deno.land/x/deno_minimist@v1.0.2/mod.ts';
import  User  from "./models/userModel.js";

const defaultOutputFileName = "users_spec";

const { filter , out } = parseArgs(Deno.args);

const inputFileName ="data";
const outputFileName = out || defaultOutputFileName;

 const getUsersFromFile = () => { //получение users из файла  data.json
	try {
		let data =  Deno.readTextFileSync(`${inputFileName}.json`); 
		let { users } = JSON.parse(data); 
		return  users.map(x => new User({ ...x })); 	
	} catch (err) { 
		console.error(err); 
		throw err;
	}
};

const setUsersToFile = (users) => { //запись результата в файл
	try {
		Deno.writeTextFileSync(`${outputFileName}.json`, JSON.stringify({ users })); 
	} catch (err) { 
		console.error(err); 
		throw err;
	}
};

let users = getUsersFromFile();

if (filter) {
    const filterBy = (input) => {
        const reg = new RegExp(input, 'i')
        return u => {
          for (let prop in u) {
            if (!u.hasOwnProperty(prop)) {
              continue;
            }
            if (reg.test(u[prop])) {
              return true;
            }
          }
          return false;        
        }
      }
      
  users = users.filter(filterBy(filter))
      
      }	
      
setUsersToFile(users);