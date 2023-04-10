import React from 'react'

import blog_01 from '../../../img/blog.png'
import blog_02 from '../../../img/blog.png'
import blog_03 from '../../../img/blog.png'
import blog_04 from '../../../img/blog.png'

export default function Content() {
    return (
        <div className="showcase-content">
            <img src={blog_01} alt="blog_01" />
            <img src={blog_02} alt="blog_02" />
            <img src={blog_03} alt="blog_03" />
            <img src={blog_04} alt="blog_04" />
        </div>
    )
}
