import { useState } from 'react'
import styles from './CreatePost.module.css'
import { useIsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../context/AuthContext'

function CreatePost() {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [formError, setFormError] = useState('')

  const { insertDocument, response } = useIsertDocument('posts')

  const { user } = useAuthValue()

  const handleSubmit = e => {
    e.preventDefault()

    setFormError('')

    //check all values
    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })

  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name='title'
            required
            placeholder='Insira um título para o seu post'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name='image'
            required
            placeholder='Insira a URL de uma imagem que representa o seu post'
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name='body'
            required
            placeholder='Insira o conteúdo do seu post'
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name='tags'
            required
            placeholder='Insira as tags separadas por vírgula'
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </label>
        {!response.loading && <button className='btn'>Postar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
      </form>
    </div>
  )
}

export default CreatePost