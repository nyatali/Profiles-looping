const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Kyiv',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Mary Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Rivne',
        image: 'https://randomuser.me/api/portraits/women/53.jpg'
    },
    {
        name: 'Mark Peters',
        age: 44,
        gender: 'male',
        lookingfor: 'female',
        location: 'Odessa',
        image: 'https://randomuser.me/api/portraits/men/43.jpg'
    }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul> 
        `;

        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
        `;
    } else {
        window.location.reload();
    }

};

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
      next: function() {
          return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true } 
        }
    };
}
