import React, { useState } from 'react';
import './CreateEditChanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelDate } from '../../actions/chanelUser';
function CreateEditChanel({ setEditCreateChanelBtn }) {

    // const CurrentUser ={
    //     result:{
    //       email: "xyz@gmail.com",
    //       joinedOn: "2023-12-15T09:57:23.4892",
    //     },
    //   };
      
    const CurrentUser = useSelector((state)=>state.currentUserReducer)
      const [name, setName] = useState(CurrentUser?.result.name);
      const [desc, setDesc] = useState(CurrentUser?.result.desc);
      const dispatch = useDispatch();
      const handleSubmit = () => {
       if(!name){
        alert("Plz Enter Name !");
       }else if(!desc){
         alert("Plz Enter Discription !");
       }else{
          dispatch(updateChanelDate(CurrentUser?.result._id,{
            name:name,
            desc:desc,
          }));
          setEditCreateChanelBtn(false);
          setTimeout(()=>{
            dispatch(login({email:CurrentUser?.result.email }));
          }, 5000);
       }
      }
  return (
    <div className='container-EditChanel'>
         <input
         onClick={()=>setEditCreateChanelBtn(false)} 
          type="submit"
          name='text'
          value={'x'}
          className='ibtn-x'
       />
    <div className="container2-EditChanel">
      <h1>
        {CurrentUser?.result.name ?<> Edit</>:<>Create </>}
          Your Chanel
      </h1>

         <input 
           type='text' 
           placeholder='Enter Your/Chanel name'
           className='ibox'
           name='text'
           value={name}
           onChange={(e)=>setName(e.target.value)}
           />
             <textarea type="text" 
             //id="" cols="30" 
             rows={15} 
             placeholder={'Enter Chanel des'}
             className={"ibox"}
             value={desc}
             onChange={(e)=>setDesc(e.target.value)}
             />
             <input type='submit'
             value={"Submit"}
             onClick={handleSubmit}
             className='ibtn'/>
        </div>
    </div>
  )
}

export default CreateEditChanel