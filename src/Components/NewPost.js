import React, {useState} from 'react';
import BlueButton from '../Components/Layout/BlueButton';

const NewPost = () => {
        
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    
    const submitValue = () => {
        const formDetails = {
            'title' : title,
            'url' : url
        }
        console.log(formDetails);
    }

    return(
      <div className="m-auto w-1/3 flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
          <form className="w-full flex flex-col mx-auto py-8 px-6">
          <h4 className="font-bold uppercase text-blue-600">Create a new post</h4>
              <div className="flex flex-col mt-4">
                  <label name="username" className="uppercase text-sm mb-2 font-bold">
                    Post Title
                  </label>
                  <input className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg" type="text"  placeholder="Meep." name="title" onChange={e => setTitle(e.target.value)} />
              </div>

              <div className="flex flex-col mt-4">
                  <label name="url" className="uppercase text-sm mb-2 font-bold">
                      URL
                  </label>
                  <input className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg" type="text" placeholder="https://site.com" name="url"  onChange={e => setUrl(e.target.value)}/>
                </div>
                <div className="mt-8">
                    <div onClick={submitValue} className="uppercase w-24 font-bold"><BlueButton text="Submit" /></div>
                </div>
            </form>
        </div> 
    )
}
export default NewPost;