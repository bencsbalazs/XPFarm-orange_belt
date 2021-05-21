# `2021-05-19-last-survivor`

> You are given a string of letters and an array of numbers.
> The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
> After each removal the size of the string decreases (there is no empty space).
> Return the only letter left.

## Example

`let str = "zbk", arr = [0, 1]`

`str = "bk", arr = [1]`

`str = "b", arr = []`

`return 'b'`

## Notes

- The given string will never be empty.
- The length of the array is always one less than the length of the string.
- All numbers are valid.
- There can be duplicate letters and numbers.

## Solution

- User story 1: As a user, I need to know wheather the input variables are correct
  - User test 1: First user variable is a string
  - User test 2: Second variable is an array
- User story 2: As a user, I need to know what will be the remaining letter
  - User test 1: The array is sorter than the string
  - User test 2: Remaining letter is correct
