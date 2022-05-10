import React from 'react'
import LoginWithTwitter from 'login-with-twitter'
export default function Logic() {
    const handleLogin = () => {
        const tw = new LoginWithTwitter({
            consumerKey: process.env.CONSUMER_KEY,
            consumerSecret: process.env.CONSUMER_SECRET,
            callbackUrl: 'twitter/callback'
        })
        tw.login((err, tokenSecret, url) => {
            if (err) {
              // Handle the error your way
            }
            
            // Save the OAuth token secret for use in your /twitter/callback route
            req.session.tokenSecret = tokenSecret
            
            // Redirect to the /twitter/callback route, with the OAuth responses as query params
            res.redirect(url)
          })
    }
  return (
    <div>login</div>
  )
}
