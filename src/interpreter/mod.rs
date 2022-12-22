use std::process::Command;

pub fn run_nodejs(_file: String) {
    // You can add more .arg() to pass in args
    Command::new("node")
        .arg("./nodejs/index.js")
        .spawn()
        .expect("Loser Error");
}