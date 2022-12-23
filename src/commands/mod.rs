// Help command
use super::interpreter;

pub fn help(){
    println!("PLS WORK BRUH PLS WORK AAAAAAA");
}

pub fn run(args: std::path::PathBuf) {
    interpreter::run_nodejs(args);
}