export default async function getDuolingoData(){
    try{  
      const response = await fetch("https://www.duolingo.com/2017-06-30/users?username=stickysheefu", {
      "next":{
        revalidate: 60
      }, 
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
        }
      });
      return response.json();
    }
    catch(error){
      console.log(error);
    }  
  }