It's been awhile but here's another Whaleshares Javascript tutorial! Today is a little bit more complicated, but still easy to grasp. I felt that this script is important. It tells you how many witnesses each of your followers vote for. And what percentage overall do your followers vote with 30 votes.

![Hosted on Imgur](https://i.imgur.com/2hwlkXt.png)

# First off
Today I made something called a git repo for all of these tutorials to live. In [this](https://github.com/polarityapp/wlsjs-tutorials) repo will be the code, and transcripts to my posts so you can review, run, and make new scripts.

## To get started
Go [here](https://github.com/polarityapp/wlsjs-tutorials/blob/master/README.md) and do the installation steps. Then you'll be all set.

## The script
You can open the index.js under the lesson_two folder. In here you will find the final script.

### Commentary
On lines 1 and 2 you have
```javascript
const wls = require("@whaleshares/wlsjs")
wls.api.setOptions({ url: 'wss://whaleshares.io/ws' })
```
These take all of the code snippets we need from the node package manager, and stores it in the variable wls. Then we set the rpc's url so we can connect to the actual blockchain.

Lines 4 and 5:
```javascript
let total_followers = 0
let total_witness_votes = 0
```
setup variables we'll need later. I set them both to 0 so node knows their numbers.

Lines 9 and 31:
```javascript
wls.api.getFollowers('kennybll', start, 'blog', 100, function(err, res) {})
```
get's the followers to any account. Right now it's set to my account, but you can remove kennybll, and add whatever Whaleshare's account you want. It grabs the first 100, but if you have more than 100 followers it will run this function on line 7 again.

Lines 11 through 13:
```javascript
let accounts = res.map(function(follower) {
  return follower.follower
})
```
loops through all of the data we got back from the blockchain and lists our followers.

Line 14:
```javascript
total_followers += accounts.length
```
we add the amount of followers to the variable total_followers to find the percentage later.

Line 15 and 29:
```javascript
wls.api.getAccounts(accounts, function(err, results) {})
```
gets the accounts for all of our followers.

The in lines 16 through 24:
```javascript
results.forEach(function(account) {})
```
we loop through each account and add the amount of witnesses they voted for to the global variable total_witness_votes and then console their name and the number of votes:
```javascript
total_witness_votes += account.witnesses_voted_for
console.log(account.name + ' has ' + account.witnesses_voted_for + ' witnesses that they voted for.')
```

Then lines 25 through 28:
```javascript
if(results.length === 100) {
  getFollowers(accounts[99])
}
resolve()
```
make the function run again but will start with the last followers we got data for. This will make sure if you have over 100 followers, you can still get all of them.

Then lines 35 through 43 tie it up:
```javascript
getFollowers().then(function() {})
```

Line 36 calculates out of all the witness votes your followers have this is how many they vote for and makes it into a percentage:
```javascript
total_witness_votes /= total_followers * 30 / 100
```

Then lines 37 through 42 just print out the data.
```javascript
console.log('Your followers witness votes are ' + total_witness_votes.toFixed() + '% full.')
```

### Why this script
Earlier I said I feel this script is important. This is because witness voting is one type of voting you can't skip on. Other than the users, the witnesses are the backbone of the blockchain. With that said there are 20 top positions that make most of the descisions on hardforks, and get paid every 66 seconds. This being said it is important to make sure you have people you want in the top 20, and not people you don't. One thing I have is only having 30 votes. I use them all. Why? Because this is a decentralized system. I believe if I don't vote for the witnesses I want, then I have no say in how the platform goes. This is because those witnesses have a higher chance of making descisions for me about the platform.

Now saying that you might notice I don't vote for my own witness, but for some of the lower witnesses. This is because there are a lot of good witnesses out there (it's really hard), but voting for myself doesn't help the other witnesses gain positions that should.

Also if you didn't know I have a witness @kennybll-witness on Whaleshares. I would appreciate votes, but they are not required. Meaning as much as I would love the votes (and many have free ones), I know there's a lot of good witnesses, and can understand not getting a lot of votes. It's fine with me. I'm here for the community.

I want to thank all those who read this. I will always appreciate any tips given. Also if there is some type of script or bot, or anything you would like to learn how to do, please write it in the comments below :)

@kennybll