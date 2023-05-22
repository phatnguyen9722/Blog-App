import React from 'react';
import Edit from '../asset/img/edit.png';
import Delete from '../asset/img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

function Single() {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/116432989_2015067271961295_6838647970199572734_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wmYGWxkkQakAX8E0AtZ&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAjeb0hzhjqs4oyQ4JtWTIMirAAeJ6EmRRSrjNH4CwKoQ&oe=648D875D"
                    alt="This is content img"
                />

                <div className="user">
                    <img
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/313413293_2755560307911984_982760301685561661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w9yzGNSevpEAX9IPp7N&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBIUQiyGbexr9oZRHgiu6Vu520QH1I4ZcVOdy7XYUcidQ&oe=6470C539"
                        alt="This is user img"
                    />

                    <div className="info">
                        <span>Phat Nguyen</span>
                        <p>Posted 24 hours ago</p>
                    </div>
                    <div className="icon-crud">
                        <Link to={`write?edit=2`}>
                            <img src={Edit} alt="icon here" />
                        </Link>
                        <img src={Delete} alt="icon here" />
                    </div>
                </div>
                <h1>This is header</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.{' '}
                    <br />
                </p>
            </div>

            <Menu />
        </div>
    );
}

export default Single;
