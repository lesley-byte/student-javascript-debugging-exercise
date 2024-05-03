# Debuging Instructions

## Open the File in VS Code:

- [ ] Make sure the JavaScript file is open in Visual Studio Code.

## Set Breakpoints:

- [ ] Place a breakpoint on the line inside the findMax function where the comparison takes place:

  ```javascript
  (if (numbers[i] > max)).
  ```

  > Another useful breakpoint could be at the start of the loop to observe the initialization and updates of `max` and `i`.

## Start Debugging:

- [ ] Open the Run and Debug sidebar by clicking the play icon in the Activity Bar.
- [ ] Select "Run and Debug" (choose Node.js if prompted to select an environment).

## Step Through the Code:

- [ ] Use the "Step Over" feature to move through each iteration of the loop.
- [ ] Watch how the value of `i` increments and how the `max` variable is updated when a larger number is found.

## Examine Variables:

- [ ] Use the Variables pane in the Debug view to watch the changes to the `max` and `i `variables as you step through each loop iteration.

## Continue and Finish:

- [ ] Use the "Continue" button to jump to the next breakpoint or run to the end of the function after examining the necessary steps.
