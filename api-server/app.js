const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { registerUser } = require('./registerUser');
const {tx} = require("./tx");
const {query} = require("./query");

app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000')

})

app.post('/register', async (req, res) => {
   try {
       let orgMSP = req.body.orgMSP;
       let userId = req.body.userId;
       let response = registerUser({ OrgMSP:orgMSP, userId:userId });
       res.send(response);
   } catch (e) {
       res.send(e);
   }
});

app.post("/tx", async (req, res) => {
   var request = {
       chaincodeName: req.body.chaincodeName,
       channelName: req.body.channelName,
       userId: req.body.userId,
       org: req.user.orgMSP,
       data: req.body.data,
   }

   let result = await tx(request);
   res.send(result);
});

app.post("/query",async(req,res)=>{
    try {
        var request={
            chaincodeName:req.body.chaincodeName,
            channelName:req.body.channelName,
            userId:req.body.userId,
            org:req.body.orgMSP,
            data:req.body.data
        }
        let result=await query(request);
        res.send(JSON.parse(result.toString()));
    } catch (error) {
        res.send(error)
    }
})