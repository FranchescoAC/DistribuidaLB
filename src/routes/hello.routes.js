import {Router} from 'express'
import os from 'os';

const router = Router()

router.get('/', (req, res)=>{
    const hostname = os.hostname();
    res.send(`If load balancer works, this change :) ${hostname}`)
})

export default router