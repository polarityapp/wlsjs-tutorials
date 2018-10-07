const wls = require("@whaleshares/wlsjs")
wls.api.setOptions({ url: 'wss://whaleshares.io/ws' })

let total_followers = 0
let total_witness_votes = 0

function getFollowers(start = '') {
  return new Promise(function(resolve, reject) {
    wls.api.getFollowers('kennybll', start, 'blog', 100, function(err, res) {
      if(!err) {
        let accounts = res.map(function(follower) {
          return follower.follower
        })
        total_followers += accounts.length
        wls.api.getAccounts(accounts, function(err, results) {
          results.forEach(function(account) {
            total_witness_votes += account.witnesses_voted_for
            console.log(
              account.name +
              ' has ' +
              account.witnesses_voted_for +
              ' witnesses that they voted for.'
            )
          })
          if(results.length === 100) {
            getFollowers(accounts[99])
          }
          resolve()
        })
      }
    })
  })
}

getFollowers().then(function() {
  total_witness_votes /= total_followers * 30 / 100
  console.log(
    '\x1b[36m' +
    'Your followers witness votes are ' +
    total_witness_votes.toFixed() + '% full.' + 
    '\x1b[0m'
  )
})