import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoCategory from './TodoCategory';
import unsplash from './unsplash.jpg';

import './App.css';

const App = () => {


  return(

    <>
    
    <Header ClassName='top-header' id='header' title ='This isthe header'>
      <h1>Identify and Solve Work & Life Balance🚵🏃🏃🚵📖🧘😴👪</h1>
      <img src={unsplash} className="App-logo"/>
    </Header>
    <div class="App1">
    <TodoCategory title= "Professional Task" />
    <TodoCategory title= "Personal Task" />
    <TodoCategory  title= "Health & Fitness" /> 
    <TodoCategory title= "Learning and Growth" />
    <TodoCategory title= 'Social & Family' />
    </div>
    
    <Footer />
    
    </>
  );
  }
  export default App;