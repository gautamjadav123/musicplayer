const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "River Flows In You",
      artist: "Yiruma",
      song: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/24/ac/cb24ac75-128c-f817-7d81-7fbffbdaafe3/mzaf_1522770279362005862.plus.aac.ep.m4a",
      imgSrc: "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/5f/f4/9b/5ff49b8c-d0bb-3748-14f4-131edfb332ce/first_love_3000.jpg/400x400cc.jpg",
    },
    
  ];
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b60bd2be1mshe8a3162aadca832p1be917jsnd6222aed7df1',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  export { Songs };

  