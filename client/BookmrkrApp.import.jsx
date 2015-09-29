import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import Grid from './Grid';
import Settings from './Settings';

var BookmrkrApp = React.createClass({

    // mixins: [ReactMeteorData],
    //
    // getMeteorData() {
    //
    //   return {
    //   };
    // },

    render: function() {
        return (
            <body>
                <Sidebar />
                <div className="pusher">
                    <TopMenu/>
                    <Grid/>
                </div>
                <Settings/>
            </body>
        );
    },

});
export default BookmrkrApp;
