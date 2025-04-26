let posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:2, title: 'Post Two'}
]

exports.getAllposts = (req, res) => {
    res.json(posts);
}

exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id == id);

    if(post){
        res.json(post);
    }
    else{
        res.status(404).json({message: 'Post Not Found'});
    }
};

exports.createPost = (req, res) => {
    const newPost = {
        id:posts.length+1,
        title:req.body.title
    };
    posts.push(newPost);
    res.status(201).json(newPost);
}

