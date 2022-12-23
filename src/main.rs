mod commands;
mod interpreter;
mod messages;

use std::io::BufRead;
use std::{env, fs, io::Write};

extern "C" {
    pub fn handle_signal();
}

fn read_vec<T>() -> Vec<T>
where
    T: std::str::FromStr,
    <T as std::str::FromStr>::Err: std::fmt::Debug,
{
    std::io::stdin()
        .lock()
        .lines()
        .next()
        .unwrap()
        .unwrap()
        .trim()
        .split_whitespace()
        .map(|s| s.parse::<T>().unwrap())
        .collect::<Vec<T>>()
}

fn main() {
    let mut cmd_args = env::args();
    cmd_args.next();

    if let Some(args) = cmd_args.next() {
        let file = fs::canonicalize(args);
        std::io::stdout().flush().unwrap();

        match file {
            Ok(file) => interpreter::run_nodejs(file),
            Err(e) => println!("error parsing header: {e:?}"),
        }
    } else {
        println!("Welcome to H0rseScript v0.69");
        println!("Type \"hs <file_name>\" to run it.");

        loop {
            unsafe { handle_signal() }
            // let mut input = String::new();
            
            print!(">> "); // fancy design
            std::io::stdout().flush().unwrap(); // Flush the buffer (idk what exactly is this for)

            let input = read_vec::<String>();

            match input[0].as_str() {
                "help" => commands::help(),
                "run" => commands::run(input[1].clone().into()),
                _ => println!("Unknown Command"),
            }
        }
    }
}
