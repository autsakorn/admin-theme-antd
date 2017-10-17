import React, {Component} from 'react';
import $ from 'jquery';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    triggerToggleSidebar = () => {
        console.log('triggerToggleSidebar');
        $('body').toggleClass('show-sidebar');
        $('body').addClass('show-main-overlay');
    }
    clickOverlay = () => {
        $('body').removeClass('show-main-overlay');
        $('body').removeClass('show-sidebar');
    }
    render(){
        return (<div>
                    <div id="sidebar" >
                        {/* <div className="nano-content">
                            <div className="logo-container">
                                <span className="logo glyphicon glyphicon-envelope"></span>
                                Mail
                            </div>
                            <a className="compose-button">Compose</a>
                            <menu className="menu-segment">
                                <ul>
                                    <li className="active"><a href="#">Inbox<span> (43)</span></a></li>
                                    <li><a href="#">Important</a></li>
                                    <li><a href="#">Sent</a></li>
                                    <li><a href="#">Drafts</a></li>
                                    <li><a href="#">Trash</a></li>
                                </ul>
                            </menu>
                            <div className="separator"></div>
                            <div className="bottom-padding"></div>
                        </div> */}
                    </div>
                    <div id="main">
                            <div onClick={()=>this.clickOverlay()} className="overlay"></div>
                            <header className="header">
                                
                                <div className="page-title">
                                    <a onClick={()=>this.triggerToggleSidebar()} className="sidebar-toggle-btn trigger-toggle-sidebar">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    {/* <span className="line line-angle1"></span>
                                    <span className="line line-angle2"></span> */}
                                    </a>
                                    <span>vSpace</span>
                                    
                                </div>
                            </header>
                            <div id="main-nano-wrapper" >
                                1234
                                {/* <div className="nano-content">
                                    <ul className="message-list">
                                        <li className="unread">
                                            <div className="col col-1"><span className="dot"></span>
                                                <div className="checkbox-wrapper">
                                                <input type="checkbox" id="chk1" />
                                                
                                                </div>
                                                <p className="title">Lucas Kriebel (via Twitter)</p><span className="star-toggle glyphicon glyphicon-star-empty"></span>
                                            </div>
                                            <div className="col col-2">
                                                <div className="subject">Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter! &nbsp;&ndash;&nbsp; <span className="teaser">@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span></div>
                                                <div className="date">11:49 am</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="load-more-link">Show more messages</a>
                                </div> */}
                            </div>
                            
                    </div>
            </div>);
    }
}