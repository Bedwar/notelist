const fecthConsulta =  async () =>{
   const res = await fetch('http://127.0.0.1:3000/consulta')
   // extrain json 
   const consulta = await res.json()
   return consulta
}



