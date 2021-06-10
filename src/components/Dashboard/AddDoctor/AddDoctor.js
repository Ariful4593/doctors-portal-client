import React from 'react';
import { useState } from 'react';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('https://fathomless-badlands-18502.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            // e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Upload a image</label>
                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Name" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AddDoctor;