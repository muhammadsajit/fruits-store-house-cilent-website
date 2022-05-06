import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center'>Frequent Question and Answer</h1>
            <div>
                <h2>1.Difference Between Javascript and Nodejs</h2>
                <p>Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers and It is mostly used on the server-side.Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags.Javascript is used in frontend development and Nodejs is used in server-side development.	It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++ and Nodejs is written in C, C++ and Javascript.  </p>
            </div>
            <div>
                <h2 > Difference Between SQL and NoSQL</h2>
                <p> Sql isRelational Database Management System (RDBMS) and Nosql is Non-relational or distributed database system.Sql have fixed or static or predefined schema and Nosql have dynamic schema</p>
            </div>
        </div>
    );
};

export default Blogs;