import React from 'react';
import BlueButton from '../Layout/BlueButton';
import Comment from './Comment';
import Post from '../PostContainer/Post';

const Comments = () => {
    return(
        <>
            <Post 
            title="Almost half of senior employees confess to slacking off at work"
            url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
            shorturl="hrreview.co.uk"
            username="somedude"
            time="8 hours ago"
            comments={420}
            />

            <div className="m-auto w-2/3 my-10 flex flex-col">
                <form className="place-content-center">
                    <textarea className="w-1/2 p-6 mb-4 border-2 border-solid border-gray-300">lol</textarea>
                    <div className="w-40 flex">
                        <BlueButton text="Add Comment" />
                    </div>
                </form>
 
            {/* Comments associated with Post id  */}
            <Comment 
                username="somebody"
                time="5 hours ago" 
                comment="once told me" />
            
            <Comment 
                username="the world"
                time="5 hours ago" 
                comment="was gonna roll me" />
            
            <Comment 
                username="I"
                time="5 hours ago" 
                comment="ain't the sharpest tool in the shed" />
            
            </div>
    </>
    );
}

export default Comments;