import React from 'react';

class PageTitle extends React.Component<{ name: string }>{
  render(){
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"white",fontFamily:"var(--bs-font-sans-serif",margin:"auto",fontSize:"3em",fontWeight:"normal"}}>{this.props.name}</h1>
    </div>
  );}
}

export default PageTitle;
