const express=require("express")
const cors=require("cors")

const app=express();
app.use(cors())
app.use(express.json())

let items=[];

//get items

app.get("/items",(req,res)=>{
    res.json(items);
})


//post items

app.post("/items",(req,res)=>{
    const newitem={id:Date.now(),name:req.body.name}
    items.push(newitem)
    res.json(newitem)
})

//update items

app.patch("/items/:id",(req,res)=>{
    const item=items.find(i=>i.id==req.params.id)
    if(item){
        item.name=req.body.name
        res.json("item updated!")
        res.json(item)
    }
    else{
        res.json({message:"item not found"})
    }
})

//delete items

app.delete("/items/:id",(req,res)=>{
    items.filter(i=>i.id!==req.params.id)
    res.json("item deleted!")

})

port=5000;
app.listen(port,()=>console.log(`server running on port ${port}`))