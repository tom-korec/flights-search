# How to run the app:

1. *yarn install*

2. *yarn start*

3. *cd ./server*

4. *yarn start* 


App should be available on localhost:3000

App uses simple express proxy server

## Description

I did not use any global state management tool, because the state is not too complex, but if I should (for demo 
purposes), I would use React context with useReducer.

For the similar reason I did not use any library for forms management. If I should, I would use Formik with Yup. 

I used styled-components for styling. Theme with colors and shared variables are in folder styles. There are also 
global styles and shared styles. Component specific styles are in the same file as the component. In larger 
applications it would be reasonable to move those styles to separated file.

Tests use jest with enzyme.   