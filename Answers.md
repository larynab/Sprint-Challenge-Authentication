1. What is the purpose of using _sessions_?

Sessions is a unique recording of a user's time logged in accessing data. Each session has information and configuration such as session id, time to expire, authroization.

1. What does bcrypt do to help us store passwords in a secure manner.

When as password is created it is mutated into cryptography. Bcrypt uses hashing in a way that each symbol of the password is turned into a batch of symbols in a special pattern that only the encryption can read. The password is never seen on the password only the hash. This is secure because you would need the encryption software and keys to decode it.

1. What does bcrypt do to slow down attackers?

When information is encrypted/hashed it does so in a unique pattern that only engine knows how to read it. Attackers would need to know what the configuration was used to create such patterns which takes time.

1. What are the three parts of the JSON Web Token?

Header. Payload. Signature.