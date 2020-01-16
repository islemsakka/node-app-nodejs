const fs=require('fs')


var ReadFile = () => {
    try {
      return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err) {
      return [];
    }
  }
const add=(title,body)=>{
    let tab=ReadFile()
    
    let note={
        title:title,
        body:body
    }
    tab.push(note)
 fs.writeFileSync('notes.txt',JSON.stringify(tab))
 console.log(tab)
}
const list=()=>{
    try{
        return console.log(JSON.parse(fs.readFileSync('notes.txt')))

    }catch{console.log('error')}
} 
const remove=(titre)=>{
    try {
       let tab= JSON.parse(fs.readFileSync('notes.txt'))
      fs.writeFileSync('notes.txt',JSON.stringify(tab.filter(e=>e.title!==titre)))
    console.log(JSON.parse(fs.readFileSync('notes.txt')))

    }catch {console.log('error')}
}
const fetsh=(titre)=>{
    try{
        let tab= JSON.parse(fs.readFileSync('notes.txt'))
     console.log(tab.filter(e=>e.title===titre))

    }catch {console.log('error')}
}

module.exports={add,
list,
remove,
fetsh,}