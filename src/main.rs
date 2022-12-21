use std::env;

fn main() {
    let cmd_args: Vec<String> = env::args().collect();
    println!("{:?}", cmd_args);
}
