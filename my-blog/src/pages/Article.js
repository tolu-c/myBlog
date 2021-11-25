import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './articleContent'
import Articles from '../components/Articles'

function Article() {
    const params = useParams()
    const name = params.name

    const article = articleContent.find((article) => article.name === name)
    if (!article) return <h1 className='text-4xl font-bold text-gray-900 text-center mx-auto'>Article does not exist</h1>

    const otherArticles = articleContent.filter(article => article.name !== name)
    return (
        <>
            <h1 className="text-4xl font-bold my-6 text-gray-800">{article.title}</h1>
            {article.content.map((paragraph, index) => (
                <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
            ))}
            <h1 className='text-xl font-bold my-4 mt-8 txt-gray-800'>
                Other Articles
            </h1>
            <div className='flex flex-wrap'>
                <Articles articles={otherArticles} />
            </div>
        </>
    )
}

export default Article
