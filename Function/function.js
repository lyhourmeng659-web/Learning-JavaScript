// Reuseble code with specfic responsibility
// Example: we want to piece of code that performs calulation with array
// Have parameters No return
// 1. No parameters No return
function do_something_no_parameter_no_return() {
  console.log("Hello world");
}

// 2. Have parameters No return
function do_something_with_parameter_no_return(x) {
  console.log("Hello world", x);
}

// 3. No parameters with return
function do_something_no_parameter_with_return() {
  console.log("Hello world");
  return 1;
}

// 4. Have parameeters with return
function do_something_with_parameter_with_return(x) {
  console.log("Hello world", x);
  return 1;
}

// To use function, we need to make function call
// 4 Types of functions:
// 1. No parameters No return
// 2. Have parameters No return
// 3. No parameters with return
// 4. Have parameeters with return
do_something_no_parameter_no_return();
do_something_with_parameter_no_return("from javascrip");
do_something_no_parameter_with_return();
do_something_with_parameter_with_return("from javascript");
const a = do_something_with_parameter_with_return(false);
console.log(a);
