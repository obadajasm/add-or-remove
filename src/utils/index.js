export const generateUniqueID= ()=>{
   return Date.now() + Math.random() + '';
}

export const getIndexWithCopyList=(list,attr,comp)=>{
   if(!list  && !attr && !comp ) return;
   const temp = [...list];
   return [temp,temp.findIndex((e)=>e[attr] ===comp )]
   
}