const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  console.log('serializeUser', user)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser', id)
  User.findById(id)
    .then(user => {
      done(null, user)
    })
    .catch(err => {
      done(err, null)
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }

      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
    }
  )
)
