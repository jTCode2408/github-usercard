/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/jTCode2408/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'asahmed93',
  'aalvinlin',
  'maggieprice',
  'nicbongo',
  'anamonteiro430'
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitCards (data){
  const cardHolder = document.createElement('div');
  const newImg = document.createElement('img');
  const newInfo = document.createElement('div');
  const newName = document.createElement('h3');
  const newUsername = document.createElement('p');
  const newLocation = document.createElement('p');
  const newProfile = document.createElement('p');
  const newPageLink = document.createElement('a');
  const newFollowers = document.createElement('p');
  const newFollowing = document.createElement('p');
  const newBio = document.createElement('p');

  

  cardHolder.classList.add('card');
  newInfo.classList.add ('card-info');
  newName.classList.add('name');
  newUsername.classList.add ('username');//class add

  
  cardHolder.appendChild(newImg);
  cardHolder.appendChild (newInfo);
  newInfo.appendChild (newName);
  newInfo.appendChild (newUsername);
  newInfo.appendChild (newLocation);
  newInfo.appendChild (newProfile);
  newInfo.appendChild (newFollowers);
  newInfo.appendChild (newFollowing);
  newInfo.appendChild (newBio);

  newProfile.textContent = 'Profile: ';
  newProfile.appendChild(newPageLink); //append children


 newImg.src = data.avatar_url;
 newLocation.textContent = `Location: ${data.location}`;
 newName.textContent = data.name;
 newUsername.textContent = data.login;
 
 newPageLink.textContent = data.html_url;
 newPageLink.href= data.html_url;
 newFollowers.textContent = `Followers: ${data.followers}`;
 newFollowing.textContent = `Following: ${data.following}`;
 newBio.textContent = data.bio;



 //add content to show on page

return cardHolder;

}//compenent function end


const cardBody = document.querySelector('.cards');

axios.get('https://api.github.com/users/jTCode2408')
  .then(response => {
    console.log(response.data);
  
     const newCard = gitCards(response.data);
     cardBody.appendChild(newCard);
 })
 .catch (error => {
   console.log (error);
 })


    followersArray.forEach(user => {
      axios.get(`https://api.github.com/users/${user}`)
  .then (response => {
const friendsCards = gitCards(response.data);
cardBody.appendChild(friendsCards);
    })
  })



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
