const client= require("./client");

async function init(){
    const result=await client.get("age:2");
    console.log(result);
}
init();