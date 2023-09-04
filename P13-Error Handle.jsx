/*
Q. How to handle erorr in react ?

Ans. Erorr Boundries are react components that catch the Javascript error
     anywhere in their child components tree. log those error and display 
     fallback ui instead of components tree that crashed.

     Error Boundries  does not catch errors from --
     ● Event Handlers
     ● Asynchronus code
     ● Server side rendring 
     ● Error throw in the error boundries. */