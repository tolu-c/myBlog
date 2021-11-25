import React from 'react'
import { Link } from 'react-router-dom'

function Articles({ articles }) {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className='p-4 md:2-1/2'>
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <Link to={`/article/${article.name}`}>
                            <img className='lg:h=48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt='thumbnail' />
                        </Link>
                        <div className='p-6'>
                            <Link to={`/article/${article.name}`} key={index}>
                                <h3 className='text-lg title-font font-medium text-gray-800 hover:text-blue-600'>{article.title}</h3>
                            </Link>
                            <p className='leading-relaxed mb-3'>
                                {article.content[0].substring(0, 100)}...
                            </p>
                            <div className='flex items-center flex-wrap'>
                                <Link className='text-bg-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>Learn more...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Articles
