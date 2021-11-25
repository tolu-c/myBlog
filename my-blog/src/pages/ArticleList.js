import React from 'react'
import articleContent from './articleContent'
import Articles from '../components/Articles'

function ArticleList() {
    return (
        <>
            <h1 className="text-4xl font-bold my-6 text-gray-800 capitalize">Article lists</h1>
            <div className="container py-4 mx-auto">
                <div className='flex flex-wrap -m-4'>
                    <Articles articles={articleContent} />
                </div>
            </div>
        </>
    )
}

export default ArticleList
