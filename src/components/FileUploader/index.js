import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  background-color: ${props => props.highlight && 'rgb(188, 185, 236)'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};

  & > img {
    opacity: 0.3;
    height: 64px;
    width: 64px;
  }

  & > input {
    display: none;
  }
`

export const FileUploader = ({ disabled, onFilesAdded }) => {
  const fileInputRef = useRef(null)
  const [highlight, setHighlight] = useState(false)

  const openFileDialog = () => {
    if (disabled) return
    fileInputRef.current.click()
  }

  const onFilesChanged = (event) => {
    if (disabled) return

    const files = event.target.files

    if (onFilesAdded) {
      const array = fileListToArray(files)
      onFilesAdded(array)
    }
  }

  const onDragOver = (event) => {
    event.preventDefault()

    if (disabled) return
    setHighlight(true)
  }

  const onDragLeave = () => setHighlight(false)

  const onDrop = (event) => {
    event.preventDefault()

    if (disabled) return
    const files = event.dataTransfer.files

    if (onFilesAdded) {
      const array = fileListToArray(files)
      onFilesAdded(array)
    }
    setHighlight(false)
  }

  const fileListToArray = (list) => {
    const array = []
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    return array
  }

  return (
    <Container
      highlight={highlight}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={openFileDialog}
      disabled={disabled}
    >
      <input
        ref={fileInputRef}
        type='file'
        multiple
        onChange={onFilesChanged}
      />
      <img alt='' src='/images/icons/upload.svg' />
      <span>Subir Archivos</span>
    </Container>
  )
}
