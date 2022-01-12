import React from "react"
import './file.css'

const File = ({ file }) => {
    return <div className="file">
        <img src="" alt="" className="file__img" />
        <div className="file__name">{file.name}</div>
        <div className="file__date">{file.date}</div>
        <div className="file__size">{file.size}</div>
    </div>
}

export default File
