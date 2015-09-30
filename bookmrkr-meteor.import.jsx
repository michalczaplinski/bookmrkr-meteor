import BookmrkrApp from 'client/BookmrkrApp';

if (Meteor.isClient) {

    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        React.render(<BookmrkrApp/>, document.getElementById("render-target"));
        console.log("hello")
    });
}
