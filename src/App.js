import react, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop', price:'$250'},
    {name:'Facebook', price:'$1550'},
    {name:'PubG', price:'$1050'},
    {name:'You tube', price:'$1550'},
  ]

  const actors=['Razzak', 'Joshim', 'Atm', 'Salman Shah', 'Bappi', 'Arfin Shuvo']
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hello  World!</h1>
        
        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            actors.map(actor=><li style={listStyle}>{actor}</li>)
          }

          {
            products.map(product=><li style={listStyle}>{product.name}</li>)
          }

          {
            products.map(product=><Product product={product}></Product>)
          }
        </ul>
        <Person name='Kishor Tripura' profession='Web Developer' number='1234588788'></Person>
        <Person name='Andrew Bodola Tripura' profession='Web Developer' number='1234588788'></Person>
        <Person name='Suren Tripura' profession='Web Developer' number='1234588788'></Person> <br/>
      </div>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      <ul>
        {
          users.map(user => <li style={listStyle}>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handlerIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Dislike</button>
      <button onMouseMove={ () => setCount(count + 1)}>like</button>
    </div>
  )

}
function Person(props){
  const personStyle={
   border:'10px solid gold',
   borderRadius:'10px',
   margin:'5px',
   padding:'5px',
   width:'500px',
   backgroundColor:'skyblue',
   color:'black'
  }
  return(
    <div style={personStyle}>
      <h3>Name : {props.name}</h3>
      <h3>Profession : {props.profession}</h3>
      <h3>Number : {props.number}</h3>
    </div>
  )

}
const listStyle={
  border:'10px solid gold',
  borderRadius:'10px',
  margin:'5px',
  padding:'5px',
  width:'500px',
  backgroundColor:'skyblue',
  color:'black',
  listStyle:'none'
}

function Product(props){
  const productStyle={
    border:'10px solid gold',
    borderRadius:'10px', 
    margin:'5px',
    padding:'5px',
    width:'500px',
    backgroundColor:'skyblue',
    color:'black'
  }
  const {name, price} = props.product;
    return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button style={{border:'2px solid black', borderRadius:'5px', color:'red', margin:'5px', padding:'5px', width:'100px', backgroundColor:'green'}}>Buy Now</button>
    </div>
  )
}

export default App;
