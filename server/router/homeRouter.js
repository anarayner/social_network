import {Router} from 'express'
const router = new Router();

router.get('/user', (req, res)=>{
    res.send("welcome")
})



export default router;