import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import File from "./file/File"
import './filelist.css'

const FileList = () => {
    // const files = useSelector(state=> state.files).map(file => <File/>)
    const files = [
        { id: 1, name: 'direc', type: 'dir', size: '5gb', date: '20.01.2022' },
        { id: 2, name: 'direc2', type: 'dir', size: '5gb', date: '20.01.2022' },
        { id: 3, name: 'direc3', type: 'dir', size: '5gb', date: '20.01.2022' },
    ].map(
        file => <File key={file.id} file={file}/>)

    return <div className="filelist">
        <div className="filelist__header">
            <div className="filelist__name">Название</div>
            <div className="filelist__data">Дата</div>
            <div className="filelist__size">Размер</div>
        </div>
        {files}
    </div>
}

export default FileList
