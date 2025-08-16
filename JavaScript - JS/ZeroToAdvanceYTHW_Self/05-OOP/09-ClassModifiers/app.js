// Example using closures for private and protected number
function MyClass(publicField, privateField, protectedField) {
  // Public Field
  this.publicField = publicField;

  // Private Field (closure)
  const _privateField = privateField;

  // Protected Field (closure)
  const _protectedField = protectedField;

  // Public Method
  this.publicMethod = function () {
    return `Public Field: ${this.publicField}`;
  };

  // Private Method (closure)
  function _privateMethod() {
    return `Private Field: ${_privateField}`;
  }

  // Protected method (closure)
  function _protectedMethod() {
    return `Protected Field: ${_protectedField}`;
  }

  // Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObject = new MyClass("Public data", "Private data", "Protected data");

console.log(myObject.publicField); // Accessing publid field
console.log(myObject.publicMethod()); // Accessing public method

// These lines will cause errors since they access private and protected members directly.
// console.log(myObject.privateField); // Error: privateField is not defined
// console.log(myObject._privateMethod()); // Error: _privateMethod is not a function
// console.log(myObject.protectedField); // Error: protectedField is not defined
// console.log(myObject._protectedMethod); // Error: _protectedMethod is not a function

console.log(myObject.accessProtectedMethod()); // Accessing protected method indirectly
