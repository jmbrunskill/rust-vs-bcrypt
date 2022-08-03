use bcrypt::hash;

fn main() {
    const PASSWORD: &str = "aReallySecurePassword";
    const ROUNDS: u32 = 12;
    const ITERATIONS: u32 = 100;
    for _i in 0..ITERATIONS {
        let _result = hash(PASSWORD, ROUNDS).unwrap();
    }
}
