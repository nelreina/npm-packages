# nr-react-form

version 2.0.0
Utility package using redux-form for creating Forms

# NOTE V5.\*

I renamed some of the Objects to make the library more generic.

# Why

Redux form is Awesome but the api have a lot of boilerplate code.
I found myself creating the same form over and over again. I needed a simpler Api.
So I aproach this from a data-structure view point, and created an Api for the most common use cases.

```javascript
{
    firstName: {type: 'text'},
    lastName: {type: 'text'},
}
```

View the
[Demo Site nr-react-form](https://nelreina.github.io/nr-react-form/)
for examples.

# Todo:

- Form works with Bootstrap but must be css library independend
- Support for other input types like textarea, radiobutton etc... Target next version
- Field Array validation
- API Documentation
