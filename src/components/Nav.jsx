import React from 'react';
import {Link, NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <div className="nav_tabs">
            <div className='tab'>
                <NavLink className={({isActive}) => (isActive ? 'active-tab' : 'tab')} to='/'>
                    <div className="link-wrapper">
                        <div className="link-item">
                            <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round"
                                 stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 7.5c.75-2.96 3.583-4.472 9.75-4.5a.747.747 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75c-6 0-8.318 1.21-9.75 3-1.424-1.781-3.75-3-9.75-3-.463 0-.75-.377-.75-.84V3.75A.747.747 0 0 1 2.25 3c6.167.028 9 1.54 9.75 4.5Z"></path>
                                <path d="M12 7.5V21"></path>
                            </svg>
                        </div>
                        <div className="link-item">
                            Vocabulary
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className='tab'>
                <NavLink className={({isActive}) => (isActive ? 'active-tab' : 'tab')} to='/game'>
                    <div className="link-wrapper">
                        <div className="link-item">
                            <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.75 3h1.5a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-15A2.25 2.25 0 0 1 6.75 3h1.5"></path>
                                <path
                                    d="M14.525 1.5h-5.05c-.677 0-1.225.548-1.225 1.225v.55c0 .677.548 1.225 1.225 1.225h5.05c.677 0 1.225-.548 1.225-1.225v-.55c0-.677-.548-1.225-1.225-1.225Z"></path>
                            </svg>
                        </div>
                        <div className="link-item">
                            Repeat Words
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
