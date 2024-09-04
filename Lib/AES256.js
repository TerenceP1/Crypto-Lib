/*
Documentation:
This function follows the following specification
https://csrc.nist.gov/files/pubs/fips/197/final/docs/fips-197.pdf


function AES256:

Parameters:

text:
An array of 16 bytes representing plaintext
or cyphertext. Each byte is represented as
an integer

key:
An array of 32 bytes representing the key.
Each byte is represented as an integer.

isDecypherMode:
True if decyphering cyphertext. False
otherwise.
*/

function AES256(
  text, // Plaintext/Cyphertext
  key,
  isDecypherMode
)
{
  let state;
  // AES defined functions and constants:
  
}
