import "./cv.css"
import React, { useState } from 'react';
import { useRef } from 'react';

const Cv = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      setFiles(event.dataTransfer.files)
    };
    
    // send files to the server // learn from my other video
    const handleUpload = () => {
      const formData = new FormData();
      formData.append("Files", files);
      console.log(formData.getAll())
      // fetch(
      //   "link", {
      //     method: "POST",
      //     body: formData
      //   }  
      // )
    };
  
    if (files) return (
      <div className="uploads">
          <ul>
              {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
          </ul>
          <div className="actions">
              <button onClick={() => setFiles(null)}>Cancel</button>
              <button onClick={handleUpload}>Upload</button>
          </div>
      </div>
    )
  
    return (
      <>
      <h1 className="text-4xl mt-5">CV Manager!</h1>
      <p className="text-xl">Ready to jump back in?</p>
          <div 
              className="dropzone m-5"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
          >
            <h1 className="text-cyan-500">Drag and Drop Files to Upload</h1>
            <h1 className="text-cyan-600" >To upload file size is (Max 5Mb) and allowed file types are (.doc, .docx, .pdf)</h1>
            <input 
              type="file"
              multiple
              onChange={(event) => setFiles(event.target.files)}
              hidden
              accept="image/png, image/jpeg"
              ref={inputRef}
            />
            <button className="btn btn-success" onClick={() => inputRef.current.click()}>Upload Resume</button>
          </div>
      </>
    );
  };
   


export default Cv;