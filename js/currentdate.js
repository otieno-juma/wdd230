  // current year
  const options = {year: 'numeric'};
  document.queryselector('year').textcontent = new year().toLocaleDateString('en', options);
  // current date 
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  document.getElementById('currentdate').textcontent = new Date().toLocaleDateString('en', options);
  