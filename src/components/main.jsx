import React from "react";

export default function Main(props) {
  return (
  
    <div  className="mt-5 col-4 m-auto ">
      <form onSubmit= {props.action === "add"? props.addContent : props.submitEdit} 
      
      autoComplete="off" className="container text-center mt-5">
        <input
          type="text"
          name="name"
          onChange={props.change}
          className="form-control  "
          placeholder="firstname"
        />

        <input
        type="text" 
        name="avatar"
        onChange={props.change}
        className="form-control   " 
        placeholder="image" />
        
        <button type="submit" className="btn-danger p-2 m-3 rounded-pill">
         {props.btn}<i className= {props.icon} ></i>
        </button>
      </form>

      <div className="">
        <ul className="list-group mt-5">
          {props.all_data.map((l) =>  
          {
           
            return (
              
              <li 
              key={l.id}
              className="list-group-item  d-flex justify-content-between ">
                <div className=" d-flex align-items-center ">
                  <img src={l.avatar} height={80}
                  width="100px"
         alt="" className="border " />
                  <h3 className="mx-5">{l.nickname}</h3>
                </div>

                <div className="d-flex justify-content-end m-auto">
                  <button type="button" className="btn btn-secondary m-1">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button type="button" onClick={()=>props.edit(l)} className="btn btn-warning m-1">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                  onClick={()=>props.delete(l.id)}
                  type="button" className="btn btn-danger m-1">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    
    </div>
   
  );
}
