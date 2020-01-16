console.log("Starting")

const yargs=require("yargs")
const note=require('./note')

const title=yargs.argv.title
const body=yargs.argv.body
const command= yargs.argv._[0]

if(command==="add") {
    console.log(`adding:`)
    note.add(title,body)
}
else if (command==="List"){
    console.log("listing:")
   note.list()    
}
else if (command==="remove"){
    console.log("removing:")
    note.remove(title)
}
else if (command==="fetsh"){
    console.log("fetshing:")
    note.fetsh(title)
}
else {console.log("erreur")}