extern crate cc;

fn main() {
    cc::Build::new()
        .file("src/handle_signal.c")
        .compile("libsignal.a");
}