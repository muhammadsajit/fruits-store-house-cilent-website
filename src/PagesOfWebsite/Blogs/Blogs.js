import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container question-container'>
            <h1 className='text-primary text-center'>Frequent Question and Answer</h1>
            <div>
                <h2>1.Difference Between Javascript and Nodejs</h2>
                <p>Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers and It is mostly used on the server-side.Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags.Javascript is used in frontend development and Nodejs is used in server-side development.	It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++ and Nodejs is written in C, C++ and Javascript.  </p>
            </div>
            <div>
                <h2 > 2.Difference Between SQL and NoSQL</h2>
                <p> Sql isRelational Database Management System (RDBMS) and Nosql is Non-relational or distributed database system.Sql have fixed or static or predefined schema and Nosql have dynamic schema.Sql are not suited for hierarchical data storage and Nosql are best suited for hierarchical data storage.Sql are best suited for complex queries and Nosql are not so good for complex queries.Sql Vertically Scalable and Nosql Horizontally scalable.</p>
            </div>
            <div>
                <h2>3.What is the purpose of JWT and How does it work</h2>
                <p>Purpose of JWT: JSON Web Token, is an open standard used to share security information between two parties- a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.Tokens are stateless. The token is self-contained and contains all the information it needs for authentication</p>
                <p>JWT works as:JWT is mainly used for authorization.When a client login with username and password then server creates a token for  the client in the backend.And server sends the token to the client then client stores the token either local storage or browser cookie.And then whwn the client makes a request in the backend,a copy of the token is send to the server for authorization.then server verifies the JWT signature before giving the authorization.</p>
            </div>
        </div>
    );
};

export default Blogs;