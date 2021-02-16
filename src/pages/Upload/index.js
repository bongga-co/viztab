import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { FileUploader } from 'components/FileUploader'
import { ProgressBar } from 'components/ProgressBar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  text-align: left;
  overflow: hidden;

  & .content {
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    box-sizing: border-box;
    width: 100%;
  }

  & .files {
    margin-left: 32px;
    align-items: flex-start;
    justify-items: flex-start;
    flex: 1;
    overflow-y: auto;
  }

  & .actions {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 32px;
  }

  & .filename {
    margin-bottom: 8px;
    font-size: 16px;
    color: ${props => props.theme.content.close};
  }

  & .row {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    padding: 8px;
    overflow: hidden;
    box-sizing: border-box;
  }

  & .checkIcon {
    opacity: 0.5;
    margin-left: 32px;
  }

  & .progress_wrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  }

  button {
    font-size: 14px;
    display: inline-block;
    height: 36px;
    min-width: 88px;
    padding: 6px 16px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border: 0;
    border-radius: 2px;
    background: ${props => props.theme.content.primary};
    color: ${props => props.theme.content.fullscreenText};
    outline: 0;
  }

  button:disabled {
    background: rgb(189, 189, 189);
    cursor: default;
  }
`

const Upload = () => {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [successfullUploaded, setSuccessfullUploaded] = useState(false)

  const onFilesAdded = (data) => setFiles(files.concat(data))

  const uploadFiles = async () => {
    setUploadProgress({})
    setUploading(true)

    const promises = []
    files.forEach(file => promises.push(sendRequest(file)))

    try {
      await Promise.all(promises)

      setSuccessfullUploaded(true)
      setUploading(false)
    } catch (e) {
      setSuccessfullUploaded(true)
      setUploading(false)
    }
  }

  const sendRequest = (file) => {
    return new Promise((resolve, reject) => {
      const req = new window.XMLHttpRequest()

      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          const copy = { ...uploadProgress }
          copy[file.name] = {
            state: 'pending',
            percentage: (event.loaded / event.total) * 100
          }
          setUploadProgress(copy)
        }
      })

      req.upload.addEventListener('load', event => {
        const copy = { ...uploadProgress }
        copy[file.name] = { state: 'done', percentage: 100 }

        setUploadProgress(copy)
        resolve(req.response)
      })

      req.upload.addEventListener('error', event => {
        const copy = { ...uploadProgress }
        copy[file.name] = { state: 'error', percentage: 0 }

        setUploadProgress(copy)
        reject(req.response)
      })

      const formData = new window.FormData()
      formData.append('file', file, file.name)

      req.open('POST', 'http://localhost:8000/upload')
      req.send(formData)
    })
  }

  const renderProgress = (file) => {
    const progress = uploadProgress[file.name]

    if (uploading || successfullUploaded) {
      return (
        <div className='progress_wrapper'>
          <ProgressBar
            progress={progress ? progress.percentage : 0}
          />
          <img
            className='checkIcon'
            alt='done'
            src='/images/icons/check.svg'
            style={{
              opacity: progress && progress.state === 'done' ? 0.5 : 0
            }}
          />
        </div>
      )
    }
  }

  const renderActions = () => {
    if (successfullUploaded) {
      return (
        <button
          onClick={() => {
            setFiles([])
            setSuccessfullUploaded(false)
          }}
        >
          Limpiar
        </button>
      )
    } else {
      return (
        <button
          disabled={files.length < 0 || uploading}
          onClick={uploadFiles}
        >
          Enviar
        </button>
      )
    }
  }

  return (
    <Box px={5}>
      <Container>
        <div className='content'>
          <div>
            <FileUploader
              onFilesAdded={onFilesAdded}
              disabled={uploading || successfullUploaded}
            />
          </div>
          <div className='files'>
            {files.map(file => {
              return (
                <div key={file.name} className='row'>
                  <span className='filename'>{file.name}</span>
                  {renderProgress(file)}
                </div>
              )
            })}
          </div>
        </div>
        <div className='actions'>{renderActions()}</div>
      </Container>
    </Box>
  )
}

export default Upload
