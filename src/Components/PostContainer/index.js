import React from 'react';
import Post from './Post';

const PostContainer = () => {
    return(
        <>
             {/* We can .map() the Firebase DB for content. This Post component will be the base for it. */}
            <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
             <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
                         <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
                         <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
                         <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
                         <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />
        </>
    )
}
export default PostContainer;