# Class Components

- prior to react version 18? there were not hooks
- choose do I make make component a functional or class component
- features on available is class components
  - if you wanted to have state (useState)
  - if you wanted to run lifecycle method  (useEffect)
- you are going to run into class components
- with hooks functional are generally preferred

# basic setup
functional
```javascript
import React from "react";

const List = (props) => {
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default List;
```
class
```javascript
import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    //have to define render
    render(){
        return(
            <div>
                <h1>List</h1>
            </div>
        )
    }
}

export default List
```

# state
functional
```javascript
   // pass initial state to useState function
   // multiple states and setters
  const [state1, setState1]= useState(0)
  const [state2, setState2]= useState('yo')

    //update state1
    ...
   setState1(1)
   ...
```

class
```javascript
   constructor(props){
       super(props)
       // initial state here
       // one state object
       this.state={
          state1: 0,
          state2: 'yo'
       }
   }

   //update state1
   ...
   this.setState({
       state1:1
   })
   ...
```

# props
functional
```javascript
   const Counter(props){
       return (
           <p>{props.header}</p>
       )
   }
```

class
```javascript
       ...
           <p>{this.props.header}</p>
       ...
   }
```

# mount
functional
```javascript
    // need [] as second arg in useEffect to act as componentDidMount
    useEffect(()=>{
        console.log('USEEFFECT: Counter Func mounted')
    },[])
```

class
```javascript
    componentDidMount(){
        console.log('componentDidMount: Counter class mounted')
    }
```

