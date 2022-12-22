use std::process::Command;

pub fn run_nodejs(_file: String) {
    Command::new("node")
        .arg("./nodejs/index.js")
        .spawn()
        .expect("Loser Error");
}