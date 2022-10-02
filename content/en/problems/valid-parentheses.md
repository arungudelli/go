## Problem Statment

Given a string input containing just the characters '(', ')', '{', '}', '[' and ']'.

Check if the input string is valid or not.

The string is valid only if

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Approach : (Using Stack)

The algorithm involves checking whether a given string of parenthesis is valid or not. It is a standard DSA question often asked in interviews. 

The goal is to stack all of the opening brackets. When you hit a closing bracket, look to see if the opening bracket of the same type is at the top of the stack. If this is true, then pop the stack and carry on with the iteration. if the stack is empty at the end, all of the brackets are correctly created. They are not balanced if not.

```python
def checkBalanced(expr):
	stack = []

	# iterating through the string
	for char in expr:
		if char in ["(", "{", "["]:

			# if opening, push the element in the stack
			stack.append(char)
		else:

			# if current character is closing, stack cannot be empty
			if not stack:
				return False
            
			current_char = stack.pop()
			
            # check for corresponding parenthesis
            if current_char == '(':
				if char != ")":
					return False
			if current_char == '{':
				if char != "}":
					return False
			if current_char == '[':
				if char != "]":
					return False

	# Check if the stack is empty or no
	if stack:
		return False
    else:
	    return True


if __name__ == "__main__":
    # declaring a string
	expr = "{()}[]"

	# call the function
	if areBracketsBalanced(expr):
		print("VALID")
	else:
		print("INVALID")
```

- Time Complexity: O(n)
- Space complexity: O(n)

## Summary

The valid parentheses problem involves checking that:

- All the parentheses are matched, i.e., every opening parenthesis has a corresponding closing parenthesis.
- The matched parentheses are in the correct order​, i.e., an opening parenthesis should come before the closing parenthesis.

This is a standard question using the stack data structure. It is often found in interviews and coding rounds and should definitely be familiarized with.
