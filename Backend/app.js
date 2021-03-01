const express= require('express');

const app=express();

app.use("/api/posts",(req,res,next)=>{
  const posts=[
    {
    id:"asd12394",
    title:'first server side post',
    content: 'this is coming soon'

    },
    {
      id:"Ski23233",
      title:'second server side post',
      content: 'this is coming soon'

    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts
  });
});


module.exports=app;
