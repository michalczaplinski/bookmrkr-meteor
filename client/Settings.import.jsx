var Settings = React.createClass({

    render: function() {
        return (
            <div className="ui small modal">
                <i className="close icon"></i>
                <div className="header">
                    Settings
                </div>
                <div className="ui content">
                    <div className="ui relaxed divided link items">
                        <div className="ui item button">
                            <i className="ui user icon large"></i> Account settings
                        </div>
                        <div className="ui item button">
                            <i className="cloud download icon large"></i> Import bookmarks
                        </div>
                        <div className="ui item button">
                            <i className="cloud upload icon large"></i> Export bookmarks
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui negative red labeled button">
                        Cancel
                    </div>
                    <div className="ui positive right labeled button">
                        OK
                    </div>
                </div>
            </div>
        )
    }
});

export default Settings;
