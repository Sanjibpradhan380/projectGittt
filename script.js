const reels = [
  {
    username: "john_doe",
    likeCout: 1200,
    isLiked: true,
    commentCount: 150,
    caption: "Sunset vibes 🌅",
    image: "whitewolf.avif",
    userprofile: "profiles/john.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    username: "emma_w",
    likeCout: 980,
    isLiked: false,
    commentCount: 89,
    caption: "Morning workout 💪",
    image: "sunrisingscenary.avif",
    userprofile: "profiles/emma.jpg",
    shareCount: 30,
    isFollowed: false
  },
  {
    username: "travel_guru",
    likeCout: 5420,
    isLiked: true,
    commentCount: 420,
    caption: "Exploring the mountains 🏔️",
     image: "jesuson_cross.jpg",
    userprofile: "profiles/travel.jpg",
    shareCount: 310,
    isFollowed: true
  },
  {
    username: "foodie_life",
    likeCout: 2300,
    isLiked: false,
    commentCount: 210,
    caption: "Street food heaven 😋",
   image: "sunrisingscenary.avif",
    userprofile: "profiles/foodie.jpg",
    shareCount: 95,
    isFollowed: true
  },
  {
    username: "tech_world",
    likeCout: 1800,
    isLiked: true,
    commentCount: 160,
    caption: "New gadget review 🔥",
   image: "lucky.jpg",
    userprofile: "profiles/tech.jpg",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "dance_queen",
    likeCout: 7600,
    isLiked: true,
    commentCount: 680,
    caption: "Dance till you drop 💃",
    image: "sunrisingscenary.avif",
    userprofile: "profiles/dance.jpg",
    shareCount: 540,
    isFollowed: true
  },
  {
    username: "nature_love",
    likeCout: 1450,
    isLiked: false,
    commentCount: 132,
    caption: "Peace in nature 🌿",
    image: "lucky.jpg",
    userprofile: "profiles/nature.jpg",
    shareCount: 60,
    isFollowed: false
  },
  {
    username: "fitness_pro",
    likeCout: 3200,
    isLiked: true,
    commentCount: 290,
    caption: "No excuses today 🏋️",
   image: "dslrcamera.jpg",
    userprofile: "profiles/fitness.jpg",
    shareCount: 170,
    isFollowed: true
  },
  {
    username: "music_beats",
    likeCout: 4100,
    isLiked: false,
    commentCount: 360,
    caption: "Feel the rhythm 🎶",
     image: "beautifulgirl.avif",
    userprofile: "profiles/music.jpg",
    shareCount: 250,
    isFollowed: false
  },
  {
    username: "art_creator",
    likeCout: 2100,
    isLiked: true,
    commentCount: 190,
    caption: "Creating magic 🎨",
     image: "dslrcamera.jpg",
    userprofile: "profiles/art.jpg",
    shareCount: 110,
    isFollowed: true
  }
];

var allreels = document.querySelector('.All-reals')
function addData(){
  var sum=''
reels.forEach(function(elem,idx){
    sum=sum+`<div class="reel">
                    <img src="${elem.image}" alt="">
                   <div class="bottom">
                     <div class="user">
                        <img src="${elem.image}" alt="">
                         <h4>${elem.username}</h4>
                         <button id=${idx} class="follow">${elem.isFollowed?'Unfollow':'Followed'}</button>
                    </div>
                    <h3>${elem.caption}</h3>
                   </div>
                   <div class="right">
                     <div id=${idx} class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                        <h6>${elem.likeCout}</h6>
                     </div>
                     <div class="comment">
                        <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                     </div>
                      <div class="share">
                        <h4 class="share-icon icon"><i class="ri-send-plane-2-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                     </div>
                     <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></h4>
                     </div>
                   </div>
                </div>`
})
allreels.innerHTML = sum;
}

addData();

allreels.addEventListener("click",function(dets){
if(dets.target.className=='like'){
     if(!reels[dets.target.id].isLiked){
       reels[dets.target.id].likeCout++;
  reels[dets.target.id].isLiked=true;
  }else{
     reels[dets.target.id].likeCout--;
  reels[dets.target.id].isLiked=false;
  }
}
if(dets.target.className=='follow'){ // if clicked on follow botton
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed = true;
  }else{
     reels[dets.target.id].isFollowed = false;
  }
}
 
  addData();
})