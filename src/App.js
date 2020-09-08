import React from 'react';
import Header from './Components/Layout/Header';
import Post from './Components/Post';

function App() {
    return (
      <>
      <Header />
      <div id="post-container">
        <Post 
          title="Almost half of senior employees confess to slacking off at work"
          url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
          shorturl="hrreview.co.uk"
          username="somedude"
          time="8 hours ago"
          comments={420}
        />
      </div>
      
      </>
  );
}

export default App;
