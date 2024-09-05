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
  let state; // The state is a 4x4 array of bytes
  // AES defined functions and constants:
  let Sbox = [
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b 0x6f 0xc5 0x30 0x01 0x67 0x2b 0xfe 0xd7 0xab 0x76
  ];
}
