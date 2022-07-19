console.log("Sync Call")

const wait  = ()=>
{
  console.log('js part is starting');
  let start = new Date().getTime();
  while(new Date().getTime() - start < 5000);
  console.log('js part ends')
}