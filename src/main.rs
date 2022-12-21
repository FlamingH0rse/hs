use std::{env, io::Write};

fn main() {
    let mut cmd_args= env::args();

    cmd_args.next();

    if let Some(args) = cmd_args.next() {
        println!("sup");
        println!("{args}");
    } else {
        // If there are no arguments specified open the program instead (Similar to Python ande Node.js)
        println!("Welcome to H0rseScript v1.0.");
        println!("Type \"hs <file_name>\" to run it.");
       
        loop {
            print!(">> "); // fancy design
            std::io::stdout().flush().unwrap(); // Flush the buffer (idk what exactly is this for)
            let mut input = String::new();
            std::io::stdin().read_line(&mut input).expect("nerd u suck");
        }
    }
}

