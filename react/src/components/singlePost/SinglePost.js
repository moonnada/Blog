import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolar sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam? 
                </p>
        
            </div>
        </div>
    )
}
