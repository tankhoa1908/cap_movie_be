let successCode = (res,data,message):any=>{
return    res.status(200).json({
     message,
     content:data
    })
 };
 let failCode = (res,data,message):any=>{
return      res.status(400).json({
      message,
      content:data
     })
  };
  let errorCode = (res,message):any =>{
   return  res.status(500).json({
      message,
     })
  };
 
 
  export {successCode ,failCode,errorCode};