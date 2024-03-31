const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const user=new Schema(
    {
        userName:{
            type:"string",
            
        },
        password:{
            type:"string"
            
  },
    

        email:{
           type: 'string',
            

        },
        mobileno:{
            type: "number",
            
        }
    }
)

const ticket = new Schema(
    {
        singer_name:{
            type:"string",
            
        },
        username:{
            type:"string",
            
        },
        ticket_category:{
            typeof:"string",
            
        },
            date:{
            type:"string",
            
        }
        ,
        location:{
            type:"string",
        
        }
    }
)
const Event=new Schema(
    {
        singer_name:{type:"string", },
        location:{type:"string", },
        date:{type:"string",},
        no_of_tickets:{type:"number", },
        image:{type:String},
        platinum_tickets:{type:"number", },
        gold_tickets:{type:"number",},
        silver_tickets:{type:"number", }
    }
)

const User = mongoose.model('User', user);
const Events = mongoose.model('Events', Event);
const Tickets = mongoose.model('Tickets', ticket);

module.exports = { User, Events, Tickets };
