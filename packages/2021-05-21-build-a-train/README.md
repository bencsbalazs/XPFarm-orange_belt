# `2021-05-21-build-a-train`

>Your job is to return the amount of metal needed to build the train. You are given a string. The string will look something like this:

```str = 'A________'```

Where the 'A' is a type of a locomotive and "_ " is a coach after the train.

## RULES

- A = 15 pieces of metal
- B = 10 pieces of metal
- C = 7 pieces of metal
- D = 8 pieces of metal

The coaches take 5 pieces of metal to make(for each).

## Solution

- User story 1: As a user, I need to know weather the given string contains only correct data.
  - User test 1: Check if the train starts with the correct letter
  - User test 2: Check is there is one or more coaches.
- User story 2: As a user, I need to know how much metal the train needs to create.
  - Check if return is an integer.
  - return is greater than 7.
