## Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

## Task
Write a function which takes a input string s and return a string in the following way:

````

                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
`````

## Notes:

1. List all the Vowels on the right side of |
1. List every character except Vowels on the left side of |
1. for the purpose of this kata, the vowels are : a e i o u
1. Return every character in its original case
1. Each line is seperated with \n
1. Invalid input `( undefined / null / integer )` should return an empty string