# @nelreina/react-list

version 2.0.0
Utility Component to render an iterator(Array of objects)

## List with an "item" prop

```javascript
const data = ["one", "two", "three"];
const Button = ({ item }) => <button>{item}</button>;

// Use List Component
// Notice the button component has an "item' prop
// By default List component expect an item prop

<List of={Button} iterator={data} />;
```

### Will render

```html
    <button>one</button>
    <button>two</button>
    <button>three</button>
```

## List with a custom propname

```javascript
const navs = ['Home', 'About', 'Contact'];

const NavLink = ({ display }) => <li>{display}</li>;

// just add a custom "propname" prop to List Component
render () {
    return (
        <ul>
            <List of={NavLink} iterator={navs} propname="display" />
        </ul>

    )
}
```

### Will render

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```
