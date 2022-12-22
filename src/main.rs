mod commands;
mod interpreter;

use std::{env, io::Write};

fn main() {
    let mut cmd_args= env::args();

    cmd_args.next();

    if let Some(args) = cmd_args.next() {
        println!("sup");
        println!("{args}");
    } else {
        // If there are no arguments specified open the program instead (Similar to Python ande Node.js)
        print! ("\x1B[2J\x1B[1;1H");
        println!("Welcome to H0rseScript v0.69");
        println!("Type \"hs <file_name>\" to run it.");
       
        loop {
            let mut input = String::new();
            print!(">> "); // fancy design
            std::io::stdout().flush().unwrap(); // Flush the buffer (idk what exactly is this for)
            std::io::stdin().read_line(&mut input).expect("err");
            
            match input.as_str().trim() {
                "help" => commands::help(),
                _ => println!("Unknown Command"),
            } 
        }
    }
}

