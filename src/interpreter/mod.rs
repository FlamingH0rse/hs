use std::process::Command;

pub fn run_nodejs(_file: std::path::PathBuf) {
    println!("{:?}", _file);
    // You can add more .arg() to pass in args
    let mut child = Command::new("node")
        .arg("./nodejs/index.js")
        .arg(_file)
        .spawn()
        .unwrap();
    child.wait().unwrap();
}