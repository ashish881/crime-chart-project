import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
             <Link to='/'><span className="f-span">Crime Report</span></Link>
            <Link to='/2016'><span >Nevada2016</span></Link>
            <Link to='/2017'><span>Nevada2017</span></Link>
            <Link to='/2018'><span>Nevada2018</span></Link>
            <Link to='/2019'><span>Nevada2019</span></Link>
        </div>
    )
}
