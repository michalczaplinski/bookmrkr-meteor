var TopMenu = React.createClass( {

    render: function() {

        return (
            <div className="ui menu grid items">
                <div className="left aligned three wide column">
                    <a className="item slidebar">
                        <i className="sidebar icon large"></i>
                    </a>
                </div>
                <div className="ten wide column">
                    <div className="ui fluid input">
                        <input type="text" placeholder="Search for bookmarks..."/>
                    </div>
                </div>
                <div className="right aligned three wide column">
                    <a className="item settings" >
                        <i className="setting icon large"></i>
                    </a>
                </div>
            </div>
        );
    }
});

export default TopMenu;
