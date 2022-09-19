const router = require("express").Router()
const resturaunts = require("../assets/resturaunt.json")

router.get("/", (req,res) => {
    console.log (resturaunts)
    res.json({
        message:"Hello from homepage",       
})
})

router.get("/search", (req,res) => {
    console.log(req.query.cuisine)
    const filterData = resturaunts.filter(resturaunt => resturaunt.cuisine.includes(req.query.cuisine))
    res.json({
        message:"Hello from Search",
        data:filterData
    })
})


router.get("/:id",(req,res) => {
    console.log(req.params)
    const filterData = resturaunts.filter(resturaunt => resturaunt.id == req.params.id)
    res.json({data:filterData})
})


module.exports = router