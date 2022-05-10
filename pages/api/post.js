import Twit from "twit";

export default function handler(req, res){
    const T = new Twit({
        consumer_key: process.env.API_KEY,
        consumer_secret: process.env.API_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    });
    const text = req.body.text
    const onFinish = (err, reply) => {
        if (err) {
          console.log("Error: ", err.message);
        } else {
          console.log("Success: ", reply);
          res.status(200).send({reply})
        }
      };
    
      // T.post("statuses/update", { status: text }, onFinish);
}