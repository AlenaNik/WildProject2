import React, {Component} from 'react';

const Contact = () => {
    return (
        <div className="ph3 ph4-ns pv6 bt b--black-10 black-70">
            <a href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">hello@satelite.com</a>
            <p className="f6 db b ttu lh-solid">© 2019 Wild Code School Second Project</p>
            <div className="mt5">
                <a href="https://github.com/evadav" title="" className="f6 dib pr2 mid-gray dim">Eva on GitHub</a>
                <a href="https://github.com/AlenaNik" title="" className="f6 dib ph2 mid-gray dim">Alena on GitHub</a>
                <a href="https://github.com/rakelqr" title="" className="f6 dib pl2 mid-gray dim">Raquel on GitHub</a>
                <a href="https://github.com/AlenaNik/WildProject2" title="" className="f6 dib pl2 hot-pink dim">Project Repo</a>
            </div>
        </div>
    );
};

export default Contact;