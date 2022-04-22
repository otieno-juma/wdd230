  // current date 
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', time: 'numeric'};
  document.getElementById('currentdate').textcontent = new Date().tolocaleDatestring('en-US', options);
  