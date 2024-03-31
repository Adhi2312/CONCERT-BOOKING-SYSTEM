const {User,Events,Tickets}=require("./models.js")


exports.allUsers=async(req,res)=>{

    try {
        const data = await User.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
   
}
exports.createUser=(req,res)=>{

    try{let newUser=new User(req.body);
    newUser.save(req,res);console.log("User created")}
    catch (err) {console.error(err)}
}

exports.createEvent = async (req, res) => {
    console.log("Creating " + req.file);
    try {
        let newEvent = new Events({
            singer_name: req.body.singer_name,
            location: req.body.location,
            date: req.body.date,
            no_of_tickets: req.body.no_of_tickets,
            image: "http://localhost:5000/"+req.file.filename,
            platinum_tickets: req.body.platinum_tickets,
            gold_tickets: req.body.gold_tickets,
            silver_tickets: req.body.silver_tickets
        },
            );
        await newEvent.save();
        res.status(201).send('Event created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating event');
    }
};

exports.bookTicket=(req,res)=>{
    let newTicket=new Tickets(req.body);
    newTicket.save(req,res);
}

exports.cart=async(req,res)=>{
    console.log("hello")
    
    console.log(req.params);
    try {
        const data = await Tickets.find({username:req.params.name.slice(1)});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }


}

exports.readEvent=async(req,res)=>{
    try {
    
        
        const data = await Events.findOne({singer_name:req.params.name.slice(0),date:req.params.date.slice(0)});
        console.log(data);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}
exports.checkUser=async(req,res)=>{
    console.log("hello");
    const data=await User.find({username:req.params.name.slice(1)})
    console.log(data)
    if(data==null){console.log("invalid user")}
    else console.log("logged in mr"+req.params.name)
}
exports.Events=async(req,res)=>{
    try {
        // console.log(req.params.date.slice(0));
        // console.log(req.params.name.slice(0));
        
        const data = await Events.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}
exports.deleteEvent=async(req,res)=>{
    console.log(req.params.name)
    await Events.findOneAndDelete({singer_name:req.params.name})
}

exports.update=async(req,res)=>{
    console.log(req.body.category)
    if(req.body.category=="Platinum")
    {await Events.findOneAndUpdate({singer_name:req.body.singer_name,date:req.body.date},{$inc:{no_of_tickets:-1,platinum_tickets:-1}})}
    else if(req.body.category=="Gold")
    {await Events.findOneAndUpdate({singer_name:req.body.singer_name,date:req.body.date},{$inc:{no_of_tickets:-1,gold_tickets:-1}})}
    else if(req.body.category=="Silver")
    {await Events.findOneAndUpdate({singer_name:req.body.singer_name,date:req.body.date},{$inc:{no_of_tickets:-1,silver_tickets:-1}})}
}
exports.deleteTicket=async(req,res)=>{
    
  try { await Tickets.findOneAndDelete({username:"prithiv"})
  console.log("Ticket deleted")

    }
    catch(err) { console.log(err) }
}

exports.loginUser=async(req,res)=>{
    console.log("User")
    console.log(req.body.userName)
    try {
        const user = await User.findOne({ userName: req.body.userName, password: req.body.password });
        console.log(user);

        if (user == null) {
            return res.status(200).send("user not found");
        } else {
            return res.status(200).send("login sucess");
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
    }

   
  
}
// exports.delete=async(req,res)=>{

// }