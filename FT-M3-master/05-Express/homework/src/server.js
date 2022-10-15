// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
const PATH = '/posts'
let id = 1;

server.post(PATH,(req, res) => {
let author = req.body.author
let title = req.body.title
let contents = req.body.contents
if(!author || !title || !contents){
    return res
    .status(STATUS_USER_ERROR)
    .json({
        error:'No se recibieron los parametros necesarios para crear el Post'
    });
}
    const post = {
        author,title,contents,id:id++
    };
    posts.push(post);
    res.status(200).json(post);


});

server.post(`${PATH}/author/:author`,(req,res)=>{
    let {author}= req.params;
    let {title, contents} = req.body;

    if(!author || !title || !contents){
        return res
        .status(STATUS_USER_ERROR)
        .json({
            error:'No se recibieron los parametros necesarios para crear el Post'
        });
    }
        const post = {
            author,title,contents,id:id++
        };
        posts.push(post);
        res.status(200).json(post);    
})

server.get(PATH, (req,res)=>{
    let {term} = req.query;
    if(term)
    {
        const term_posts = post.filter (p => p.title.includes(term)||p.contents.includes(term));
    return res.json(term_posts);
}
});

module.exports = { posts, server };
