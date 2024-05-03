// Exercise: Use a sequence of arrow functions to calculate the total 
// number of seconds for only those videos
//  that have 'Code' in their titles.

const playList = [
    { title: 'Learn to Code', dur: '5:34' },
    { title: 'Learn to Code', dur: '2:33' },
    { title: 'Learn to Skate', dur: '15:36' },
    { title: 'Learn to Code', dur: '8:32' },
    { title: 'Learn to Skate', dur: '10:17' },
    { title: 'Learn to Skate', dur: '15:36' },
    { title: 'Learn to Code', dur: '13:55' },
  ];
  
  const totalSeconds = playList
    .filter(video => video.title.includes('Code')) // Filter videos with 'Code' in title
    .map(video => {
      const [minutes, seconds] = video.dur.split(':').map(parseFloat); // Split duration into minutes and seconds
      return minutes * 60 + seconds; // Convert duration to total seconds
    })
    .reduce((total, seconds) => total + seconds, 0); // Sum up all the seconds
  
  console.log(totalSeconds); // Output the total number of seconds
