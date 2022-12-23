mod commands;
mod interpreter;
mod messages;

use std::fs;
use std::{env, io::Write};

extern "C" {
    pub fn handle_signal();
}

fn main() {
    let mut cmd_args = env::args();
    cmd_args.next();

    if let Some(args) = cmd_args.next() {
        // The cmd_args[0] contains the file location of the program itself
        let file = fs::read_to_string(args);
        std::io::stdout().flush().unwrap();

        // nigger make it convert the path to absolute path AAAAAAAAAAAAAAAAAAAA
        
        match file {
        Ok(file) => interpreter::run_nodejs(file),
        Err(e) => println!("error parsing header: {e:?}"),
        }
    } else {
        println!("Welcome to H0rseScript v0.69");
        println!("Type \"hs <file_name>\" to run it.");

        loop {
            unsafe { handle_signal() }
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
