document.getElementById('apply-bg').addEventListener('click',function(){
    // console.log('apply background')
    const friends= document.getElementsByClassName('friend');
    // console.log(friends)
    for(const friend of friends){
        // console.log(friend)
        friend.style.backgroundColor = 'red';
    }
})
document.getElementById('font').addEventListener('click',function(){
    // console.log('apply background')
    const friends= document.getElementsByClassName('friend');
    // console.log(friends)
    for(const friend of friends){
        // console.log(friend)
        // friend.style.backgroundColor = 'red';
        // friend.style.border ='2px solid red';
        friend.style.font= 'italic bold 20px arial,serif';
       
    }
})


document.getElementById('center').addEventListener('click', function(){
    // console.log('cetering')
    const third = document.getElementById('third');
    third.style.textAlign = 'center'
})
document.getElementById('add-friend').addEventListener('click', function(){
    
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div')
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>someting added New</p>
    `
    friendContainer.appendChild(friend);
    
})