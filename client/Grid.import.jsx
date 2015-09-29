import BookmarkList from 'BookmarkList';
import BookmarkAdder from 'BookmarkAdder';

var Grid = React.createClass( {

    render: function() {
        return  (
            <div className="ui grid container">
                <div className="twelve wide column centered">
                    <BookmarkList/>
                    <BookmarkAdder/>
                </div>
            </div>
        );
    }
});
export default Grid;
