# Rust vs Bcrypt

## Huh, what is all about?

If you are anything like me, you may have noticed that rust seems slower than javascript when computing bcrypt hashes (often used to protect passwords on websites).

This repo was created to compare the speed, and document the findings.

## Yeah, I get it but what's the result?

Running 100 iterations of bcrypt hashing, each with 12 rounds.
Results from an M1 MacBook Pro in 2022:

| Command                             | Total Time |
| ----------------------------------- | ---------- |
| time node js/bcrypt.js (Javascript) | 27s        |
| time cargo run (rust)               | 132s       |

What! Rust is almost 5 times slower than javascript, isn't rust supposed to be fast?

My first thought was that the rust code hasn't been optimised as much as the javascript code. The thought of optimisation gave me an idea though, so I built a optimised 'release' binary.
`cargo build --release`

Here's the updated table

| Command                                             | Total Time |
| --------------------------------------------------- | ---------- |
| time ./target/release/bcrypt-speed (optimised rust) | 24s        |
| time node js/bcrypt.js (Javascript)                 | 27s        |
| time cargo run (rust)                               | 132s       |

Turns out rust's optimser actually does stuff...
